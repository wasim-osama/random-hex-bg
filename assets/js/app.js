//step 1 creat a onload handler
window.onload = () =>{
    main();
}
function main(){
    let background = document.querySelector('.main');
    let btn = document.querySelector('.chng-btn');
    let input = document.querySelector('.hex-input');

    btn.addEventListener('click',function (){
       let hexClr = generateHexColor();
       background.style.backgroundColor = hexClr;
       input.value = hexClr;
    });
}
//step 2 creat a hex color generator function
function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
//step 3 collect all necessary data
//step 4 click event listener