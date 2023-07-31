const mongoose = require('mongoose');
// const {USER,HOST, PASSWORD, PORT_DB} = process.env

// const URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.o4mj3pz.mongodb.net/?retryWrites=true&w=majority`
const URI="mongodb://mongo:q7gi8XU9aS78UBoyD3qR@containers-us-west-123.railway.app:5621"
// const URI=`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT_DB}`
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

