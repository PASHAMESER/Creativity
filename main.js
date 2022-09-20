// let myArray = [
//   { unix_time: 1660262400 },
//   { unix_time: 1660266000 },
//   { unix_time: 1660269600 },
//   { unix_time: 1660273200 },
//   { unix_time: 1660276800 },
//   { unix_time: 1660280400 },
//   { unix_time: 1660284000 },
//   { unix_time: 1660287600 },
//   { unix_time: 1660291200 },
//   { unix_time: 1660294800 },
//   { unix_time: 1660298400 },
// ];

// const toUTCRFullDateTime = (unixTime) => {
//   return new Date(unixTime * 1000).toUTCString();
// };

// let array2 = myArray.map((itme) => ({
//   ...itme,
//   time: toUTCRFullDateTime(itme.unix_time),
// }));

// let i;
// for (i = 0; i <= myArray.length - 1; i++) {
//   for (let j = 0; j <= i; j++) {
//     for (let x = 0; x <= j; x++) {
//       console.log(i, j, x);
//     }
//   }
// }

// let array = [
//   {
//     name: "Ahmed",
//     age: 18,
//   },
// ];
// let array1 = [
//   {
//     name: "Mohamed",
//     age: 15,
//   },
// ];
// let array2 = [
//   {
//     name: "Ali",
//     age: 17,
//   },
// ];

// let allArrays = [].concat(array, array1, array2);
// let lastArray = allArrays.map((itme) => ({
//   ...itme,
//   isUnderAge: itme.age >= 18 ? false : true,
// }));
// console.log(lastArray);

// let names = ["Ahmed" , "Mohamed" , "Nada" , "Noha"]

// for (name of names) {
//   document.write(name + "</br>" )
// }
// const ggg = ()=> {
//     document.body.style.background = "blue"
//     document.title = "Hello World"
// }

// setTimeout (ggg , 4000 )
// clearTimeout()

let containerDottedLoader = document.querySelector(".container-dotted-loader");
let dottedLoader = document.querySelector(".dotted-loader");

let loading = () => {
  containerDottedLoader.style.display = "flex";
  dottedLoader.style.display = "flex";
  setTimeout(() => {
    dottedLoader.style.display = "none";
    containerDottedLoader.style.display = "none";
  }, 1500);
};


window.onload = loading()