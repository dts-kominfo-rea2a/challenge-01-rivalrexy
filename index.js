// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: new Set(), //"Yellow, Pink, White, Purple",
  isHavePet: "Yes",
  education: [],
  favoriteRestaurant: new Set(),
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: new Set(),
  isHavePet: "No",
  education: [],
  favoriteRestaurant: new Set(),
};
// TODO: Masukkan hasil akhir dari kedua user di sini
firstUser.favoriteColor.add("Yellow").add("Pink").add("White").add("Purple");
firstUser.favoriteRestaurant
  .add("Bento")
  .add("Sushi")
  .add("Pancake")
  .add("Eggy")
  .add("Tempura")
  .add("Bento")
  .add("Eggy")
  .add("Padang")
  .add("Tteok")
  .add("Sushi")
  .add("Sushi");
firstUser.education.push(
  "name: SD 01, city: Jakarta, graduate: 2016",
  "name: SMP 02, city: Jakarta, graduate: 2019",
  "name: SMA 03, city: Tangerang"
);

secondUser.favoriteColor.add("Blue").add("Black").add("Grey");
secondUser.favoriteRestaurant
  .add("Tempura")
  .add("Bento")
  .add("Sushi")
  .add("Pancake")
  .add("Padang")
  .add("Katsu")
  .add("Geprek")
  .add("Pancake")
  .add("Eggy");
secondUser.education.push(
  "name: SD 02, city: Jakarta, graduate: 2010",
  "name: SMP 03, city: Bogor, graduate: 2013",
  "name: SMA 01, city: Surabaya, graduate: 2016",
  "name: Universitas Maju, city: Tangerang"
);
const users = [];
users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
