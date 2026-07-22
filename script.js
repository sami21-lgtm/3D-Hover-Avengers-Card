// Database of Avengers
const avengersData = [
    {
        id: "01",
        name: "IRON MAN",
        desc: "Genius. Billionaire. Armored Avenger.",
        imgSrc: "images.jpg" // Replace with actual path
    },
    {
        id: "02",
        name: "CAPTAIN AMERICA",
        desc: "The First Avenger.",
        imgSrc: "cap-full.png" // Replace with actual path
    },
    {
        id: "03",
        name: "SPIDER-MAN",
        desc: "Your Friendly Neighborhood Spider-Man.",
        imgSrc: "spider-full.png" // Replace with actual path
    }
];

// DOM Elements
const heroNum = document.getElementById('hero-num');
const heroName = document.getElementById('hero-name');
const heroDesc = document.getElementById('hero-desc');
const heroImg = document.getElementById('hero-img');
const buttons = document.querySelectorAll('.selector-btn');

// Add click events to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');

        // Get index from data-id attribute
        const index = button.getAttribute('data-id');
        const data = avengersData[index];

        // Animate image out
        heroImg.style.opacity = 0;
        heroImg.style.transform = 'translateX(-50%) translateY(20px)';

        // Update content after short delay for transition
        setTimeout(() => {
            heroNum.textContent = `AVENGER ${data.id}`;
            heroName.textContent = data.name;
            heroDesc.textContent = data.desc;
            heroImg.src = data.imgSrc;
            
            // Animate image back in
            heroImg.style.opacity = 1;
            heroImg.style.transform = 'translateX(-50%) translateY(0)';
        }, 300);
    });
});
