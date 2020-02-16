function addevent(event) {
  

    if (document.getElementsByClassName("event")[0].getAttribute("contenteditable") == "false") {
    let rect = event.target.getBoundingClientRect() //get pitch dimensions
    
    let x = ((event.clientX - rect.left)/document.getElementById('pitch').offsetWidth); //x position within the element.
    let y = ((event.clientY - rect.top)/document.getElementById('pitch').offsetHeight);  //y position within the element.
    
    // let coords2 = "W = " + x + " Y = " + y;
    
    let action = document.getElementById('selected').innerHTML;
    
    // document.getElementById("demo").innerHTML = coords2 //test
    
    let table = document.getElementById("resultsdata");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = action;
    cell2.innerHTML = Math.round(x*100);
    cell3.innerHTML = Math.round(y*100);
    
    document.getElementById("resultscontainer").scrollTop = document.getElementById("resultscontainer").scrollHeight; 
    
    } else {
      console.log("locked");
      document.getElementById("editON").innerHTML=("Turn off edit|");
    }
  }
  
  function changeEventFocus(event){
    document.getElementById("selected").removeAttribute('id');
    event.setAttribute("id", "selected");
  }
  
  function eventsEditable(){
    events = document.getElementsByClassName("event");
    
    
     if (events[0].getAttribute("contenteditable") == "false"){
       for (var i = 0; i < events.length; i++){
        events[i].setAttribute("contenteditable", true);
        //events[i].setAttribute("class", "editable");
        document.getElementById("editON").style.display = "inline";
        document.getElementById("editOFF").style.display = "none";

      }
     } else {
      
       for (var i = 0; i < events.length; i++){
        events[i].setAttribute("contenteditable", false);
        //events[i].classList.remove("editable");
        document.getElementById("editON").style.display = "none";
        document.getElementById("editOFF").style.display = "inline";
        document.getElementById("editON").innerHTML=("ON|");


      }
       
        }
      
  }
  
  function downloadCSV(csv, filename) {
      var csvFile;
      var downloadLink;
  
      // CSV file
      csvFile = new Blob([csv], {type: "text/csv"});
  
      // Download link
      downloadLink = document.createElement("a");
  
      // File name
      downloadLink.download = filename;
  
      // Create a link to the file
      downloadLink.href = window.URL.createObjectURL(csvFile);
  
      // Hide download link
      downloadLink.style.display = "none";
  
      // Add the link to DOM
      document.body.appendChild(downloadLink);
  
      // Click download link
      downloadLink.click();
  }


  function delLast(){

    
  var table = document.getElementById("resultstable");
  if (table.rows.length > 1){
  table.deleteRow((table.rows.length)-1);
  };
      
};
  
  
  
  function exportTableToCSV(filename) {
      var csv = [];
      var rows = document.querySelectorAll("table tr");
      
      for (var i = 0; i < rows.length; i++) {
          var row = [], cols = rows[i].querySelectorAll("td, th");
          
          for (var j = 0; j < cols.length; j++)
              row.push(cols[j].innerText);
          
          csv.push(row.join(","));        
      }
  
      // Download CSV file
      downloadCSV(csv.join("\n"), filename);
  }
  

  //Set max event size

  var textfields = document.getElementsByClassName("event"); 
  for(i=0; i<textfields.length; i++){
    textfields[i].addEventListener("textInput", function(e) {
        if(this.innerHTML.trim().length >= 10){
            e.preventDefault();
            console.log(this.innerHTML.trim());
            return false;
        }
    }, false);
}
  //# sourceURL=userscript.js