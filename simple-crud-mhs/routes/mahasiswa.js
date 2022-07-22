const jwt = require('jsonwebtoken');
// gunakan model mahasiswa yang sudah dibuat untuk mengelola database
const Mahasiwa = require('../models/mahasiswa');
const mahasiswaRouter = require('express').Router();

// route ini dapat diakses melalui URL : http://localhost:3000/api/mahasiswa
// GUNAKAN KEYWORD async/await UNTUK MENGGUNAKAN MODEL
// TAMPILKAN JSON KE PENGGUNA

// KODE INI SEBAGAI MIDDLEWARE UNTUK MENGECEK APAKAH PENGGUNA TERAUTENTIKASI JWT
// SILAHKAN DIFAHAMI DAN JANGAN LUPA DIPRAKTEKKAN
function verifyUser(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];
    req.token = token;
    next();
  } else {
    res.status(403);
    res.json({ message: 'Anda belum terautentikasi' });
  }
}
function jwtVerify(token, res) {
  jwt.verify(token, process.env.SECRET_KEY, (err, auth) => {
    if (err) {
      res.status(403);
      res.json({
        error: err,
        message: 'Anda belum terautentikasi',
      });
      res.end();
    }
  });
}

// TAMPILKAN SEMUA DATA MAHASISWA
mahasiswaRouter.get('/', verifyUser, async (req, res, next) => {
  jwtVerify(req.token, res);

  const response = await Mahasiwa.find({});
  res.json({
    message: 'semua data ditemukan',
    data: response,
  });
});

// TAMPILKAN DATA MAHASIWA BERDASARKAN ID
mahasiswaRouter.get('/(:id)', verifyUser, async (req, res) => {
  jwtVerify(req.token, res);
  const id = req.params.id;
  // lanjutkan
});

// TAMBAH DATA MAHASIWA
mahasiswaRouter.post('/', verifyUser, async (req, res) => {
  jwtVerify(req.token, res);
  // lanjutkan
});

// UBAH DATA MAHASISWA
mahasiswaRouter.put('/(:id)', verifyUser, async (req, res) => {
  jwtVerify(req.token, res);
  const id = req.params.id;
  // lanjutkan
});

// HAPUS DATA MAHASISWA
mahasiswaRouter.delete('/(:id)', verifyUser, async (req, res) => {
  jwtVerify(req.token, res);
  // lanjutkan
});

// TAMBAHAN: buat sendiri sebuah route untuk mencari data mahasiswa berdasarkan `keyword` yang diketikkan pengguna
// keyword yang dicari adalah `nama`
// boleh gunakan method `get` atau `post`
mahasiswaRouter.post('/search', verifyUser, async (req, res) => {
  jwtVerify(req.token, res);
  const keyword = req.body.keyword;
  // lanjutkan
});

module.exports = mahasiswaRouter;
