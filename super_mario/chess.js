var board = []; // 2D array representing the chess board
var selectedPiece = null; // currently selected chess piece

// Initialize the chess board
function initBoard() {
  // Fill the board with empty spaces
  for (var i = 0; i < 8; i++) {
    board.push([]);
    for (var j = 0; j < 8; j++) {
      board[i].push(null);
    }
  }

  // Set up pawns
  for (var i = 0; i < 8; i++) {
    board[1][i] = new ChessPiece('pawn', 'black');
    board[6][i] = new ChessPiece('pawn', 'white');
  }

  // Set up other pieces
  board[0][0] = new ChessPiece('rook', 'black');
  board[0][7] = new ChessPiece('rook', 'black');
  board[7][0] = new ChessPiece('rook', 'white');
  board[7][7] = new ChessPiece('rook', 'white');
  board[0][1] = new ChessPiece('knight', 'black');
  board[0][6] = new ChessPiece('knight', 'black');
  board[7][1] = new ChessPiece('knight', 'white');
  board[7][6] = new ChessPiece('knight', 'white');
  board[0][2] = new ChessPiece('bishop', 'black');
  board[0][5] = new ChessPiece('bishop', 'black');
  board[7][2] = new ChessPiece('bishop', 'white');
  board[7][5] = new ChessPiece('bishop', 'white');
  board[0][3] = new ChessPiece('queen', 'black');
  board[7][3] = new ChessPiece('queen', 'white');
  board[0][4] = new ChessPiece('king', 'black');
  board[7][4] = new ChessPiece('king', 'white');
}

// Render the chess board
function renderBoard() {
  var table = document.getElementById('chess-board');
  for (var i = 0; i < 8; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < 8; j++) {
      var cell = document.createElement('td');
      if ((i + j) % 2 === 0) {
        cell.className = 'white';
      } else
