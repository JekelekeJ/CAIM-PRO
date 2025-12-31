document.getElementById('prompt-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get user inputs
    const genre = document.getElementById('genre').value;
    const style = document.getElementById('style').value;
    const subject = document.getElementById('subject').value;
    const tone = document.getElementById('tone').value;
    
    // Template for the AI prompt (customize this as needed)
    const promptTemplate = `Create a ${style} image of ${subject} in a ${genre} setting with a ${tone} mood.`;
    
    // Display the generated prompt
    document.getElementById('generated-prompt').textContent = promptTemplate;
    document.getElementById('output').style.display = 'block';
});

// Copy to clipboard functionality
document.getElementById('copy-btn').addEventListener('click', function() {
    const promptText = document.getElementById('generated-prompt').textContent;
    navigator.clipboard.writeText(promptText).then(() => {
        alert('Prompt copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js');
    });
}