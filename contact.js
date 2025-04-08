document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can add code to send form data to your server
    // For example, using fetch() to send a POST request

    alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
    document.getElementById('contactForm').reset();
});
