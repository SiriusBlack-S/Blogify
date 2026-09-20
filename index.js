require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const Blog = require('./models/blog');
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    });

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));
app.use(express.static(path.resolve('./public')));

app.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        return res.render('home', { user: req.user, blogs: allBlogs });
    } catch (error) {
        return res.status(500).send('Something went wrong');
    }
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);

app.listen(PORT,  "0.0.0.0",() => console.log(`Server started at PORT:${PORT}`));
