const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/carDB'

// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
  }
};

module.exports = connectToMongoDB;

