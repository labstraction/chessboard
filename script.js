let cells = [];

function createChessBoard(number){

    const chessboard = document.getElementById('chessboard');

    for (let i = 0; i < number; i++) {

        const row = document.createElement('div');

        let cellSide = 70 / number;

        row.style.height = cellSide + 'vw';

        row.style.maxHeight = cellSide + 'vh';


        for (let j = 0; j < number; j++) {
            
            const cell = document.createElement('div');

            cell.className += "cell "

            cell.style.width = cellSide + 'vw';
            cell.style.maxWidth = cellSide + 'vh';
            
            cell.style.height = cellSide + 'vw';
            cell.style.maxHeight = cellSide + 'vh';

            cell.style.backgroundColor = (i + j) % 2 === 0 ? 'white' : 'black';

            cells.push(cell);

            row.appendChild(cell)
        }
        


        chessboard.appendChild(row);


    }

    requestAnimationFrame(() => animate2(0))


    

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

    

    requestAnimationFrame(() => animate(time + 1))
}

function animate2(time){



    let index = time % cells.length;

    // if (cells[index - 1]) {
    //     cells[index - 1].style.backgroundColor = '';
    // } else {
    //     cells[cells.length - 1].style.backgroundColor = '';
    // }

    const column = index % Math.sqrt(cells.length);
    const row = Math.floor(index / Math.sqrt(cells.length));
    const board = Math.floor(time / cells.length);

    cells[index].style.backgroundColor = (column + row + board)  % 2 === 0 ? "black" : "white" ;

    
    requestAnimationFrame(() => animate2(time + 1))
    

    
}

function animate3(time){



    
    if (time % 30 === 0) {
        for (const cell of cells) {
            cell.style.backgroundColor = cell.style.backgroundColor === 'black' ? 'white' : 'black';
        }
    }
        
    

    
    requestAnimationFrame(() => animate3(time + 1))
    

    
}