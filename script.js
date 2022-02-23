let cells = [];

function createChessBoard(number) {

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

            cell.style.backgroundImage = (i + j) % 2 === 0 ? '' : 'url(./putin2.png)';
            cell.style.zIndex = (i + j) % 2 === 0 ? '0' : '1';
            cell.direction = (i + j) % 4 === 1 ? -1 : 1;
            cells.push(cell);

            row.appendChild(cell)
        }



        chessboard.appendChild(row);


    }

    requestAnimationFrame((incremetal) => baseAnimation(incremetal, 0, 0))




}


function baseAnimation(incrementalTime, lastTime, counter){

    let delta = incrementalTime - lastTime;
    lastTime = incrementalTime;

    let angle = 360 / 1000 * delta;


    console.log(counter);

    if (counter === 1000) {
        for (const cell of cells) {
            cell.direction = cell.direction * -1;
        }
    }

    for (const cell of cells) {
        cell.style.transform = 'rotate(' + (angle * counter * cell.direction) + 'deg)';
    }


    
    requestAnimationFrame((incremetal) => baseAnimation(incremetal, lastTime, counter+1))
}


function animate(time) {

    realtime = time / 20

    let index = Math.floor(realtime) % cells.length;

    if (cells[index - 1]) {
        cells[index - 1].style.backgroundColor = '';
    } else {
        cells[cells.length - 1].style.backgroundColor = '';
    }


    cells[index].style.backgroundColor = 'red';



    requestAnimationFrame(() => animate(time + 1))
}

function animate2(time) {



    let index = time % cells.length;

    // if (cells[index - 1]) {
    //     cells[index - 1].style.backgroundColor = '';
    // } else {
    //     cells[cells.length - 1].style.backgroundColor = '';
    // }

    const column = index % Math.sqrt(cells.length);
    const row = Math.floor(index / Math.sqrt(cells.length));
    const board = Math.floor(time / cells.length);

    cells[index].style.backgroundColor = (column + row + board) % 2 === 0 ? "black" : "white";

    requestAnimationFrame(() => animate2(time + 1))

}

function animate3(time) {




    if (time % 30 === 0) {
        for (const cell of cells) {
            cell.style.backgroundColor = cell.style.backgroundColor === 'black' ? 'white' : 'black';
        }
    }




    requestAnimationFrame(() => animate3(time + 1))



}


function animate4(time) {


    let index = time % cells.length;

    let fraction = 255 / cells.length;

    let red = fraction * (index + 1)

    cells[index].style.backgroundColor = "rgb(" + red + ", 0, 0)";




    requestAnimationFrame(() => animate4(time + 1))

}


function animate5(time) {


    let index = time % cells.length;

    let fraction = 1 / cells.length;

    let opacity = fraction * (index + 1)

    cells[index].style.backgroundColor = "rgb(255, 0, 0, " + opacity + ")";




    requestAnimationFrame(() => animate5(time + 1))

}


function animate6(time) {


    let angle = -360 / 100;

    console.log(time);

    if (time === 1000) {
        for (const cell of cells) {
            cell.direction = cell.direction * -1;
        }
    }

    for (const cell of cells) {
        cell.style.transform = 'rotate(' + (angle * time * cell.direction) + 'deg)';
    }





    requestAnimationFrame(() => animate6(time + 1))



}