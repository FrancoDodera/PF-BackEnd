const mongoose = require('mongoose');
const {setCarsBDD} = require('./controllers/CarController')
// const {USER,HOST, PASSWORD, PORT_DB} = process.env

// const URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.o4mj3pz.mongodb.net/?retryWrites=true&w=majority`
const URI="mongodb://mongo:MwaJrBt90r1ThNOmzoot@containers-us-west-139.railway.app:6523"
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
      await setCarsBDD()
      console.log('Conectado a MongoDB');
    
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
  }
};

module.exports = connectToMongoDB;

