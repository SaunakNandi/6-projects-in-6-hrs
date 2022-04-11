const canvas= document.getElementById('canvas')
const increase= document.getElementById('increase')
const decrease= document.getElementById('decrease')
const sizeBtn= document.getElementById('size')
const colorEl= document.getElementById('color')
const penBtn= document.getElementById('pen')
const eraserBtn= document.getElementById('eraser')
const ctx=canvas.getContext('2d')


let color=undefined
let isPressed=false
let size=3,x=undefined,y=undefined,tool=undefined

penBtn.addEventListener('click',()=>{
    tool="pen"
    f(true)
})

eraserBtn.addEventListener('click',()=>{
    tool="eraser"
    drawLine(x,y,0,0)
})

function f(flag)
{
    if(flag)
    {
        canvas.addEventListener('mousedown',(e)=>{
            isPressed=true
            x=e.offsetX
            y=e.offsetY
        })

        canvas.addEventListener('mouseup',()=>{
            isPressed=false
            x=undefined
            y=undefined
        })

        canvas.addEventListener('mousemove',(e)=>{
            if(isPressed)
            {   
                let x2=e.offsetX
                let y2=e.offsetY
            //  console.log(x,y)
        //   drawCircle(x2,y2)
                drawLine(x,y,x2,y2)
                x=x2
                y=y2
            }
        })
    }
}
colorEl.addEventListener('change',(e)=>{
    console.log(e)
    color=e.target.value
})

increase.addEventListener('click',()=>{
   // console.log(size)
    size+=3
    if(size>50)
        size=50

    updateSizeOnScreen()
})

function updateSizeOnScreen()
{
    sizeBtn.textContent=size
}

decrease.addEventListener('click',()=>{

    size-=3
    if(size<3)
        size=5
    updateSizeOnScreen()
})

// function drawCircle(x,y)
// {
//     ctx.beginPath()
//     ctx.arc(x,y,size,0,Math.PI * 2)
//    ctx.fillStyle=color
//    ctx.fill()
// }

function drawLine(x1,y1,x2,y2)
{
    ctx.beginPath()
    if(tool==="pen")
   { 
       ctx.globalCompositeOperation="source-over";
        ctx.moveTo(x1,y1)
        ctx.lineTo(x2,y2)
        ctx.strokeStyle=color
        ctx.lineWidth=size
        ctx.stroke()
    }
    else
    {
        ctx.globalCompositeOperation="destination-out";
        ctx.arc(x1,y1,8,0,Math.PI*2,false);
        ctx.fill();
    }
}
