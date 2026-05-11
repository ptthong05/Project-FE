// var a = 2;
// var b = 5;
// var c = a + b;
// var fullname = "Pham Tan Thong"


// console.log(c);
// console.log(fullname);



//OPERATOR
// var a = 10;
// var b = 20;
// var d = "20";

// var c = a + d;
// var e = b ** a;

// console.log(c);
// console.log(e);



// ++ -- 
// var a = 10;
// var b = 20;
// var e = b;              // 20
// var fullName = "Pham Tan Thong";
// var g = fullName;

// var c = a++ + ++a + a++ + ++a;
        // 6 + 8 + 8 + 10
// var d = --a + a-- - ++a + a-- - a++ + ++a;
    //    9 + 9 - 9 +  9 - 8 + 10
// console.log(++a);       // tăng lên r + 
// console.log(a++);       // lấy gia trị roi +


// var m = 5;
// var n = 7;
// n %= m;   // n = n + m


// var a = 10;
// var b = 10;
// var c = 3;

// if(a == b) {
//     console.log("a bang b");
// } else {
//     console.log("a khac b");
// }

// if(a != c) {
//     console.log("a khac c");
// } else {
//     console.log("a giong c");
// }

// if(a == c && a == b) {
//     console.log("a = c = b");
// } else {
//     console.log("a ! c");
// }
 



// var a = 10;
// var b = "1234";
// var c = '569';    
// var d = `55555`;      //string theo blacktick

// var e = true;

// var g;  //Undefined

// console.log(g);


// var h = null;  //Null 



// function sum(a, b) {
//     console.log(a+b);
// }
// sum(10, 20);


// var proFile = {
//     name: "Pham Tan Thong",
//     age: 20,
//     sum: function(a, b) {
//         alert(a + b);
//     }
// }
// console.log(proFile.age);
// console.log(proFile.sum(10, 30));

var age = [
    20, 25, 30, 40
]

age.sum = function(a, b) {
    alert(a+b);
}
age.sum(20, 30);

age.name = "Pham Tan Thong"; 
console.log(age);
//console.log(age[2]);
