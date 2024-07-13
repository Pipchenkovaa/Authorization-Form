function viewChangingIconFubction() {
    let dataPassword = document.getElementById("inpt2")
    let icon = document.getElementById("toggle-icon")
    if (dataPassword.type === "password") {
        dataPassword.type = "text"
        icon.src = "./images/view.svg"
    } else {
        dataPassword.type = "password"
        icon.src = "./images/no-view.svg"
    }
}

const email = document.getElementById('inpt1')
const password = document.getElementById('inpt2')
const errorEmail = document.getElementById('invalid-email')
const errorPassword = document.getElementById('invalid-password')
document.getElementById('main-button').onclick = function() {
    let hasError = false
    if (email.value === '') {
        errorEmail.style.display = 'block'
        hasError = true
    } else {
        errorEmail.style.display = 'none'
    }

    if (password.value === '') {
        errorPassword.style.display = 'block'
        hasError = true
    } else {
        errorPassword.style.display = 'none'
    }
};