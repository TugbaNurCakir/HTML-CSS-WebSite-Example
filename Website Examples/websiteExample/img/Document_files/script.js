// //Değişkenler

// var age;
// console.log(age);
// age=20;
// console.log(age);

// var fullName='Tugba Nur';
// console.log(fullName);

// fullName='Eray Bey';
// console.log(fullName);

// //Değişken Tanımlama Kuralları

// var yas1;
// var _yas2;
// var $yas3;

// //Komut isimleri ile tanımlama yapılamaz.

// // var for, swicth olmaz  xxxx
// // Birden fazla kelime

// var ad="Tugba";
// var soyad="Cakir";

// var ad_Soyad ="Tugba_Cakir";

// // case sensitive (büyük küçük duyarlılığı)

// var firstName="Tugba";
// var FirstName="Nur";
// console.log(firstName);
// console.log(FirstName);


// // var, let, const

// let city="Ankara";
// console.log(city);

// const email="abc@gmail.com";
// console.log(email);

// // email="bcv@gmail.com"; yapamayız const sabit değer alır. Değişmez.

//Ders 3: Değişken Tipleri

//Primitive Types

    //String
//     let firstName="Çınar";
//     console.log(typeof firstName);

//     //Number
//     let age=20;
//     console.log(typeof age);
//     let money=100.5;
//     console.log(typeof money);


//     //Boolean
//     let isActive=true;
//     console.log(typeof isActive);

//     //null
//     let job=null;
//     console.log(typeof job);

//     //undefined
//     let car;
//     console.log(typeof car);

// //Reference Types-Objects

//     //Array
//     let names=['Ali', 'Ahmet', 'Can'];
//     console.log(typeof names);

//     //Object
//     let address={
//         city:'Kocaeli',
//         country:'Türkiye'
//     }

//     console.log(typeof address);

//     //Function
//     var calculateAge=function(){
//         return 0;
//     };
//     console.log(typeof calculateAge);

//Ders 4: Tür Dönüşümü

// let num1 = '5';
// let num2 = '10';
// console.log(num1+num2);
// console.log(typeof num1);

// let num3 = Number('5');
// let num4 = Number('10');
// console.log(num3+num4);


// let total= num3+num4;
// console.log(total);
// console.log(typeof total);

// let val;

// //number to string

// val = String(10);

// //bool to string

// val = String(true);

// //date to string
// val=String(new Date().getDate());

// //array to string
// val = String([1,2,3,4]);

// //toString()

// val= (10).toString();
// val=(false).toString();


// //String to number

// val=Number('10');
// val=Number(true);
// val=Number(false);
// val=Number(null);
// val=Number('a');
// val=Number([1,2,3,4]);

// // parseInt
// // parseFloat

// val=parseFloat('10.5');
// val=parseInt('10.5');


// console.log(val);
// console.log(typeof val);


//Uygulama:
//Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri Adı:
// var musteriName="Tugba";

// // ** Müşteri Soyadı:
// var musteriSurname="Nur";

// // ** Müşteri TC Kimlik No:
// var musteriId='236572365';

// // ** Müşteri Sipariş Toplamı:
// var siparisTotal=205.6;

//  // ** Müşteri Cinsiyet:
// var gender='kadın';

// // ** Müşteri Adres Bilgisi:
// var address={
//     city:'Ankara',
//     country:'Türkiye',
//     no:'3',
//     sokak:'poyraz',
// } 
// // ** Müşteri Hobiler:
// var hobbies=['programming','reading a book','listening music'];

// // Aşağıdaki string ifadenin karakter sayısını bulunuz.

// var course = 'Modern Javascript Kursu';

// console.log(course.length);

// //Aşağıda verilen doğum yılına göre yaşını hesaplayınız.

// const yearOfBirth = 1986;

// var yas;

// yas = new Date().getFullYear() - yearOfBirth;
// console.log(yas);

// Operatörler




// Demo: Operators

// 1- Can ve Ada'nın boy ve kg bilgilerini alın.
// let IndexCan;
// let IndexAda;

// const kgCan = 60;
// const kgAda = 40;

// const heightCan = 1.70;
// const heightAda = 1.50;

// IndexAda = (kgAda) / (heightAda*heightAda) ;
// IndexCan = (kgCan) / (heightCan*heightCan) ;



// console.log(IndexAda, IndexCan);

// let adaHigherIndex = IndexAda>IndexCan;
// let adaHigherIndex = IndexAda>IndexCan;



// Date Object

// let d = new Date();
// let birthday = new Date(2000,6,30,7,0,0);

// // Set Methods

// d.setMonth(5);
// d.setFullYear(2023);
// d.setDate(21);
// d.setHours(10);


// // Get Methods

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getHours());

// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getMonth() - birthday.getMonth());
// console.log(d.getDate() - birthday.getDate());


// console.log(d);
// console.log(typeof d);

// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

// let currentDate = new Date();

// console.log(currentDate);
// console.log('Bugünkü gün:' + currentDate.getDate());
// console.log('Bugünkü ay:' + currentDate.getMonth());
// console.log('Bugünkü yıl:' + currentDate.getFullYear());

// // ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

// var dateAndTime = new Date(2020, 8, 19, 13, 24);
// var dt = new Date('09/19/2020 13:27:00');

// console.log(dateAndTime);
// console.log(dt);


// // ** 1/1/1990 tarihinden bir gün öncesini gösteriniz.

// var date_ = new Date('1/1/1990');
// var dayOfMonth = date_.getDate();
// date_.setDate(dayOfMonth-1);

// console.log(date_);

// // İki tarih arasındaki geçen zamanı bulunuz.

// var start = new Date('1/1/1990');
// var end = new Date('1/1/1991');

// var milisecond = end-start;
// var saniye = milisecond/1000;
// var dakika = saniye/60;
// var saat = dakika/60;
// var gun = saat/24;



// console.log('milisecond:' + milisecond);
// console.log('saniye:' + saniye);
// console.log('dakika:' + dakika);
// console.log('saat:' + saat);
// console.log('gün:' + gun);


// // Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 
// // 2019 yılında ne zaman kutlanacaktır ? 

// var annelerGunu = new Date();




// // ** Yaş hesaplama nasıl yapılır ?

// var myBirthday = new Date('6/30/2000');
// var ageDifMs = Date.now() - myBirthday.getTime();
// var ageDate = new Date(ageDifMs);

// console.log(ageDate.getFullYear()-1970);


// console.log(birthdayy.getTime()); 
//console.log(Date.now());
//ikiside milisecondı verir.
// miliseconda çevirme nedenimiz; her türlü hesaplama yapabiliyorum.

// timeStamp 


// Numbers

let val;

val = parseInt('a10.5');
val = isNaN('10');  // not and number olduğunu söylüyor.

console.log(val);

console.log(typeof val);

var num = 10.123352;

val = num.toPrecision(3);
val = num.toFixed(3);

console.log(val);











