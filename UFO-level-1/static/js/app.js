// from data.js
var tableData = data;
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#ufo_form");


var tbody = d3.select("#table_body");
//var row = tbody.append("tr");
//row.append("td").text(tableData[1]);



  tableData.forEach((ufo_sighting) => {
    var row = tbody.append("tr");
    Object.entries(ufo_sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
        });
    });
    


// YOUR CODE HERE!
//button.on("click", runEnter);
form.on("submit",runEnter);
button.on("click",runEnter);

//d3.select("td").remove();
function runEnter() {

    d3.event.preventDefault();
    d3.select("#table_body").selectAll("*").remove();
    d3.select("#error_message").text("");



    
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(test => test.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((ufo_sighting) => {
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
            });
        });
    
    if (inputValue === ""){
        d3.select("#error_message").text("");
        tableData.forEach((ufo_sighting) => {
            var row = tbody.append("tr");
            Object.entries(ufo_sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
                });
            });
    }
    else if (filteredData.length === 0){
        d3.select("#error_message").text("They Have Hidden The Data We Seek");
        tableData.forEach((ufo_sighting) => {
            var row = tbody.append("tr");
            Object.entries(ufo_sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
                });
            });
    }





};