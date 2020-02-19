//Obtener elemento principles de el html
var conTainerCell = document.getElementById("container-cell");
var conTainerPiece = document.getElementById("container-piece");
var selectedPiece= null;

createBoard();
createPieces();


function createCell(width, height){

	 var cellElement = document.createElement("div");
	 cellElement.style.width = width;
	 cellElement.style.height = height;
	 cellElement.style.border="1px solid black";
	 cellElement.style.backgroundColor = "#124242";
	 cellElement.onclick=clickCell;
	 return cellElement;
}
function createPiece(width, height, piece){
	var cellElement = document.createElement("div");
	var pieceElement = document.createElement("img");
	
	//configurando la celda para la pieza dentro del contenedor de piezas
	cellElement.style.width=width;
	cellElement.style.height=height;
	
	// Configurando la piza dentro del contenedor pieza
	pieceElement.style.width=width;
	pieceElement.style.height=height;
	pieceElement.style.border="1px solid black";
	pieceElement.src = piece.image;
	pieceElement.onclick= clickPiece;
	
	cellElement.appendChild(pieceElement);
	
	return cellElement;
}
function createBoard(){
	var width = conTainerCell.offsetWidth;
	var height = conTainerCell.offsetHeight;
	width /=4;
	height /=4;
	for (var i=0;i<16;i++){
		let CellElement = createCell(width,height);
		addCell(CellElement);
	}
}
function addCell(element){
	conTainerCell.appendChild(element);
}
function generatePieceData(){
	//generamos una lista de piesas
	var pieces = [];
	let c=0;
	for(let i=0;i<4;i++){
		for(let q=0;q<4;q++){
			let piece= {
			image: "img/m"+(i+1)+"-"+(q+1)+".jpg",position: c//acomodalo para lo de los nombres
			}
			c++;
			pieces.push(piece);
			
		}
	}
	return pieces; 	
}
function createPieces(){
	var width = conTainerPiece.offsetWidth;
	var height = conTainerPiece.offsetHeight;
	width /=4;
	height /=4;
	var pieces = generatePieceData();
	for(let i=0;i<16;i++){
		let pieceElement=createPiece(width,height,pieces[i]);
		addPiece(pieceElement);
	}
}
function addPiece(element){
	conTainerPiece.appendChild(element);
	
}
function clickPiece(e){
	var piece = e.target;
	selectedPiece=piece;
}
function clickCell(e){
	if(selectedPiece){
		let cell = e.target;
		cell.appendChild(selectedPiece);
	}else{
		console.log("Seleciona una piesa");
	}
}