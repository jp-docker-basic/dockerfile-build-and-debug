const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API endpoint example
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).send('Sorry, we could not find that!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
