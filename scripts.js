// Example of a simple JavaScript function to interact with the page
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('a');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('You clicked "Read more" for this article.');
        });
    });
});
