let telefones = JSON.parse(localStorage.getItem('lista-item')) || [];

function salvarTelefones() {
    localStorage.setItem('lista-item', JSON.stringify(telefones))
}

function adicionarTelefone() {
    const input = document.getElementById('campo-telefone');
    const telefone = input.value.trim();

    if (telefone) {

        const lista = document.getElementById('lista-item');
        const item = document.createElement('li');

        //item.setAttribute('data-telefone', telefone)
        item.textContent = telefone;

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.classList.add('delete');

        btnExcluir.addEventListener('click', function(event) {
            event.stopPropagation();
            lista.removeChild(item);
            telefones = telefones.filter((t) => t !== telefone);
            salvarTelefones();
        });

        item.appendChild(btnExcluir);

        item.addEventListener('click', function() {
            const itens = document.querySelectorAll('#lista-numeros li');
            itens.forEach((outroItem) => outroItem.classList.remove('selected'));
            item.classList.add('selected');
        });
        
        lista.appendChild(item);

        telefones.push(telefone);
        salvarTelefones();

        input.value = '';
    }
}

function carregarTelefones() {
    const lista = document.getElementById('lista-item');
    telefones.forEach((telefone) => {
        const item = document.createElement('li');
        item.textContent = telefone;

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.classList.add('delete');

        btnExcluir.addEventListener('click', function (event) {
            event.stopPropagation();
            lista.removeChild(item);
            telefones = telefones.filter((t) => t !== telefone);
            salvarTelefones();
        });

        item.appendChild(btnExcluir);

        item.addEventListener('click', function () {
            const itens = document.querySelectorAll('#lista-numeros li');
            itens.forEach((outroItem) => outroItem.classList.remove('selected'));
            item.classList.add('selected');
        });

        lista.appendChild(item);
    });
}

window.onload = carregarTelefones;