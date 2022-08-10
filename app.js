// Bài 1: Viết chương trình cộng hai số
// function tong() {
//     let a = Number(prompt('Nhập vào số a'));
//     let b = Number(prompt('Nhập vào số b'));
//     return a + b;
// }
// console.log(tong());

//Bai 2: Tính tổng số lẻ trong mảng
// array = [1,2,3,4,5,6]
// function tongsole(array) {
//     let tong = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] %2 !=0){
//             tong = tong + array[i];
//         }    
//     }
//     return tong
// }
// console.log(tongsole(array));

// Bài 1: Viết hàm tính bình phương của một số bất kì đưa vào
// function binhphuong() {
//     let c = Number(prompt('Nhập vào số c bất kì'));
//     return Math.pow(c,2);
// }
// console.log(binhphuong());

// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.
// function chuvi(){
//     let r = Number(prompt('Nhập bán kính hình tròn'));
//     return 2*r*Math.PI
// }
// console.log(chuvi());
// function dientich(){
//     let r = Number(prompt('Nhập bán kính hình tròn'));
//     return Math.pow(r,2)*Math.PI
// }
// console.log(dientich());

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kì
// function giaithua() {
//     let n = Number(prompt('Nhập vào số nguyên bất kì'));
//     let a = 1
//     for (let i = 1; i <= n; i++) {
//         a=a*i
//     }console.log(`${n}! bằng ${a}`);
// }
// giaithua();

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không? 
// function cophaikitusoko() {
    // let kytu = prompt('Nhập vào kí tự bất kì')
    // console.log(typeof kytu);
    // if (kytu %1 === 0) {
    //     alert("true")
    // } else {
    //     alert("false")
    // }
    // return;
// } cophaikitusoko()

// Bài 5: Nhập vào 3 số nguyên, tìm số nhỏ nhất 
// function minarr (){
//     let a = Number(prompt("nhập số nguyên a"));
//     let b = Number(prompt("nhập số nguyên b"));
//     let c = Number(prompt("nhập số nguyên c"));
//     condition=Number.isInteger(a) && Number.isInteger && Number.isInteger(c)
//     if (a < b && a < c && condition ) {
//         alert(`${a} là số nhỏ nhất`)
//     }else if (b<a && b< c && condition){
//         alert(`${b} là số nhỏ nhất`)
//     }else if (c < a && c < b &&condition) {
//         alert(`${c} là số nhỏ nhất`)
//     }else{
//         alert("số nhập ko hợp lệ")
//     }
// }minarr()

// Bài 6:Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương
// không. Nếu là nguyên dương trả về true, ngược lại trả về false.
// function songuyenduong() {
//     let n = Number(prompt('Nhập vào số bất kì'));
//     return (Number.isInteger(n) && n >0);
// }
// console.log(songuyenduong());

// Bài 7 : 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// let a = 5,
//   b = 7;

// function swap(a, b) {
//   temp = a;
//   a = b;
//   b = temp;
//   alert(`a =${a} b =${b}`);

//   return;
// }
// swap(a, b);

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// function daomang() {
//     array = [1,2,3,4,5,6];
//     let new_array=[];
//     for (let i = array.length -1 ; i>=0; i--){
//         new_array.push(array[i]);
//     }
//     console.log(new_array);
// }
// daomang(); 
// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ
// đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1
// function checkkitu() {
//     let array = prompt(`Hay nhap thu gi cung duoc`).split("");
//     let inPut = prompt(`Nhập một kí tự bất kì`);
//     let bienAo = 0;
//     for (i = 0; i < array.length; i++) {
//        if (array[i] === inPut) {
//           bienAo = bienAo + 1;
//        }
//     }
//     if (bienAo > 0) {
//        alert(`Kí tự xuất hiện ${bienAo} lần trong những thứ linh tinh đã nhập`)
//     } else {
//        alert(`Kí tự không có trong những thứ kia`)
//     }
//  }
//  checkkitu()