// 1
let user = 1;
for (user; user <= 100; user++) {
  console.log('User Ke- ' +user);
  document.write('User Ke- ' +user+ '<br>');
}

//2
// looping penambahan
let nilai = 0;
for (nilai; nilai <= 18; nilai+=2){
  console.log(nilai);
  document.write(nilai + '<br>');
}

//3
let angka = 0;
for (angka; angka <= 20; angka++) {
    if (angka%2===0) {
      console.log(angka+ ' Adalah Bilangan Genap');
      document.write(angka+ ' Adalah Bilangan Genap <br>');
    }else{
      console.log(angka+ ' Adalah Bilangan Ganjil');
      document.write(angka+ ' Adalah Bilangan Ganjil <br>');
    }
}

//4
let ulangi = confirm("Apakah anda mau mengulang?");
let counter = 0;

while(ulangi){
    let jawab = confirm("Apakah anda mau mengulang?")
    counter++;
    if(jawab == false){
        ulangi = false;
    }
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali <br>");

//5
kuis=null
counter=0
while (kuis!= "Impact Byte") {
  kuis=prompt("Sebutkan kepanjangan dari nama IB?")
  counter++
}
document.write(" Selamat jawaban kamu benar <br>")
document.write(" Kamu mencoba sebanyak" +counter+" kali <br>")