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
//create div;
let div = document.createElement("div");
let div_header = document.createElement("div");
let div_body = document.createElement("div");
let form = document.createElement("form");
//add classes them;
div.classList.add('card', 'mt-3', 'mb-3');

div_header.classList.add('card-header');
div_header.innerHTML = "<h1>Form with dynamic fields...</h1>";

div_body.classList.add('card-body','mb-3');

form.classList.add('form-control');

//apply event with eventListener;
add.addEventListener("click", () => {
    index++;
    
    let inputDiv = document.createElement("div");
    inputDiv.classList.add('mb-3');
    
    let inputLabel = document.createElement('label');
    inputLabel.innerText = `value ${index}`; 
    
    let inputField = document.createElement('input'); 
    inputField.setAttribute('class', 'form-control'); 
    inputField.setAttribute('name', `value${index}`); 
    inputField.setAttribute('value', index); 
    
    div.appendChild(div_header);
    div.appendChild(div_body);
    div_body.appendChild(form);
    form.appendChild(inputDiv);
    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(inputField);
    
    container.appendChild(div);
    console.log('created');
});


remove.addEventListener("click", () => {
    let lastEle = form.lastElementChild;
    if (lastEle) {
        form.removeChild(lastEle);
        index--;
        console.log('removed last input field');
    } else if(index === 0 ) {
        container.removeChild(div);
        console.log('removed card');
    }else{
        console.log('Nothing to remove');
    }
});



