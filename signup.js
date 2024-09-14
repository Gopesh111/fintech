document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var popup = document.getElementById('success-popup');
    popup.style.display = 'flex';

    setTimeout(function() {
        popup.style.display = 'none';
        document.getElementById('signup-form').reset(); // Optional: Reset form fields after submission
    }, 3000); // Popup will disappear after 3 seconds
});
