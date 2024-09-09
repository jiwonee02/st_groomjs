let val;

val = document;

val = document.baseURI; //웹 페이지의 절대 URI를 반환
val = document.head; //<head> 태그 반환
val = document.body; //<body> 태그 반환

val = document.forms; //<form> 태그 반환
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts; //<script> 태그 반환
val = document.scripts[0].getAttribute("src");

console.log(val);

const headerContainer = document.getElementById("header-container");
headerContainer.style.display = "none";
console.log(headerContainer);

headerContainer.textContent = "text Content";
headerContainer.innerText = "inner Text";
headerContainer.innerHTML = "<span>inner HTML</span>";

const items = document.getElementsByClassName("list-group-item");
console.log(items);

items[0].style.color = "blue";
items[3].textContent = "Hi";

let lists = document.getElementsByTagName("li");
console.log(lists);
/*
lists.forEach((list) => {
    console.log(list);
});
*/
lists = Array.from(lists);
console.log(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}.List`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
liOdd.forEach((li) => {
    li.style.background = "gray";
});
