//aqui inicia a função (criarTabele)

  
    
function criarTabela() {
    let corFundo = document.getElementById("corFundo").value;;
    var largura = document.getElementById("largura").value;
    let altura = document.getElementById("altura").value;
    let tbl     =  document.createElement("table");

    if(largura<30 || altura<25){
        largura = 30;
        altura = 25;
        document.getElementById("largura").value = largura;
        document.getElementById("altura").value = altura;

    }
    if(corFundo == ""){
        corFundo = "preto";
    }
    //criando variaveil para pegar os dados
     //digitado nos campos correspondent
    //aqui faz apenas a verificação se o usuario quer
    //mostrar a tabela com grade ou não
    if(document.getElementById("grade").checked){
        tbl.cellPadding = 1;
        tbl.cellSpacing = 1;
    }else{
        tbl.cellPadding = 0;
        tbl.cellSpacing = 0;  
    }
   
    //variavel (tblBody) responsável pra pegar a TBODY
    var tblBody = document.createElement("tbody");
    
    //for para criar as linhas
    for (var j = 0; j < altura; j++) {
        //cria uma variavel (ROW) para pegar as TR criadas
        var row = document.createElement("tr");  
        //for para criar as colunas          
        for (var i = 0; i < largura; i++) {
        //cria uma variavel (CELL) para pegar as TD criadas
            var cell = document.createElement("td");
        //aqui ele adcciona a classe "PRETO" para pintar as TD    
                cell.className = corFundo;
        //appendChild é pra adcionar        
                row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);      
    document.getElementById("vogal").value = "";
    document.getElementById("vogal").focus();
}

