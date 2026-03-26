const minhaFila = new Fila(5);

function adicionarElemento() {
  const novoElemento = document.getElementById("txtnovoNome");
  if (minhaFila.enqueue(novoElemento.value)) {
    mostrarFila(); 
    novoElemento.value = "" // mostrar a fila
  } else {
    alert("Fila cheia!");
  }
  
}

 function mostrarFila(){
    const filaElemento = document.getElementById("listFila");
    filaElemento.innerHTML="";
    for(let item of minhaFila){
      const listItem = document.createElement("li");
      listItem.textContent = item;
      filaElemento.appendChild(listItem);
    }
  }

function removerElemento() {
  const itemRemovido = minhaFila.dequeue();

  if (itemRemovido !== null) {
    mostrarFila(); // Atualiza o label na tela
    alert(`Removido: ${itemRemovido}`);
  } else {
    alert("A fila já está vazia!");
  }
}
{

  function buscarElemento(){
    const busca = document.getElementById("txtnovoNome");
    let encontrado = false;
    for(let item of minhaFila){
       if(busca.value=== item){
        alert("Encontrado na fila");
        encontrado = true;
       }
    }
    if(!encontrado)
      alert("Pessoa não está na fila");

  }// fim funcao busca
}
