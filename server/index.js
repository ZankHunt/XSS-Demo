const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost/xss', function(err) {
    if(err) console.log(err.toString());
});
const posts = db.get('posts');

app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
    posts.find()
    .then(posts => {
        res.json(posts);
    });
});

app.post('/posts', (req, res) => {
    const post = {
        name: req.body.name,
        content: req.body.content
    };

    posts.insert(post)
        .then(createdPost => {
            res.json(createdPost);
        });
});

app.post('/client', (req, res) => {
    const message = { 
        name: req.body.name,
        content: req.body.content };
    res.json(message);
});

app.listen(5000, () => {
    console.log('Listening on Port 5000');
});
