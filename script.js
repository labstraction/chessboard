let cells = [];

function createChessBoard(number){

    const chessboard = document.getElementById('chessboard');

    for (let i = 0; i < number; i++) {

        const row = document.createElement('div');

        let cellSide = 30 / number;

        row.style.height = cellSide + 'vw';

        row.style.maxHeight = cellSide + 'vh';


        for (let j = 0; j < number; j++) {
            
            const cell = document.createElement('div');

            cell.className += "cell "

            cell.style.width = cellSide + 'vw';
            cell.style.maxWidth = cellSide + 'vh';
            
            cell.style.height = cellSide + 'vw';
            cell.style.maxHeight = cellSide + 'vh';

            cell.className += (i + j) % 2 === 0 ? 'w-background ' : 'b-background ';

            cells.push(cell);

            row.appendChild(cell)
        }
        


        chessboard.appendChild(row);


    }

    requestAnimationFrame(() => animate(0))


    

}

function animate(time){

    realtime = time/20

    let index = Math.floor(realtime) % cells.length;

    if (cells[index - 1]) {
        cells[index - 1].style.backgroundColor = '';
    } else {
        cells[cells.length - 1].style.backgroundColor = '';
    }


    cells[index].style.backgroundColor = 'red';

    

    if (time < 3000) {
        requestAnimationFrame(() => animate(time + 1))
    }

    
}