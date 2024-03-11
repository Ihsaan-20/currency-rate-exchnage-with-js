// console.log(window);
// console.dir(window);


// document.getElementById('id_here'); 
// document.getElementsByClassName('class_here');
// document.getElementsByTagName('tag_here');
// document.querySelector(".class_here || #id_here || tag_name"); return elements || first element
// document.querySelectorAll(".class_here || #id_here || tag_name"); return a nodeList || all elements

//tagName
//innerText
//innerHTML
//innerContext


//parent
//children
//sibling

//firstChild
//lastChild

//appendChild
//append

//lastElementChild

let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let container = document.querySelector(".container");
let index = 0;

add.addEventListener("click", () => {
    index++;
    let div = document.createElement("div");
    div.innerHTML = `<h2>${index}</h2>`;
    container.appendChild(div);
    console.log('created');
});

remove.addEventListener("click", () => {
    let div = container.lastElementChild;
    (div) ? container.removeChild(div) : console.log('Nothing to remove');
    // if (div) {
    //     container.removeChild(div);
    //     console.log('removed');
    // } else {
    //     console.log('Nothing to remove');
    // }
});


