const btn = document.getElementById('vastusBtn');
const select = document.getElementById('sartsakusValik');

btn.addEventListener('click', () => {
    const val = select.value;
    if (!val) {
        alert('Palun vali väärtus (1–5).');
        return;
    }

    localStorage.setItem('sartsakusValik', val);

    let tulemuseEl = document.getElementById('tulemus');
    if (!tulemuseEl) {
        tulemuseEl = document.createElement('p');
        tulemuseEl.id = 'tulemus';
        select.parentNode.appendChild(tulemuseEl);
    }
    tulemuseEl.textContent = `Salvestatud: ${val}`;

});