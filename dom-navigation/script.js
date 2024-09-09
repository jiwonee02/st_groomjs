let val;

const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");
/*
console.log("list", list);
console.log("listItem", listItem);

val = list.childNodes; //NodeList 반환, line break도 포함
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodesp[3];
val = list.childNodesp[3].nodeType; //NodeType에서 1은 요소, 2는 속성(현재 사용X), 3은 Text node, 8은 주석, 9는 document, 10은 Doctype

//children element nodes 반환
val = list.children; //HTML collection 반환, line break 포함X
val = list.children[1];
list.children[1].textContent = "Hi";

//First child
val = list.firstChild; //list.firstChild === list.childNodes[0];
val = list.firstElementChild;

//Last child
val = list.lastChild; //list.lastChild === list.childNodes[list.childNodes.length -1];
val = list.lastElementChild;

//child 요소 count
val = list.childElementCount;

//parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//previous sibling 반환
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log("val", val);
*/

for (let node of list.childNodes) {
    console.log(node);
}

console.log(list.childNodes.filter);
console.log(list.childNodes.map);

console.log(Array.from(list.childNodes).filter);
