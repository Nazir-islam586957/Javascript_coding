
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data));



const postEl = document.getElementById('post');
const displayData = (data) => {
    for (const d of data) {
        const div = document.createElement('div');
        const data = `
       <div class="card">
      <h1>${d.id}</h1>
      <p>${d.name}</p>
      <p>${d.email}</p>
      <h5>${d.body}</h5> 
      `;
        div.innerHTML = data;
        postEl.appendChild(div)
    }
}



