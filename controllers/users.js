const Users = require('../models/users');

exports.all = (req,res)=>{
    Users.all((err,docs)=>{
        if(err){
            throw new Error(err);
            return res.sendStatus(500);
        }
        return res.send(docs)
    })
};
exports.findById = (req,res)=>{
    Users.findById(req.params.id,(err,doc)=>{
        if(err){
            throw new Error(err);
            return res.sendStatus(500);
        }
        return res.send(doc);
    })
};
exports.create = (req,res)=>{
    let user = {
        login:req.body.login
    };
    Users.create(user,(err,result)=>{
        if (err){
            throw new Error(err);
            return res.sendStatus(500);
        }
        return res.send(user);
    })
};
exports.update = (req,res)=>{
    Users.update(req.params.id,{login:req.body.login},(err,result)=>{
        if(err){
            throw new Error(err);
            return res.send(500);
        }
        return res.sendStatus(200);
    })
};
exports.delete = (req,res)=>{
    Users.delete(req.params.id,(err,result)=>{
        if (err){
            throw new Error(err);
            return res.sendStatus(500);
        }
        return res.sendStatus(200);
    })
}