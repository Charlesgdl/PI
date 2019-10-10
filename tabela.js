function criarTabela() {

    var largura = parseInt(document.getElementById("largura").value);
    var altura = parseInt(document.getElementById("altura").value);
    var tbl     =  document.createElement("table");
    
    if(document.getElementById("grade").checked){
        tbl.cellPadding = 0;
        tbl.cellSpacing = 0;
    }else{
        tbl.cellPadding = 1;
        tbl.cellSpacing = 1;  
    }
   
    var tblBody = document.createElement("tbody");
    
    for (var j = 0; j < largura; j++) {
        var row = document.createElement("tr");            
        for (var i = 0; i < altura; i++) {
            var cell = document.createElement("td");
                cell.className = "preto";
                row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);      
    document.getElementById("vogal").value = "";
    document.getElementById("vogal").focus();
}