// 1. Buatlah sebuah file dengan nama latihan-dasar.js, lakukan:
// - Buatlah minimal tiga (3) variabel dengan nama `nama, usia, alamat`, isikan ke tiga variabel tersebut sesuai informasi Anda.
// - Buat sebuah array dengan nama `hobi`, isikan data minimal dua (2) hobi didalamnya.
//   Contoh: const hobi = [ 'memancing', 'berenang', dst... ]
// - Buat sebuah object dengan nama `sosialMedia`, isikan data minimal dua (2) data berupa properti dan value.
//   Contoh : const sosialMedia = { facebook: “Nama Fb Saya”, tiktok: "Nama Tiktok Saya", dst... }

// 2. Anda telah membuat array 'hobi', cobalah untuk melakukan perubahan pada data `urutan pertama` di array tersebut, ubah menjadi apa saja.

// 3. Buatlah sebuah object dengan nama `infoSaya` yang menampung semua informasi yang telah Anda buat sebelumnya (nama, alamat, hobi, sosialMedia, dll).
//   Contoh: const infoSaya = { nama: 'Nama Saya', alamat: 'Alamat Saya', dst... }

// 4. Masih di dalam file `latihan-dasar.js`, buatlah tiga buah functions:
// - function dengan nama `cetakNama` yang menerima parameter `nama`, di dalam function tuliskan kode untuk mencetak `Halo, nama saya ${nama}`
// - function dengan nama `penjumlahan` yang menerima parameter `angkaPertama` dan `angkaKedua`, di dalam function tuliskan kode untuk melakukan penjumlahan terhadap angkaPertama dan angkaKedua
// - function dengan nama `cetakHobi`, tuliskan kode untuk mencetak hobi dengan konsep perulangan, silakan untuk menggunakan `for`, `for of`, atau `forEach`

// catatan: dalam melakukan pencetakan dapat menggunakan console.log() atau return saja, contoh : `console.log(hasil)`, atau `return hasil`

// 1
const name = "Ardiyansyah Eka Saputra";
let age = 27;
var address = "Pandau Permai";
const hobbies = ["football", "Swimming", "Tech enthusiast"];
const socialMedia = { Instagram: "https://www.instagram.com/ardhyleo", Twitter: "https://twitter.com/Ardhy_Leo94", github: "https://github.com/ardhyleo" };

// 2
hobbies[0] = "Softball";
console.log(hobbies);

// 3
const myBio = { name: "Ardiyansyah Eka Saputra", age: 27, address: "Pandau Permai", socialMedia: { Instagram: "https://www.instagram.com/ardhyleo", Twitter: "https://twitter.com/ardhyleo", github: "https://github.com/ardhyleo" } };

// 4
function printName(name) {
  return name;
}
console.log(`Halo nama saya ${name}`);

function addition(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
}
console.log(addition(4, 3));

for (let i = 0; i < hobbies.length; i++) {
  console.log("hobi ke-" + (i + 1) + " " + hobbies[i]);
}

for (x of hobbies) {
  console.log(x);
}

hobbies.forEach(function (e, i) {
  console.log("hobi ke-" + (i + 1) + " " + e);
});
