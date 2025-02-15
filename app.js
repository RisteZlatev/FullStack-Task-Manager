const express = require('express');
const controller = require('./controller/controller')

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get('/', controller.getAllLists);

app.get('/list/:listId', controller.getList);

app.post('/add-list', controller.addList);

app.post('/add-task/:listId', controller.addTask);

app.post('/list/delete/:listId', controller.deleteList);

const port = 10000;

app.listen(port, (err)=>{
    if(err) return console.log(err.message);
    console.log("Server started succesfully");
});