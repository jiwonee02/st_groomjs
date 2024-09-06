let val;

//number to string
val = String(111);
val = String(8 + 4);

//boolean to string
val = String(false);

//date to string
val = String(new Date());

//array to string
val = String([1, 2, 3, 4, 5]);

//toString()
val = (5).toString();
val = parseInt("111.40");
val = parseFloat("111.40");

//string to number
val = Number("1");

//boolean to number
val = Number(true);
val = Number(false);

//null to number
val = Number(null);

//array to number
val = Number([1, 2, 3]);

console.log(val);
console.log(typeof val);
console.log(val.length);

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
