const originalStates = [];

window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section, div, p, h1, h2, h3, h4, h5, h6, li, span, menu');
    elements.forEach(el => {
        originalStates.push({ element: el, display: el.style.display });
    });

    document.getElementById('globalSearchInput').addEventListener('input', function() {
        const filter = this.value.toLowerCase();

        originalStates.forEach(({ element, display }) => {
            if (element.id === 'globalSearchInput' || element.closest('.global-search')) return;
            const text = element.textContent.toLowerCase();
            if (filter === '' || text.includes(filter)) {
                element.style.display = display;
            } else {
                element.style.display = 'none';
            }
        });
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const saludoEl = document.getElementById("saludo");
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";
    let emoji = "";

    if (hour >= 0 && hour < 12) {
        greeting = "¡Good morning!";
        emoji = "🌅";
    } else if (hour >= 12 && hour < 18) {
        greeting = "¡Good afternoon!";
        emoji = "🌇";
    } else {
        greeting = "¡Good night!";
        emoji = "🌙";
    }

    
    const horaActual = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    saludoEl.textContent = `${emoji} ${greeting} It's  ${horaActual}`;
});