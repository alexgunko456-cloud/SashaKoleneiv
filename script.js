const choices = {
    skibidi: {
        title: "You chose Skibidi Toilet! 🚽",
        message: "A bold and unique choice!",
        image: "https://github.com/alexgunko456-cloud/SashaKoleneiv/raw/main/skibidi-image.jpg"
    },
    kosta: {
        title: "You chose Kosta! ⭐",
        message: "An excellent choice! Kosta is amazing!",
        image: "https://github.com/alexgunko456-cloud/SashaKoleneiv/raw/main/kosta-image.jpg"
    }
};

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', function() {
        const choice = this.getAttribute('data-choice');
        showResult(choice);
    });
});

function showResult(choice) {
    const result = choices[choice];
    
    // Hide options and show display area
    document.querySelector('.options').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    document.getElementById('displayArea').style.display = 'block';
    
    // Set result content
    document.getElementById('resultImage').src = result.image;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultMessage').textContent = result.message;
}

function resetChoice() {
    // Show options again and hide display area
    document.querySelector('.options').style.display = 'flex';
    document.querySelector('h1').style.display = 'block';
    document.querySelector('.question').style.display = 'block';
    document.getElementById('displayArea').style.display = 'none';
}
