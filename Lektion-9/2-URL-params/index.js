
const listPosts = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts?_limit=4'

  const res = await fetch(url);
  const posts = await res.json();

  const output = document.querySelector('#output');
  output.innerHTML = '';

  posts.forEach(post => {
    let template = `
    <a href="details.html?id=${post.id}" class="card p-3 my-3 post" >
      <h3>${post.title}</h3>
      <p>${post.body.slice(0, 50)}...</p>
    </a>
    `

    output.innerHTML += template
  })
}


listPosts()