// const params = new URLSearchParams(window.location.search)
// const id = params.get('id')

const id = new URLSearchParams(window.location.search).get('id')
// console.log(id)

const getPost = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/' + id

  const res = await fetch(url);
  const post = await res.json();

  const output = document.querySelector('#output');
  output.innerHTML = '';

  output.innerHTML = `
  <div class="card p-3 mt-5 text-center" >
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  </div>
  `
}


getPost()