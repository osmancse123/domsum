// // Traversing DOM element - play with DOM:-

// // Get Element By Id:
// // let element = document.getElementById('head');
// // console.log(element);

// let haderElement = document.getElementById('head');
// console.log(haderElement.textContent);
// console.log(haderElement.innerText);
// console.log(haderElement.innerHTML);

// let headElement = document.getElementById('head');
// headElement.style.fontSize = '70px';
// headElement.style.color = 'red';

// console.dir(document);

// Get Element By Class:
// console.log(document.getElementsByClassName('item')[2]);
// let itemUL = document.getElementById('items');
// var items= itemUL.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++) {
//     items[i].style.color= 'red';
// }

// Get Element By Tag:
// let liTag = document.getElementsByTagName('div');
// for (i = 0; i < liTag.length; i++) {
//     liTag[i].style.color = 'red';
// }

// query Selector:
// let task = document.querySelector('#head');
// task.textContent = 're rerere e3e3e rerere';

// let task = document.querySelector('.item');
// console.log(task);

// let lastItem = document.querySelector('.item:last-child');
// console.log(lastItem);
// lastItem.style.color = 'red';

// let lastItems = document.querySelectorAll('.item:last-child');
// console.log(lastItems);

// let lastItems = document.querySelectorAll('.item:last-child');
// for (element of lastItems) {
//     element.style.color = 'red';
// }

// let lastItem = document.querySelector('.item:nth-child(2)');
// lastItem.style.color = 'red';

// let lastItem = document.querySelectorAll('.item:nth-child(1)');
// for (element of lastItem) {
//    element.style.color = 'red';
// }

// let items = document.querySelector('#items').querySelector('.item:nth-child(1)');
// items.style.color = 'red';