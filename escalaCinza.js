
/*desativado
 function escalaCinza(){
    let largura =  document.getElementById("largura").value;
    let numCor = 1;
    
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        let tamanho = tr.length;
        numCor=numCor+1;
        cores = String('rgb(' + numCor + ',' + numCor + ',' + numCor + ',' + numCor + ')');
        if (l.rowIndex < tamanho) {
            for (i = 0; i < largura; i++) {
                l.cells[i].style.backgroundColor = cores;
            }
           

        } 
    })
}*/

function escalaDeCinza(){
    let largura = document.getElementById("largura").value;
    let numCor = 1;

    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        let tamanho = tr.length;
        numCor = numCor+10;
        cores = String('rgb(' + numCor + ',' + numCor + ',' + numCor + ',' + numCor + ')');
        if (l.rowIndex < tamanho) {
            for (i = 0; i < largura; i++) {
                if(l.cells[i].className == "branco"){
                l.cells[i].style.backgroundColor = cores;
                }
               
            }

        } 
    })
}