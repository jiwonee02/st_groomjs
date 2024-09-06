let foo = 42;
foo = "bar";
foo = true;

console.log(typeof foo);

//원시 타입
//string
const name = "han";
//number
const age = 30;
//boolean
const hasJob = true;
//null
const car = null;
//undefined
let anything;
//symbol
const sym = Symbol();

//참조타입
//array
const hobbies = ["warking", "books"];
console.log(typeof hobbies);
console.log(Array.isArray(hobbies));
//object
const address = {
    province: "경기도",
    city: "성남시",
};
console.log(typeof address);
