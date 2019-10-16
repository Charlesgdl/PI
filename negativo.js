function geraNegativo() {
    var negativoAltura = document.getElementById("negativoAltura").value;
    var negativoLargura = document.getElementById("negativoLargura").value;

    var inicioLinha = document.getElementById("inicioLinha").value;
    var inicioColuna = document.getElementById("inicioColuna").value;

    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {

        if ((l.rowIndex > (inicioLinha - 2)) && (l.rowIndex < negativoAltura)) {
          
            for (i = (inicioColuna - 1); i < negativoLargura; i++) {
               
                let classeAtual = l.cells[i].className;
                if(classeAtual == "branco") {
                    l.cells[i].className = "preto";
                } 
                if(classeAtual != "branco"){
                    l.cells[i].className = "branco";
                }

            }
        }
    })


}

function escalaCinza() {
    let numCor = 100;
    cores = String('rgb(' + numCor + ',' + numCor + ',' + numCor + ',' + numCor + ')');
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        let tamanho = tr.length;
        if (l.rowIndex < tamanho) {
            for (i = 0; i < 5; i++) {
                l.cells[i].style.backgroundColor = cores;
            }
            for (i = 5; i < 10; i++) {
                if (l.cells[i].className == "preto") {
                    l.cells[i].style.backgroundColor = cores;
                }

            }

        } 
    })
}