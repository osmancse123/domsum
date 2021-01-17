// traversing Dom Hierarchy - play with dom:-

// const parent = document.querySelector('.content');
// const children = parent.children;
// console.log(children);
// console.log(children[2]);

// let grandParent = document.querySelector('.todo-list');
// let parent = grandParent.children;
// let children = parent[1].children;
// console.log(children);

// var grandParent = document.querySelector('.todo-list');
// var children = grandParent.querySelectorAll ('.item');
// console.log(children);

// const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);

// const children = document.querySelector('.item');
// const grandParent  =children.closest('.todo-list');
// console.log(grandParent);

// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// console.log(childrenTwo);
// childrenTwo.style.color = 'red';

// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// const previous = childrenTwo.previousElementSibling;
// console.log(previous);
// previous.style.fontSize = '40px';

// const childrenTwo = document.querySelector('.item').nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;
// console.log(childrenOne);
// childrenOne.style.color = 'red';