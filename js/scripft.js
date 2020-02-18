//Obtener elemento principles de el html
var conTainerCell = document.getElementById("container-cell");
var conTainerPiece = document.getElementById("container-piece");

createBoard();


function createCell(width, height){

	 var cellElement = document.createElement("div");
	 cellElement.style.width = width;
	 cellElement.style.height = height;
	 cellElement.style.border="1px solid black";
	 cellElement.style.backgroundColor = "#124242";
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
