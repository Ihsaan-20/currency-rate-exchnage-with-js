let btnOne = document.querySelector("#one");
let currentMode = 'light';

btnOne.addEventListener('click', () => {
    let dark = "#0F0F0F";
    let light = "#FFFFFF";

    currentMode = (currentMode === 'light') ? 'dark' : 'light';
    document.querySelector('body').style.backgroundColor = (currentMode === 'light') ? dark : light;

});

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events