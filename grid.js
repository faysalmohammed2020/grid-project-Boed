//Passing Parameter By User Function
function gridCreate(){
  let rows = document.getElementById('row').value;
  let columns = document.getElementById('col').value; 
  let num = document.getElementById('num').value;
  gridCreator(rows,columns,num);
}


// Define the grid size
function gridCreator(rows,columns,num){
 
// Get the grid container element
const gridContainer = document.getElementById('myGrid');

// Create the grid dynamically
for (let i = 0; i < rows; i++) {
    
            const gridItem = document.createElement('div');
            gridItem.className = 'row';
            gridItem.id = "rowList";
           
   
    
        for (let j = 0; j < columns; j++) {
            // Create a grid item element
           
            const gridItem2 = document.createElement('div');
            gridItem2.className = 'col gy-4 bg-info ';
            gridItem2.id = 'colList'
            gridItem2.style.borderRadius = '30px';
            gridItem2.textContent = `Span ${num}`;
            gridItem2.style.textAlign = 'center';

            // Append the grid item to the grid container
           
            gridItem.appendChild(gridItem2);

            const changeButton = document.createElement('button');
            changeButton.className = 'btn btn-primary ';
            changeButton.style.marginTop = '5px';
            changeButton.textContent = "Change";
            gridItem2.appendChild(changeButton);
            changeButton.addEventListener("click" , ChangeFunction);
            function ChangeFunction(){
              gridItem2.textContent = `Faysal`;
              gridItem2.appendChild(changeButton);

            }
            
  
  }
  gridContainer.appendChild(gridItem);
}

}



//Reset the form

function resetForm(){
   document.getElementById('rowColumnForm').reset();
}

function deleteRow() {
  const rowList = document.getElementById("myGrid");
  rowList.removeChild(rowList.firstElementChild);
  console.log(rowList);
}


