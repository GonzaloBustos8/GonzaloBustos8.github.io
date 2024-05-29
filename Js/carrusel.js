let imagenes = [
  "../imgs/imagen1.jpg","../imgs/imagen2.jpg", "../imgs/imagen3.jpg", "../imgs/imagen4.jpg", "../imgs/imagen5.jpg",
];

  let cont = 0;
  
  function imgAnt() {
    if (cont > 0) {
      cont--;
    } else {
      cont = imagenes.length - 1;
    }
    fotoactual();
  }
  function imgSig() {
    if (cont < imagenes.length - 1) {
      cont++;
    } else {
      cont = 0;
    }
    fotoactual();
  }
  function fotoactual() {
    let contimg = document.getElementById("imgCarrusel");
    contimg.src = imagenes[cont];
  }

