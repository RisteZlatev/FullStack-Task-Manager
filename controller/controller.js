const { name } = require("ejs");

let taskLists = [
    {id: 1, name: "Home", tasks: []},
    {id: 2, name: "Work", tasks: []},
];

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date().toLocaleDateString('en-US', options);

exports.getAllLists = (req, res)=>{
    res.render('index',{taskLists, selectedList: null, today});
};

exports.getList = (req, res) =>{
    const listId = Number(req.params.listId);
    const selectedList = taskLists.find(list => list.id === listId);

    if(selectedList){
        res.render('index',{taskLists, selectedList, today});
    }
    else{
        res.send("Could not find list");
    };
};

exports.addList = (req, res) =>{
    const {listName} = req.body;

    const nextId = taskLists.length > 0
    ? Math.max(...taskLists.map(list => list.id)) + 1
    : 1;
    const newList = {
        name: listName,
        id: nextId,
        tasks: [],
    };

    taskLists.push(newList);

    res.redirect(`/list/${nextId}`);
}

exports.addTask = (req, res) => {
    const listId = Number(req.params.listId);
    const {taskName, taskTime} = req.body;

    const list = taskLists.find(list => list.id === listId);

    const nextId = list.tasks.length > 0
    ? Math.max(...list.tasks.map(task => task.id)) + 1
    : 1

    let newTask = {
        name: taskName,
        time: '',
        id: nextId,
    };
    if(taskTime != ''){
        const datetimeInput = taskTime;

        const dateObj = new Date(datetimeInput);

        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const formattedTime = dateObj.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        newTask.time = `${formattedDate}, ${formattedTime}`;
    };
    
    list.tasks.push(newTask);

    res.redirect(`/list/${listId}`);
}

exports.deleteList = (req, res) => {
    const listId = Number(req.params.listId);
    taskLists = taskLists.filter(taskLists => taskLists.id !== listId);

    res.redirect('/');
}

exports.renameList = (req, res) =>{
    const listId = Number(req.params.listId);
    const {newName} = req.body.newName;
    
    taskLists[listId-1].name = newName;

}