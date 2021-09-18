console.log("hello js");

const button = document.getElementById("btn");
const container = document.getElementById("container");
const colorcode = document.getElementById("colorcode");


button.addEventListener("click" ,  ()=>{
    console.log("button clicked");

    color = '#'
    symbol = '123456789ABCDEF'

    for (let i = 0; i < 6; i++) {
        a = Math.floor(Math.random()*6)

        color = color + a
    }
    document.body.style.background = color ;
    console.log(color)

    // color code
    colorcode.innerHTML = `Color Hex Code is ${color}`

});


