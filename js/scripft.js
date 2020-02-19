//Obtener elemento principles de el html
var conTainerCell = document.getElementById("container-cell");
var conTainerPiece = document.getElementById("container-piece");
var selectedPiece= null;

createBoard();
createPieces();


function createCell(width, height,position){

	 var cellElement = document.createElement("div");
	 cellElement.style.width = width;
	 cellElement.style.height = height;
	 cellElement.style.border="1px solid black";
	 cellElement.style.backgroundColor = "#124242";
	 cellElement.dataset.position = position;
	 
	 cellElement.onclick=clickCell;
	 cellElement.dataset.fill=false;
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
	pieceElement.dataset.position=piece.position;
	pieceElement.dataset.fill=false;
	pieceElement.dataset.moved = false;
	
	cellElement.appendChild(pieceElement);
	
	return cellElement;
}
function createBoard(){
	var width = conTainerCell.offsetWidth;
	var height = conTainerCell.offsetHeight;
	width /=4;
	height /=4;
	for (var i=0;i<16;i++){
		let CellElement = createCell(width,height, i);
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
	if(piece.dataset.moved=="true"){
			verifyCell(piece.parentElement);
	}
	selectedPiece=piece;
}
function clickCell(e){
	if(e.target.parentElement.dataset.fill=="true"){
		if(selectedPiece){
			let cell = e.target.parent;
			verifyCell(cell);
			selectedPiece=null;
		}else{
			console.log("Seleciona una piesa");
		}
	}else{
		e.target.dataset.fill="true";
		e.target.appendChild(selectedPiece)
		selectedPiece=null;
	}
}
function verifyCell(element){
	var fill = element.dataset.fill=="true";
	if(fill){
		let piece = element.children[0];
		element.appendChild(selectedPiece);
		addPieceByPosition(piece);
	}else{
		element.dataset.fill=true;
		element.appendChild(selectedPiece);
	}
}
function addPieceByPosition(element){
	var position = element.dataset.position;
	conTainerPiece.children[position].appendChild(element);
}