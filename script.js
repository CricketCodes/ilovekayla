// Password Protection
function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input === "Boeing 777-300ER" || input === "admin") {
        document.getElementById('password-page').style.display = "none";
        document.getElementById('main-content').classList.remove("hidden");
    } else {
        document.getElementById('error-message').innerText = "Wrong password!";
    }
}

// Enable Unlock Button When Text is Entered
document.getElementById("password-input").addEventListener("input", function () {
    const unlockButton = document.querySelector(".password-container button");
    if (this.value.length > 0) {
        unlockButton.classList.add("active");
        unlockButton.disabled = false;
    } else {
        unlockButton.classList.remove("active");
        unlockButton.disabled = true;
    }
});

// Timers
function getTimeDiff(date, isPast) {
    const now = new Date();
    let diff = isPast ? now - date : date - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    return `${days} days, ${hours} hours`;
}

function updateTimers() {
    const anniversary = new Date('2026-03-04T00:00:00');
    const startDate = new Date('2024-03-02T00:00:00');

    document.getElementById('anniversary-timer').innerText = getTimeDiff(anniversary, false);
    document.getElementById('relationship-timer').innerText = getTimeDiff(startDate, true);
}
setInterval(updateTimers, 1000);

// Modal & Memories
const memories = [
    {
        text: "Our first date was unforgettable. I still remember how nervous I was! 💕",
        images: ["date1-1.jpg", "date1-2.jpg", "date1-3.jpg"]
    },
    {
        text: "The beach date at sunset was magical. I loved holding your hand. 🌅",
        images: ["beach1.jpg", "beach2.jpg", "beach3.jpg"]
    },
    {
        text: "The carnival was amazing! Our favorite ride was the Ferris Wheel. 🎡",
        images: ["carnival1.jpg", "carnival2.jpg", "carnival3.jpg"]
    }
];

let currentSlide = 0;
function openModal(index) {
    document.getElementById("memory-text").innerText = memories[index].text;
    document.getElementById("memory-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("memory-modal").style.display = "none";
}
