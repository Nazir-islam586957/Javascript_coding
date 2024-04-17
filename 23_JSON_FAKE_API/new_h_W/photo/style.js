
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayData(data));



const postEl = document.getElementById('post');
const displayData = (data) => {
    for (const d of data) {
        const div = document.createElement('div');
        const data = `
       <div class="card">
      <h1>${d.id}</h1>
      <p>${d.title}</p>
      <h4>${d.url}</h4>
      <h5>${d.thumbnailUrl}</h5>
      
      `;
        div.innerHTML = data;
        postEl.appendChild(div)
    }
}



