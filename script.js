function insert_Row() {
    //Write your code here
	const sampleRow = document.getElementById("sampleTable");
	const rows = document.querySelector("#sampleTable>tr>td");

	// const tr = document.createElement("tr");
	// tr.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
    
	// sampleRow.appendChild(tr);

	 let row = sampleRow.insertRow(0); // We are adding at the end
   
      // Create table cells
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      
   
      // Add data to c1 and c2
      c1.innerText = "New Cell1"
      c2.innerText = "New Cell2"
    
	

	
	
	
  
  
}
