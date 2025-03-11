document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function () {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
    });
});
// Countdown Timer Script
function startCountdown() {
    const deadline = new Date("April 4, 2025 00:00:00").getTime(); // Registration Deadline
    const timerElement = document.getElementById("countdown-timer");

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        if (timeLeft <= 0) {
            timerElement.innerHTML = "⚠️ Registration Closed!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        timerElement.innerHTML = `⏳ Registration closes in ${days}d ${hours}h ${minutes}m`;
    }

    updateTimer();
    setInterval(updateTimer, 60000); // Update every minute
}

startCountdown();

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
