// url yang digunakan dalam tugas ini
// url ini merupakan public API untuk mendapatkan sample data user
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// 1. lengkapi fungsi ini untuk mendapatkan data user dari `apiURL`
// gunakan fungsi `fetch` bawaan dari javascript
const getUserAsync = async () => {
  const response = await fetch(apiURL); 
  // ... lanjutkan

  // tampilkan data yang di dapat di => console console.log(data);
};

// 2. lengkapi fungsi ini untuk mendapatkan
// gunakan fungsi `fetch` bawaan dari javascript
const getUserPromised = () => {
  fetch(apiURL)
    .then((response) => response.json())
    // ... lanjutkan
    // tampilkan data yang di dapat di => console console.log(data);
};

getUserAsync();
getUserPromised();
