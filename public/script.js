
const lists = document.getElementById('lists');


const newListBtn = document.getElementById('newListBtn');
const newListForm = document.getElementById('newListForm');
const cancel = document.getElementById('cancelBtn');


newListBtn.addEventListener('click', ()=>{
    newListForm.style.display = "flex";
    newListBtn.style.display = "none";
})
cancel.addEventListener('click', ()=>{
    newListForm.style.display = "none";
    newListBtn.style.display = "block";
});

//ajax(Async JS XML) - nacin da se implementira delete methodata
// document.querySelectorAll('.delete-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const id = button.getAttribute('data-id');

//         fetch(`/api/delete/${id}`, { method: 'DELETE' })
//             .then(response => {
//                 if (response.ok) {
//                     button.closest('li').remove(); // Remove the list item dynamically
//                 } else {
//                     console.error('Failed to delete');
//                 }
//             })
//             .catch(error => console.error('Error:', error));
//     });
// });


// document.querySelectorAll('.renameBtn').forEach(renameBtn =>{
//     renameBtn.addEventListener('click', (e)=>{
//         const listItem = e.target.closest('li');
//         console.log(listItem);
//         const listName = listItem.querySelector('.list-name');
//         console.log(listName);
//         const renameForm = listItem.querySelector('.renameForm');
//         console.log(renameForm);
//         const renameBtn = listItem.querySelector('.renameBtn');
//         console.log(renameBtn);
//         const deleteBtn = listItem.querySelector('.deleteBtn');
//         listName.style.display = 'none';
//         renameBtn.style.display = 'none';
//         deleteBtn.style.display = 'none';

//         renameForm.style.display = 'block';
//     })
// })


const checkboxes = document.querySelectorAll('.checkbox-task');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (e) => {
    const taskItem = e.target.closest('.taskItem'); 
    const taskName = taskItem.querySelector('.task-name');
    const taskTime = taskItem.querySelector('.task-time');

    if (e.target.checked) {
      taskName.style.textDecoration = 'line-through';
      taskName.style.color = 'gray';
      taskTime.style.textDecoration = 'line-through';
      taskTime.style.color = 'gray';
    } else {
      taskName.style.textDecoration = 'none';
      taskName.style.color = '';  
      taskTime.style.textDecoration = 'none';
      taskTime.style.color = '';  
    }
  });
});

const addTaskButton = document.getElementById('addTaskButton');
const addTaskForm = document.getElementById('addTaskForm');
const notFound = document.getElementById('notFound');

if(addTaskButton){
    addTaskButton.addEventListener('click', ()=>{
        addTaskForm.style.display = "flex";
        notFound.style.display = 'none';
    });
}

const cancelTask = document.getElementById('cancelTaskBtn');

cancelTask.addEventListener('click', ()=>{
    addTaskForm.style.display = 'none';
    notFound.style.display = 'block';
});