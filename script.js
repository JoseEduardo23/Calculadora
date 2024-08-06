let result = document.getElementById("resultado");
function Obtener(value){
    if (value === "=") {
        resultado.value = eval(result.value)
    }else{
        resultado.value += value;
    }
}

function BorrarResultado(){
    resultado.value = " ";
}

