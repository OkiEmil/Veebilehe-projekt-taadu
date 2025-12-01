const tekstid = document.querySelectorAll('.tekstikast .kirjeldus');

console.log(tekstid);

/* See kood valib seda, millist tekstilõiku Meist-lehel kuvada, autor on Emil */

function showText(index) {

    tekstid.forEach((p, i) => {
        console.log(i, index);
        if (i === index) {
          p.classList.add('visible');
        } else {
            
          p.classList.remove('visible');
        }
      });
}
