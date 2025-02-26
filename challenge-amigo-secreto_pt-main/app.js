//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const friends = [];

function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Por favor, insira um nome de amigo.');
        return;
    }
    friends.push(amigo);
    const listaAmigos = document.getElementById('listaAmigos');
    const amigoItem = document.createElement('li');
    amigoItem.textContent = amigo;
    listaAmigos.appendChild(amigoItem);
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('listaAmigos').style.display = 'block';
    document.getElementById('button-draw').disabled = false;
}

function sortearAmigo() {
    if (friends.length === 0) {
        alert('Por favor, adicione pelo menos um amigo antes de sortear.');
        return;
    }
    const amigoSecreto = friends[Math.floor(Math.random() * friends.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = 'O amigo secreto escolhido foi: ' + amigoSecreto;
    resultado.style.display = 'block';
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
    friends.length = 0;
    document.getElementById('button-draw').disabled = true;
}