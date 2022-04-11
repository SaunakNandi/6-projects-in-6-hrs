let x=document.getElementById('Image')
let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')

const switchLightOn=()=>{
    x.src="on.jpg"
}

const switchLightOff=()=>{
    x.src="off.jpg"
}

btn1.addEventListener('click',switchLightOn)
btn2.addEventListener('click',switchLightOff)
