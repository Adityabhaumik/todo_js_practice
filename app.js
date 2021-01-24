const addForm = document.querySelector('.add');
const todolist = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = todo =>{

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

todolist.innerHTML += html;
};


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim() ;
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
        
});

//delet todos

todolist.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


const filterTodos = (term) =>{
    Array.from(todolist.children)
        .filter((todo) =>{
            return !todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) =>{
            todo.classList.add('filtered')
        });

        Array.from(todolist.children)
        .filter((todo) =>{
            return todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) =>{
            todo.classList.remove('filtered')
        })
  

};

search.addEventListener('keyup', ( ) => {
    const term = search.value.trim().toLowerCase();
   filterTodos(term);




})