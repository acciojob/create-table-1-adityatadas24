function insert_Row() {
    //Write your code here
	const sampleRow = document.getElementById("sampleTable");

	const tr = document.createElement("tr");
	tr.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";

	sampleRow.appendChild(tr);
	sampleRow.insertAfter(tr);
	
	
	
  
  
}
