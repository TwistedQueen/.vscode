//sellector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = Array.from( document.querySelectorAll("button"));

//eventlistner
keys.map(button =>{
    button.addEventListener('click',calculate,(e)=>{
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    });
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText=== "AC"){
        output.innerText = "";
        result.innerText = "0";
        return;
    }
}

if(buttonText === "C"){
    output.textContent = output.textContent. substr(0, output.textContent.length-1);
    return;
}

if (buttonText === "="){
    console.log ("COME TO THIS LATER")
}

else{
    output.textContent += buttonText;
    return;
}