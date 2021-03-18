// perulangan manual
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// looping dengan for loop
// ++ disebut increment
let angka = 1;
for (angka; angka <= 100; angka++) {
  console.log(angka);
}

// looping dengan decrement
// -- disebut dengan decrement
let angka = 10;
for (angka; angka > 0; angka--) {
  console.log(angka);
}

// looping penambahan deret
let jumlah = 0;
for (let deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log("jumlah saat ini: " + jumlah);
}
console.log(jumlah);

// looping odd or even
for (let angka = 0; angka <= 10; angka++) {
  if (angka === 0) {
    console.log(angka + " adalah angka genap");
  } else if (angka % 2 === 0) {
    console.log(angka + " adalah angka genap");
  } else {
    console.log(angka + " adalah angka ganjil");
  }
}

// looping dengan desimal atau pecahan
for (let angka = 0; angka <= 1; angka += 1 / 10) {
  console.log(angka);
}

// while loop
let angka = 1;
while (angka <= 10) {
  console.log(angka);
  angka++;
}

// while loop 2
let angka = 1;
while (angka < 10) {
  console.log(angka);
  angka += 2;
}

// while untuk mencari jumlah user
let user = 99;
let i = 1;
while (i <= user) {
  console.log("user ke", i);
  i++;
}

// do while
// do while berarti kita melakukan sesuatu 1 kali sebelum dia melakukan pengecheckan kondisi

let bensin = 10;
while (bensin > 0) {
  console.log("Mesin bisa nyala dan jalan", bensin);
  bensin--;
}

do {
  console.log("starter mobil");
  bensin--;
} while (bensin > 0);

// nested loop artinya looping dalam looping

for (let baris = 1; baris <= 10; baris++) {
  for (let kolom = 1; kolom <= baris; kolom++) {
    document.write("<br/>");
    document.write("baris", +baris);
    document.write("<br/>");
    document.write("kolom", +kolom);
  }
}