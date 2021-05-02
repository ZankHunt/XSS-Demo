const form = document.querySelector('form');
const allMessages = document.getElementById('allMessages');
const API_URL = 'http://localhost:5000/client';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('message');

    const message = {
        name,
        content
    }

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
        const div = document.createElement('div');

        // div.innerHTML = `<b>${createdPost.name}:</b> ${createdPost.content}`
            
        div.textContent = `<b>${message.name}:</b> ${message.content}`;
        
        allMessages.appendChild(div);
    });
});