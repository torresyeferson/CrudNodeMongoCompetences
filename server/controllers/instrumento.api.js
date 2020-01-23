var express = require("express"),
    router = express.Router(),
    instrumenro = require("../models/instrumento");

router.get("/", function(req, res) {
    instrumenro.find({},function(err, data) {
        if (err) {
            console.log(err)
            res.send(response(false, err, null));
            return;
        }
        res.send(response(true, 'success!', data));
    });
}).get("/:id", function(req, res) {
    var id = req.params.id;
    instrumenro.find({ _id: id }, function(err, data) {
        if (err) {
            res.send(response(false, err, null));
            return;
        }
        res.send(response(true, 'success!', data[0]));
    });
}).post("/", function(req, res) {
    var obj = req.body;
    var model = new instrumenro(obj);
    console.log(obj);
       model.save(function(err, result) {
        if (err) {
          //  console.log(err);
            res.send(response(false, 'ERROR AL CREAR EL INSTRUMENTO', null));
            return;
        }
        res.send(response(true, 'created', result));
    });

}).put("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;
    console.log(obj);
    instrumenro.findByIdAndUpdate(id, { codigo: obj.codigo, valor: obj.valor, texto: obj.texto,nivel: obj.nivel },
        function(err, result) {
            if (err) {
                res.send(response(false, err, null));
                return;
            }
            res.send(response(true, 'updated', result));
        });
}).delete("/:id", function(req, res) {
    var id = req.params.id;
    instrumenro.findByIdAndRemove(id, function(err, result) {
        if (err) {
            res.send(response(false, err, null));
            return;
        }
        res.send(response(true, 'deleted', result));
    });
})

//this will create resoinse object.
function response(success, message, data) {
    return { success: success, message: message, data: data }
}

module.exports = router;