const output = document.querySelector('#output')
const form = document.querySelector('#todoForm')
const input = document.querySelector('#todoInput')
const error = document.querySelector('#error')

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
    // output.insertAdjacentHTML('beforeend', createTodoElement(todo))
    createTodoElement(todo, output, 'beforeend', false)
  })
}


const createTodoElement = (todo, parent, placement, isNew) => {
  let title = todo.title.replace('<', '&lt').replace('>', '&gt')
  parent.insertAdjacentHTML(placement, `
  <div id="todo_${todo.id}" class="border-bottom py-2 ${isNew ? 'slide-in' : ''}">
    <div class="d-flex justify-content-between align-items-center">
      <p id="title_${todo.id}" class="h4 m-0 todo-title ${todo.completed ? 'complete' : ''}">${title}</p>
      <button id="delete_${todo.id}" class="btn btn-danger btn-sm">X</button>
    </div>
  </div>`)

  addRemoveOnClick(todo)
  addToggleComplete(todo)
}

const addToggleComplete = (todo) => {
  document.querySelector(`#title_${todo.id}`).addEventListener('click', () => {
    // fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     id: todo.id,
    //     completed: !todo.completed,
    //     title: todo.title,
    //     userId: 1
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    // .then(res => {
    //   if(!res.ok) {
    //     error.innerText = 'Something went wrong'
    //     error.classList.remove('d-none')
    //     return
    //   }
    //   error.classList.add('d-none')
    //   console.log(res)
    //   return res.json()
    // })
    // .then(data => {
    //   console.log(data)
    //   const _todo = document.querySelector('#todo_' + data.id)
    //   createTodoElement(data, _todo, 'beforebegin', false)
    //   _todo.remove()
    // })
    // .catch(err => console.log(err))

    todo.completed = !todo.completed
    console.log(todos)
    const todoElement = document.querySelector('#todo_' + todo.id)
    createTodoElement(todo, todoElement, 'beforebegin', false)
    todoElement.remove()
  })
}

const addRemoveOnClick = (todo) => {
  document.querySelector(`#delete_${todo.id}`).addEventListener('click', () => {
    if(todo.completed) {
      error.classList.add('d-none')
      deleteTodo(todo)
    } else {
      error.innerText = 'You need to complete the todo first'
      error.classList.remove('d-none')
    }

  })
}

const deleteTodo = async (todo) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'DELETE'
  })

  if(!res.ok) {
    error.innerText = 'Something went wrong'
    error.classList.remove('d-none')
    return
  }
  error.classList.add('d-none')

  const todoElement = document.querySelector(`#todo_${todo.id}`)

  todoElement.addEventListener('animationend', () => {
    todoElement.remove()
    todos = todos.filter(_todo => _todo.id !== todo.id)
    console.log(todos)
  })

  todoElement.classList.add('slide-out')
}


const createTodo = async (title) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title,
      completed: false,
      userId: 1
    })
  })

  if(!res.ok) {
    error.innerText = 'Something went wrong'
    error.classList.remove('d-none')
    return
  }
  error.classList.add('d-none')


  const todo = await res.json()
  // todo.id = Date.now()
  console.log(todo)
  todos.push(todo)
  // output.insertAdjacentHTML('beforeend', createTodoElement(todo))
  createTodoElement(todo, output, 'beforeend', true)

}


form.addEventListener('submit', e => {
  e.preventDefault()

  if(input.value.trim().length < 1) {
    input.classList.add('is-invalid')
    input.focus()
    return;
  }

  input.classList.remove('is-invalid')
  createTodo(input.value)
  input.value = '';

})


