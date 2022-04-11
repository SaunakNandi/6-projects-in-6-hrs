const quizdata=[
    {
        q:"Who is PM of India?",
        a:"Narendra Modi",
        b:"Ram Nath Kovind",
        c:"Pranab Mukherji",
        d:"Sonia Gandhi",
        correct:'a',
    },
    {
        q:'Who is winner of UEFA?',
        a:"France",
        b:"England",
        c:"Italy",
        d:"Denmark",
        correct:'c'
    },
    {
        q:'Most used programming language?',
        a:"Python",
        b:"Java",
        c:"C++",
        d:"JavaScript",
        correct:'b'
    },
    {
        q:'In which country FIFA will take place?',
        a:"JAPAN",
        b:"China",
        c:"Quatar",
        d:"UAE",
        correct:'c'
    },
    {
        q:'Which one is a Javascript library?',
        a:"css",
        b:"html",
        c:"mongodb",
        d:"react",
        correct:'d'
    },
]

const ans=document.querySelectorAll('.answer')
const questioEl=document.querySelector('#question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')
const quiz=document.querySelector('.quiz-container')

let curQuiz=0
let score=0

function loadQuiz()
{
    deselectAns()
    const curQuizData=quizdata[curQuiz]
    questioEl.innerHTML=curQuizData.q
    a_text.innerText=curQuizData.a
    b_text.innerText=curQuizData.b
    c_text.innerText=curQuizData.c
    d_text.innerText=curQuizData.d
    //curQuiz++
    console.log(ans)
}

// Checking if the radio button pressed/selected is correct or not using .checked
function getSelected(){
    
    let choice=undefined
    ans.forEach((x)=>{
        if(x.checked)
        { 
            choice=x.id
        }
    })
    
    return choice
}

function deselectAns()
{
    ans.forEach((x)=>{
        x.checked=false
    })
}

// Main

loadQuiz()

submitBtn.addEventListener('click',()=>
{
    const answer=getSelected()
    
    //console.log(answer)

    if(answer) // if not undefined
    {
        // console.log(quizdata[curQuiz])
        // console.log(curQuiz)
        if(answer===quizdata[curQuiz].correct)
            score++

        curQuiz++
        if(curQuiz<quizdata.length)
            loadQuiz()
        else
            quiz.innerHTML= `
            <h2>Your score = ${score}/${quizdata.length} </h2>
            <button onClick="location.reload()">Reload
            </button>
            `
    }
})

