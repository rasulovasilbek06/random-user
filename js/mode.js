const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')
const darkLocalStorag = localStorage.getItem("darkMode")
if(darkLocalStorag) {
    darkFunc()
}
function darkFunc() {
    body.classList.toggle("dark-mode")
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
}
darkBtn.addEventListener("click" , ()=> {
    darkFunc()
    localStorage.setItem("darkMode" , "dark-mode")
})
lightBtn.addEventListener("click" , ()=> {
    darkFunc()
    localStorage.setItem("darkMode" , "")
})