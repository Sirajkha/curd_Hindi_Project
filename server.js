const app = require('./app.js');

const PORT = process.env.PORT || 8000;

app.listen(PORT,() =>{
    console.log(`Server listening on port http://localhost:${PORT}... `);
    
})

console.log('Server is starting...');
console.log(`Base URL: ${process.env.BASE_URL || 'Not set'}`); // Check environment variable
