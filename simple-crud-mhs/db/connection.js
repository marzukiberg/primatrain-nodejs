const { default: mongoose } = require('mongoose');

// kredensial untuk dapat terhubung ke mongodb
// silahkan pelajari cara membuat database di MongoDB local atau MongoDB Atlas
// contoh di sini menggunakan URL database yang sudah saya buat di MongoDB Atlas
// const mongoURI =
//   'mongodb+srv://bitslab-training:bitslab-training@cluster0.as2nxer.mongodb.net/?retryWrites=true&w=majority';

// hubungkan database menggunakan mongoose
mongoose.connect(mongoURI, (err) => {
  // jika error
  if (err) throw new Error(err);

  // jika terhubung
  console.log('database connected');
});
