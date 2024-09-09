//for
for (let i = 1; i < 10; i++) {
    if (i === 3) {
        console.log("It is 3");
        continue;
    }
    if (i === 5) {
        console.log("5 stop the loop");
        break;
    }
    console.log("Number" + i);
}

//for-in
const user = { name: "Han", province: "경기도", city: "성남시" };

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}
/*
//while
let i = 0;

while (i < 10) {
    console.log("Number" + i);
    i++;
}
*/
//do-while
let i = 100;

do {
    console.log("Number" + i);
    i++;
} while (i < 10);
