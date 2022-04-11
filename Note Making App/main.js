const addBtn=document.querySelector('#add')

const updateLS=()=>{
    const textarea=document.querySelectorAll('textarea')
    const notes=[]

    textarea.forEach((t)=>{
        notes.push(t.value)
    })
    localStorage.setItem('notes',JSON.stringify(notes))
}

const addNotes=(text=" ")=>{

    const note=document.createElement('div')
    note.classList.add('note')

    const htmlData=`
        <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `
   // console.table(html)
    note.insertAdjacentHTML('afterbegin',htmlData)

    console.log(note)
    const edit=note.querySelector('.edit')
    const del=note.querySelector('.delete')
    const main=note.querySelector('.main')
    const textarea=note.querySelector('textarea')

    textarea.value=text
    main.innerHTML=text
   // console.table(textarea)

    edit.addEventListener('click',()=>{
        main.classList.toggle("hidden")
        textarea.classList.toggle("hidden")
    })

    del.addEventListener('click',()=>{
        note.remove()
        localStorage.removeItem('notes')
    })

    textarea.addEventListener('change',()=>{
        updateLS()
    })

    document.body.appendChild(note)
}

const n=JSON.parse(localStorage.getItem('notes'))
if(n)
{
    n.forEach((e) => {
        addNotes(e)
    });
}


addBtn.addEventListener('click',()=>
{
    addNotes();
})