// api
const API = 'https://randomuser.me/api/?results=50'
// for leader
const overlay = document.getElementById('overlay')
function toggleOverlay(param) {
    if (param) {
        overlay.classList.remove("hidden")
    } else {
        overlay.classList.add("hidden")
    }
}
function getData(resource) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener("readystatechange", () => {
            if (request.readyState < 4) {
                toggleOverlay(true)
            } else if (request.readyState == 4 && request.status == 200) {
                const data = JSON.parse(request.responseText)
                resolve(data.results);
                toggleOverlay(false)
            } else if (request.readyState == 4) {
                reject("Error ya'ni xato");
                toggleOverlay(false)
            }
        })
        request.open("GET", resource)
        request.send()
    })
}
function resultFunc() {
    getData(API).then((data) => {
        updateUI(data)
    }).catch((error) => {
        console.log(error);
    })
}
document.addEventListener("DOMContentLoaded", resultFunc)