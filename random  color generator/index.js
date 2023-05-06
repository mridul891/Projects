function randomColor(){
    const random = Math.floor( Math.random()*16777215);
    const rancode = "#" + random.toString(16);
    document.body.style.backgroundColor = rancode;
    document.getElementById("colorCode").innerText = rancode; 
    const copy= document.querySelector('.btn1');
    copy.addEventListener('click', ()=> {
        navigator.clipboard.writeText(rancode)
        alert(" Hex CodeCopied");
    })

}
randomColor();
document.querySelector('.btn').addEventListener(
    "click"
,randomColor
);

