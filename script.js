const btn = document.getElementById('vastusBtn');
const select = document.getElementById('sartsakusValik');

btn.addEventListener('click', () => {
    const val = select.value;
    if (!val) {
        alert('Palun vali väärtus (1–5).');
        return;
    }

    // Salvesta brauseri localStorage'i
    localStorage.setItem('sartsakusValik', val);

    // Kuvab tulemuse lehel (lisab <p id="tulemus">, kui seda pole)
    let tulemuseEl = document.getElementById('tulemus');
    if (!tulemuseEl) {
        tulemuseEl = document.createElement('p');
        tulemuseEl.id = 'tulemus';
        select.parentNode.appendChild(tulemuseEl);
    }
    tulemuseEl.textContent = `Salvestatud: ${val}`;

    // Kui tahad saata serverisse, kasuta fetchi (näide):
    // fetch('/save-choice', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({sartsakus: val}) });
});