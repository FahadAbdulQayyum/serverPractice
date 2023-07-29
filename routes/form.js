const express = require('express');
const { addTodo, getAllTodo, markAsDone } = require('../controller/todo');

const router = express.Router();

router.get('/',(req, res) => {
    // res.render('form',{me:"Fahad"});
    console.log('req?.body',req?.body);
    res.render('form',{me:"Fahad"});
});

router.post('/submit', (req, res) => {
    console.log('req?.bodyyy',req?.body?.data);
    addTodo(req.body.data);
    res.render('submit',{todo: req.body.data});
    // res.send('Todo added Successfully!');
});

router.post('/markAsDone', (req, res) => {
    console.log('req?.bodyyy',req?.body?.data);
    markAsDone(req.body.data);
    res.render('mark',{todo: req.body.data});
    // res.send('Todo added Successfully!');
});

router.get('/getTodo',(req, res) => {
    // return getAllTodo;
    res.send(getAllTodo())
})

module.exports = router;