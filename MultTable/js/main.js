//Таблица умножения
var table, row, cell, i, j, r, w, usedCell;
table = document.createElement('table');
table.style.fontFamily = 'monospace';
table.style.fontWeight = '200';
table.style.margin = 'auto';
table.style.borderCollapse = 'collapse';
for (i = 1; i < 10; i++) {
    row = document.createElement('tr');
    for (j = 1; j < 10; j++) {
        cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
        cell.appendChild(document.createTextNode(i * j));
        cell.style.padding = '20px';
        cell.style.textAlign = 'center';
        cell.style.width = 100 / 9 + '%';
        cell.style.fontSize = '20px';
        cell.style.borderStyle = 'solid';
        row.appendChild(cell);
        cell.addEventListener('mouseover', function (event) {
            event.target.parentElement.style.backgroundColor = 'red';
            for (r = 0; r < 9; r++) {
                usedCell = event.target.cellIndex;
                document.getElementsByTagName('tr')[r].childNodes[usedCell].style.backgroundColor = 'red';
            }
            event.target.style.backgroundColor = 'magenta';
        }, false);
        cell.addEventListener('mouseleave', function (event) {
            event.target.parentElement.style.backgroundColor = 'white';
            for (w = 0; w < 9; w++) {
                document.getElementsByTagName('tr')[w].childNodes[usedCell].style.backgroundColor = '';
            }
        }, false);

    }
    table.appendChild(row);
}
document.body.appendChild(table);
