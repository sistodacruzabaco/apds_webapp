// const Router = require("express").Router; ou const {Router} = require("express");
const {Router} = require("express");
const router = Router();

//get, post, put e delete funcoes HTTP

router.get("/projectController", (req, res)=>{
    res.send("get, entrou aqui");
});

router.post("/projectController", (req, res)=>{
    res.send("post, entrou aqui");
});

router.put("/projectController/:id", (req, res)=>{
    const {id} = req.params;
    res.send('put, entrou aqui, id = ${id}');
});

router.delete("/projectController/:id", (req, res)=>{
    const {id} = req.params;
    res.send("delete, entrou aqui, id = " + id);
});

module.exports = router;
