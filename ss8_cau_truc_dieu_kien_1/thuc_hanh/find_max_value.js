let a = +prompt("Nhap so a");
let b = +prompt("Nhap so b");
let c = +prompt("Nhap so c");

if (a > b) {
    if (a > c) {
        console.log("max is a");
    } else {
        console.log("max is c");
    }
} else if (b > c) {
    console.log("max is b");
} else {
    console.log("max is c");
}