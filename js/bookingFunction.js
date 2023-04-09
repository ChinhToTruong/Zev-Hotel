const closeForm = document.querySelector('.close-form');
const formBooking = document.querySelector('.form-booking');
const bookButton = document.querySelector('.book-button');

bookButton.addEventListener('click', ()=> {
    formBooking.style.display = 'flex'; 
});

closeForm.addEventListener('click', ()=> {
    formBooking.style.display = 'none';
});