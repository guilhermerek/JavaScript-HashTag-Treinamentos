const input = document.getElementById("CampoDeTexto");
const ul = document.getElementById("taskList");

function adicionarTarefa(){
    
    if (input.value !== null && input.value !== '') {
        const li = document.createElement("li");

        li.innerText = input.value;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function (){
            ul.removeChild(li);
        }
        
        li.appendChild(botaoRemover);
        ul.appendChild(li);
        input.value= null;
    }
    else {
        alert("Campo Vazio!!");
    }

    //uL.appendChild(lI);
    //document.getElementById('CampoDeTexto').value= null;
}
