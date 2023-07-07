const submitButton = document.getElementById('submit');
const dismissButton = document.getElementById('dismiss');
const emailInput = document.getElementById('email');
const successPage = document.getElementById('success');
const myEmail = document.getElementById('my-email');
const form = document.querySelector('.form');
const section = document.querySelector('.section-1');

// function to validate email
function validiateEmail(emailValue) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue)
}
// Validating and submitting the email
function submitEmail(emailValue) {
    if (validiateEmail(emailValue)){
        section.style.display = 'none';
        successPage.classList.add('show');
        myEmail.textContent = emailValue;
    }
    else{
        form.classList.add('error');
    }
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitEmail(emailInput.value)
})
dismissButton.addEventListener('click', (event) => {
    event.preventDefault();
    section.style.display = 'flex';
    successPage.classList.remove('show');
})

