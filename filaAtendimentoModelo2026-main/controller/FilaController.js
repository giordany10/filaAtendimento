const minhaFila = new Fila(5);
function adicionarElemento() {
  const nomeInput = document.getElementById("txtnovoNome");
  const cpfInput = document.getElementById("txtnovoCpf");
  const nome = nomeInput.value.trim();
  const cpf = cpfInput.value.trim();
  if (!nome || !cpf) {
    alert("Preencha nome e CPF!");
    return;
  }
  const novoAtendimento = new Atendimento(nome, cpf);
  if (minhaFila.enqueue(novoAtendimento)) {
    mostrarFila();
    nomeInput.value = "";
    cpfInput.value = "";
  } else {
    alert("Fila cheia!");
  }
}

function mostrarFila() {
  const filaElemento = document.getElementById("listFila");
  filaElemento.innerHTML = "";
  for (let item of minhaFila) {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome: ${item.nome} | CPF: ${item.cpf} | Data: ${item.data} | Hora: ${item.hora}`;
    filaElemento.appendChild(listItem);
  }
}

function removerElemento() {
  const itemRemovido = minhaFila.dequeue();
  if (itemRemovido !== null) {
    mostrarFila();
    alert(`Removido: Nome: ${itemRemovido.nome} | CPF: ${itemRemovido.cpf}`);
  } else {
    alert("A fila já está vazia!");
  }
}
{

  function buscarElemento(){
    const buscaNome = document.getElementById("txtnovoNome").value.trim();
    const buscaCpf = document.getElementById("txtnovoCpf").value.trim();
    let encontrado = false;
    for(let item of minhaFila){
      if((buscaNome && item.nome === buscaNome) || (buscaCpf && item.cpf === buscaCpf)){
        alert(`Encontrado: Nome: ${item.nome} | CPF: ${item.cpf} | Data: ${item.data} | Hora: ${item.hora}`);
        encontrado = true;
        break;
      }
    }
    if(!encontrado)
      alert("Pessoa não está na fila");

  }// fim funcao busca
}
