// gunakan model mahasiswa yang sudah dibuat untuk mengelola database
const Mahasiwa = require('../models/mahasiswa');
const router = require('express').Router();

// route ini dapat diakses melalui URL : http://localhost:3000/api/mahasiswa
// GUNAKAN KEYWORD async/await UNTUK MENGGUNAKAN MODEL
// TAMPILKAN JSON KE PENGGUNA

// TAMPILKAN SEMUA DATA MAHASISWA
router.get('/', async (req, res) => {
  const response = await Mahasiwa.find({});
  res.json({
    message: 'semua data ditemukan',
    data: response,
  });
});

// TAMPILKAN DATA MAHASIWA BERDASARKAN ID
router.get('/(:id)', async (req, res) => {
  const id = req.params.id;
  // lanjutkan
});

// TAMBAH DATA MAHASIWA
router.post('/', async (req, res) => {
  // lanjutkan
});

// UBAH DATA MAHASISWA
router.put('/(:id)', async (req, res) => {
  const id = req.params.id;
  // lanjutkan
});

// HAPUS DATA MAHASISWA
router.delete('/(:id)', async (req, res) => {
  // lanjutkan
});

// TAMBAHAN: buat sendiri sebuah route untuk mencari data mahasiswa berdasarkan `keyword` yang diketikkan pengguna
// keyword yang dicari adalah `nama`
// boleh gunakan method `get` atau `post`
router.post('/search', async (req, res) => {
  const keyword = req.body.keyword;
  // lanjutkan
});

module.exports = router;
