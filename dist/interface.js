const myTV = {
    turnOn() {
        return true;
    },
    trunOff() {
    }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTV);
function createBoard() {
    const cells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({
                row, col
            });
        }
    }
    return cells;
}
const board = createBoard();
board[0].piece = {
    move(from, to) {
        return true;
    }
};
