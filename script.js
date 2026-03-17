let form = document.querySelector('.form')
let firstInput = document.querySelector('.first-input')
let secondInput = document.querySelector('.second-input')
let errorText = document.querySelectorAll('.erro-texto')
let emailInput = document.querySelector('.input-email')
let errorEmail = document.querySelector('.erro-email')
let radioInput = document.querySelectorAll('.input-radio')
let errorRadio = document.querySelector('.erro-radio')
let message = document.querySelector('.texto')
let checkbox = document.getElementById('check')
 console.log(checkbox)

let btnSubmit = document.querySelector('.btn')

form.addEventListener('submit', (event) => {

    event.preventDefault(); // impede envio do formulário
        

        let hasError = false

        let firstName = firstInput.value.trim()
        console.log(firstName)
        if (firstName === "") {
            errorText[0].textContent = 'This field is required'
            hasError = true
        } 
        let secondName = secondInput.value.trim()
        console.log(secondName)
        if (secondName === "") {
            errorText[1].textContent = 'This field is required'
            hasError = true
        } 

        const validarEmail = email => {
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email)
            
        }
        let email = emailInput.value.trim()
        
        if (!validarEmail(email) ) {
            errorEmail.textContent = 'Please enter a valid email address'
            hasError = true
        }
        let radio1 = radioInput[0].checked
        let radio2 = radioInput[1].checked
         if(radio1 === false && radio2 === false){
            errorRadio.textContent = 'Please select a query type'
            hasError = true
        } else{

        }
        let messages = message.value.trim()
        if (messages === "") {
            errorText[2].innerHTML = 'This field is required'
            hasError = true
        }
        let check = checkbox.checked
        if (check === false) {
            errorText[3].innerHTML = 'To submit this form, please consent to being contacted'
            hasError = true
        }
        if(!hasError){
            // const toast = document.getElementById('toast');
            showToast()
            form.reset()
        }
        
})
function showToast() {
    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
emailInput.addEventListener('input', () => {

    const validarEmail = email => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    }

    if (validarEmail(emailInput.value)) {
        errorEmail.innerHTML = ""
    }
})
firstInput.addEventListener('change', () => {
    errorText[0].innerHTML = ""
})
secondInput.addEventListener('change', () => {
    errorText[1].innerHTML = ""
})
radioInput[0].addEventListener('change', () => {
    errorRadio.innerHTML = ""
})
radioInput[1].addEventListener('change', () => {
    errorRadio.innerHTML = ""
})
message.addEventListener('change', () => {
    errorText[2].innerHTML = ""
})
checkbox.addEventListener('change', () =>{
    errorText[3].textContent = ""
})