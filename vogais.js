function vogalA() {
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        //rowIndex = posição da linha
        if ((l.rowIndex == 1) || (l.rowIndex == 3)) {
            l.cells[2].className = "branco";
            l.cells[3].className = "branco";
        }

        if (l.rowIndex > 0 && l.rowIndex < 7) {
            //cells representa a celula da coluna(TD)
            l.cells[1].className = "branco";
            l.cells[4].className = "branco";
        }
    })
}

function vogalE() {
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        //rowIndex = posição da linha
        if ((l.rowIndex == 1) || (l.rowIndex == 5)) {
            l.cells[2].className = "branco";
            l.cells[3].className = "branco";
            l.cells[4].className = "branco";
        }
        if (l.rowIndex > 0 && l.rowIndex < 6) {
            l.cells[1].className = "branco";
        }
        if (l.rowIndex == 3) {
            l.cells[2].className = "branco";
            l.cells[3].className = "branco";
        }
    })
}

function vogalI() {
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        //rowIndex = posição da linha
        if (l.rowIndex == 1) {
            l.cells[1].className = "branco";
        }
        if (l.rowIndex > 2 && l.rowIndex < 7) {
            l.cells[1].className = "branco";
        }
    })
}

function vogalO() {
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        //rowIndex = posição da linha
        if ((l.rowIndex == 1) || (l.rowIndex == 5)) {
            l.cells[2].className = "branco";
            l.cells[3].className = "branco";
        }

        if (l.rowIndex > 0 && l.rowIndex < 6) {
            //cells representa a celula da coluna(TD)
            l.cells[1].className = "branco";
            l.cells[4].className = "branco";
        }
    })
}

function vogalU() {
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
        if (l.rowIndex == 5) {
            l.cells[2].className = "branco";
            l.cells[3].className = "branco";
        }

        if (l.rowIndex > 0 && l.rowIndex < 6) {
            l.cells[1].className = "branco";
            l.cells[4].className = "branco";
        }
    })
}

function limpaVogal(){
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {
       for(var i=0;i<10;i++){
        l.cells[i].className = "preto";
       }        
    })
}



function exibirVogal() {
    limpaVogal();
    var vogal = document.getElementById("vogal").value;
       
    switch (vogal) {
        case "A":
            vogalA();
            break;
        case "E":
            vogalE();
            break;
        case "I":
            vogalI();
            break;
        case "O":
            vogalO();
            break;
        case "U":
            vogalU();
            break;
        default:
            alert("Informe uma vogal em letras MAIÚSCULO"); 
    }
    document.getElementById("vogal").value = "";
    document.getElementById("vogal").focus();

}
