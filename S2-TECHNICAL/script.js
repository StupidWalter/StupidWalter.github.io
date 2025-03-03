document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        animateBox(btn.id, btn.dataset.bg);
    });
});

function animateBox(color, bgColor) {
    const displayArea = document.getElementById('display-area');
    const existingBox = displayArea.querySelector('.animated-box');
    
    if (existingBox) {
        existingBox.style.top = '-400px';
        setTimeout(() => existingBox.remove(), 800);
    }
    
    const newBox = document.createElement('div');
    newBox.className = 'animated-box';
    newBox.style.borderColor = color;
    newBox.style.backgroundColor = bgColor;
    
    displayArea.appendChild(newBox);
    
    requestAnimationFrame(() => {
        newBox.style.top = '0';
        
        setTimeout(() => {
            newBox.style.backgroundColor = 'transparent';
        }, 800);
    });
}