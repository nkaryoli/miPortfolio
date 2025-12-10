document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.project-planet-trigger');

    if (!('IntersectionObserver' in window)) {
        // fallback: marcar todos como visibles
        planets.forEach(p => p.classList.add('in-view'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.intersectionRatio >= 0.5) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.5 // activar cuando ~50% del elemento esté visible
    });

    planets.forEach(p => io.observe(p));
});