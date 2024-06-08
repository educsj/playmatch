document.getElementById('menuBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Função para carregar o histórico de utilização do localStorage
function loadHistory() {
    var historyTable = document.getElementById('historyTable');
    var historyData = JSON.parse(localStorage.getItem('historyData')) || [];

    // Limpa a tabela antes de adicionar novas linhas
    historyTable.innerHTML = '';

    // Adiciona cada entrada do histórico na tabela
    historyData.forEach(function(item) {
        var row = document.createElement('tr');
        var dateCell = document.createElement('td');
        var courtNameCell = document.createElement('td');
        var courtTypeCell = document.createElement('td');
        var timeCell = document.createElement('td');

        dateCell.textContent = item.date;
        courtNameCell.textContent = item.courtName;
        courtTypeCell.textContent = item.courtType;
        timeCell.textContent = item.time;

        row.appendChild(dateCell);
        row.appendChild(courtNameCell);
        row.appendChild(courtTypeCell);
        row.appendChild(timeCell);

        historyTable.appendChild(row);
    });
}

// Chama a função para carregar o histórico ao carregar a página
window.onload = loadHistory;
