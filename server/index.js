require('dotenv').config()
const server = require('./src/app')
const connectToMongoDB = require('./src/db')
connectToMongoDB().then(() => {
    // La conexión se estableció correctamente
  
    // Iniciar el servidor
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log('Server listening on port', port);
    });
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});