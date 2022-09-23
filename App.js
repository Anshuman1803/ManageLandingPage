// Code for navbar show hide
let NavBar = document.getElementById("NavBar");
let MenuButton = document.getElementById("MenuButton");
MenuButton.addEventListener("click", ()=>{
    MenuButton.classList.toggle("fa-xmark");
    NavBar.classList.toggle("ShowHideNav");
})


// Code for slide the clientReview
const sliderButtons = document.querySelector('.slider-boxes')
const peopleChoices = document.querySelectorAll('.slider-boxes > input');
const people = document.querySelectorAll('.Review');

const mobileDisplayCheckedPerson = () => {
    const inputChecked = document.querySelector('.slider-boxes > input:checked');
    document.getElementById(`person-${inputChecked.value}`).style.display = 'flex';
}

peopleChoices.forEach((button) => {
    button.addEventListener('click', () => {
        people.forEach((person) => {
            button.value === person.id.slice(-1) ? person.style.display = 'flex' : person.style.display = 'none';
        });
    });
});


// Footer Form Section
let ErrorMsg = document.getElementById("ErrorMsg");
let EmailInput = document.getElementById("EmailBox");
let GoButton = document.getElementById("GoButton");
let ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

GoButton.addEventListener('click', ()=>{
    if(EmailInput.value.match(ValidEmail))
    {
        ErrorMsg.style.display = "none"
        
    }
    else{
        ErrorMsg.style.display = "block"
        EmailInput.style.border = "2px solid hsl(12, 88%, 59%)"
        EmailInput.focus();
    }
});