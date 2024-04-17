const card=document.getElementById('card');

const btnPost=document.getElementById('btn-post');
btnPost.addEventListener('click',function(){
    const nameText = document.getElementById('name-text');
    const commentText = document.getElementById('comment-text');

    const nameValue = nameText.value;
    const commentValue = commentText.Value;

    const post=`
    <h3>${nameValue}</h4>
    <p>${commentValue}</p>
    `;

    const cardComment = document.getElementById('card');
    cardComment.innerHTML=post;


})
