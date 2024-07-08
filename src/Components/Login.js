const session = require('express-session'); // Add session
middleware
app.use(session({
 secret: 'your_secret_key',
 resave: false,
 saveUninitialized: false,
 }));
 