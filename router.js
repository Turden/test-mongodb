const express = require('express');
const usersController = require('./controllers/users');

const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date());
    next();
});

router.get('/',(req,res)=>res.send('Hello API'));
router.get('/users',usersController.all);
router.get('/users/:id',usersController.findById);
router.post('/users',usersController.create);
router.put('/users/:id',usersController.update);
router.delete('/users/:id',usersController.delete);

module.exports = router;