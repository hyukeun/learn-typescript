
// 하나의 interface를 통해 하나의 type을 정리하는 것이다.
// 어떠한 행위를한다라고 기술만 하는 것이다.


interface TV {
    turnOn() : boolean; // true, false로 키고 꺼지는 것을 만들어준다.
    trunOff() : void; // 기본적인것으로 돌려주는 것
}
// interface는 구현체가 없어야 한다. 해당 type에 어떤 행위를 한다고 보면된다.
// interface를 사용하면 좋은점들 
// 티비라는 인터페이스를 사용하는 하나의 펑션은 만든다고 한다면
// 즉 행위는 없고 데이터만 받고있는 데이터의 속성들만 넣어주는 것이다.


const myTV: TV ={
    turnOn() {
        return true;
    },
    trunOff() {

    }
}

function tryTurnOn(tv : TV) {
    tv.turnOn();
}

tryTurnOn(myTV);

interface Cell {
    row :number;
    col : number;
    piece?: Piece; // ?를 주어서 옵션이라고 표시가 가능하다. 그래서 piece라는 속성을 갖지 않아도 cell의 type에 해당하는 객체라고 할 수 있다.
}

interface Piece{
    move(from : Cell, to: Cell) : boolean;
}

function createBoard() {
    const cells : Cell[] = [];

    for (let row = 0; row < 4; row++) {
        for ( let col = 0; col < 3; col++){
            cells.push({
                // row: row,
                // col: col 
                // 2개가 같으면 생략 가능하다 ES6에 추가된것
                row, col
            })
        }
    }
    return cells;
}

//piece라는 것은 move라는 행위를 꼭 해줘야 한다.
const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true;
    }
}