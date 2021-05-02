const form = document.querySelector('form');
const allMessages = document.getElementById('allMessages');
const postsElement = document.querySelector('.posts');
const API_URL = 'http://localhost:5000/posts';

listAllPosts();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('message');

    const message = {
        name,
        content
    };

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(createdPost => {
            form.reset();
            listAllPosts();
        });
});

function listAllPosts(){
    postsElement.innerHTML = '';
    fetch(API_URL)
    .then(response => response.json())
    .then(posts => {
        posts.reverse();
        posts.forEach(post => {
            const div = document.createElement('div');
            const header = document.createElement('h3');
            const content = document.createElement('p');

            // header.innerHTML = post.name;
            // content.innerHTML = post.content;

            header.textContent = post.name;
            content.textContent = post.content;

            div.appendChild(header);
            div.appendChild(content);

            postsElement.appendChild(div);
        });
    });
}