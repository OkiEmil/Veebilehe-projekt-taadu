const tekstid = document.querySelectorAll('.tekstikast .kirjeldus');

console.log(tekstid);



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
