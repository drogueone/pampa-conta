const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://darlanmpaz:acer2021@cluster0.fyhjdyt.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB is UP!');
});

mongoose.connection.on('error', (err) => {
  console.log(`Error on connect to MongoDB: ${err}`);
});

module.exports = mongoose;