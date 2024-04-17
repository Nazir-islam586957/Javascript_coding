
fetch('https://jsonplaceholder.typicode.com/users')
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
      <p>${d.username}</p>
      <p>${d.address}</p>
      <p>${d.geo}</p>
      <p>${d.phone}</p>
      <p>${d.website}</p>
      <h4>${d.company}</h4>
     
    
      
      `;
        div.innerHTML = data;
        postEl.appendChild(div)
    }
}



