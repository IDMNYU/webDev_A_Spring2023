console.log("theMessage");

const theButton = document.querySelector('button');
// var --> don't use
let theBody = document.querySelector('body');
let theThesis = document.getElementById("theMainPoint")

theButton.addEventListener('click', beTheChange )

function beTheChange(){
    console.log("you clicked!");
    theThesis.style.backgroundColor = "pink";
    theBody.style.backgroundColor = "yellow"
    theThesis.textContent = "You erased history!"
}

