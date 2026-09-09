// Move between pages
function goToPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById("page" + pageNumber);

    if (nextPage) {
        nextPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}

// Mingle button
function mingleClicked() {
    const message = document.getElementById("mingleMessage");

    message.textContent = "Mingle is not allowed 😜❤️ Try Single!";
    
    const button = document.getElementById("mingleBtn");

    button.style.transform =
        "translate(" + (Math.random() * 80 - 40) + "px, " +
        (Math.random() * 40 - 20) + "px)";
}

// NO button
function noClicked() {
    const message = document.getElementById("noMessage");
    const button = document.getElementById("noBtn");

    message.textContent = "No button is shy today 😜❤️ Try YES, MARDHAL!";

    button.style.transform =
        "translate(" + (Math.random() * 120 - 60) + "px, " +
        (Math.random() * 80 - 40) + "px)";
}

// YES button
function acceptProposal() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("success").classList.add("active");

    createHearts();

    const status = document.getElementById("emailStatus");

    status.textContent = "💌 Proposal accepted! ❤️";
}

// Floating hearts
function createHearts() {
    const heartsContainer = document.getElementById("hearts");

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
