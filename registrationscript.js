changeStatus();
function changeStatus() {
    const Registering = document.getElementById('Registering');
    const Specialization = document.getElementById('Specialization');

    if (Registering.value === 'Doctor') {
        Specialization.classList.remove('hidden');
    } else {
        Specialization.classList.add('hidden');
    }
}

const form = document.getElementById('registrationForm');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
    if (!validatePhoneNumber(phoneInput.value)) {
        event.preventDefault();
        alert('Invalid phone number. Phone number should be 10 digits.');
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault();
        alert('Passwords do not match.');
    } else {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwQqMgS1oePiBkJG19PigWO0qEK9WHU4qpldHviMo8nNX2xbW__fRe2kJ48uc1Vr2O3KA/exec';
        const form = document.forms['google-sheet']
        event.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                alert("Thanks for Registering with us..!");
                // Optionally, you can reset the form after successful submission
                form.reset();
                // Redirecting to sign in page
                window.location.href = 'signin.html';
            })
            .catch(error => console.error('Error!', error.message));
    }
});

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
