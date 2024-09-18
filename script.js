document.addEventListener('DOMContentLoaded', () => {
    const helloText = document.getElementById("hello-text");
    const languages = ["Hello", "Namaste", "Hola", "Bonjour", "Ciao", ];
    let index = 0;

    // Function to change the text and handle animations
    function changeText() {
        helloText.classList.remove('fade-in');
        helloText.classList.add('fade-out');

        // Wait for the fade-out transition to complete
        setTimeout(() => {
            helloText.textContent = languages[index];
            helloText.classList.remove('fade-out');
            helloText.classList.add('fade-in');
            index = (index + 1) % languages.length;
        }, 750); // Match this delay with the CSS transition duration
    }

    // Display the initial text immediately
    helloText.textContent = languages[index];
    
    // Add class for fade-in without delay
    helloText.classList.add('fade-in');

    // Start the text change loop after a short delay
    setTimeout(() => {
        setInterval(changeText, 3000); // Adjust this interval to account for the full fade-in and fade-out cycle
    }, 100); // Short delay to ensure "Hello" is visible

    // Debugging
    console.log('JavaScript loaded');
});
