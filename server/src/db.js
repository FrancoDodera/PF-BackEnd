const mongoose = require('mongoose');
const {USER, PASSWORD, CLUSTER} = process.env
const URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.o4mj3pz.mongodb.net/?retryWrites=true&w=majority`

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

