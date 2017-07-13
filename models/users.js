const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

exports.all = (cb)=>{
    db.get().collection('users').find().toArray((err,docs)=>{
        return cb(err,docs);
    })
};
exports.findById = (id,cb)=>{
     db.get().collection('users').findOne({_id:ObjectID(id)},(err,doc)=>{
          return cb(err,doc);
     })
};
exports.create = (user,cb)=>{
    db.get().collection('users').insert(user,(err,result)=>{
        return cb(err,result);
    });
};
exports.update = (id,newData,cb)=>{
    db.get().collection('users').updateOne(
        {_id:ObjectID(id)},
        newData,
        (err,result)=>{
        return cb(err,result);
    })
};
exports.delete = (id,cb)=>{
    db.get().collection('users').deleteOne(
        {_id:ObjectID(id)},
        (err,result)=>{
            return cb(err,result);
    })
};
