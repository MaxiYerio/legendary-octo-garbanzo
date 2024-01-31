const noBtn = document.getElementById("noBtn");

noBtn.addEventListener('pointermove', moveButton);

noBtn.addEventListener('touchstart', moveButton);

function moveButton(event) {
    event.preventDefault();
    
    let x, y;
    if (event.touches) {
        const touch = event.touches[0];
        x = touch.clientX;
        y = touch.clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const newX = Math.random() * (width - noBtn.offsetWidth);
    const newY = Math.random() * (height - noBtn.offsetHeight);
    
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

function sayYes() {
    alert("Te amo, Te perdono");
}

function sayNo() {
    alert("No te perdono jadeputa");
}
