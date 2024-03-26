const express = require('express');
const app = express();

const usersRoutes = require('./E06-users.js');
const postsRoutes = require('./E06-posts.js');

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);

app.listen(4700, console.log('server started!'));
