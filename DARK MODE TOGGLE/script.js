const toggleDarkMode=document.querySelector(".toggle-darkmode")
const toggleText=document.querySelector(".toggle-text")

// Enable darkmode
let darkMode= localStorage.getItem("darkMode")
const enable=()=>{
    document.body.classList.add('darkmode')
    toggleText.textContent="Light"
    localStorage.setItem("darkMode","enabled")
}

// Disable darkmode

const disable=()=>{
    document.body.classList.remove('darkmode')
    toggleText.textContent="Dark"
    localStorage.setItem("darkMode",null)
}

//Save darkmode history

if(darkMode === 'enabled')
{
    enable()
}

// Add Event Listner

toggleDarkMode.addEventListener('click',()=>{
    let darkMode= localStorage.getItem("darkMode")

    if(darkMode!="enabled")
        enable()
    else
        disable()
})