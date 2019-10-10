function geraNegativo() {
    var negativoAltura = document.getElementById("negativoAltura").value;
    var negativoLargura = document.getElementById("negativoLargura").value;

    var inicioLinha= document.getElementById("inicioLinha").value;
    var inicioColuna = document.getElementById("inicioColuna").value;

    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {

        if ((l.rowIndex>(inicioLinha-2)) && (l.rowIndex < negativoAltura)) {
            for (i = (inicioColuna-1); i < negativoLargura; i++) {
                if (l.cells[i].className == "branco") {
                    l.cells[i].className = "preto";
                } else {
                    l.cells[i].className = "branco";
                }

            }
        }
    })
    
  
}