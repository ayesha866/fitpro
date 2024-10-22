const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Authentication logic here
    res.send('Login successful');
});

// Signup route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    // User registration logic here
    res.send('Signup successful');
});

app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});