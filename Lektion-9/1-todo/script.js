const output = document.querySelector('#output')
const form = document.querySelector('#todoForm')
const input = document.querySelector('#todoInput')

let todos = []

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  todos = await res.json()
  console.log(todos)

  listTodos()
}

fetchTodos()

const listTodos = () => {
  todos.forEach(todo => {
    output.insertAdjacentHTML('beforeend', newTodo(todo))
  })
}


const newTodo = (todo) => {
  let template = `
  <div class="border-bottom py-2">
    <div class="d-flex justify-content-between align-items-center">
      <p class="h4 m-0 todo-title ${todo.completed ? 'complete' : ''}">${todo.title}</p>
      <button class="btn btn-danger btn-sm">X</button>
    </div>
  </div>
  `
  return template
}


form.addEventListener('submit', e => {
  e.preventDefault()

  if(input.value.trim().length < 1) {
    input.classList.add('is-invalid')
    input.focus()
    return;
  }



  
})