// from data.js
var tableData = data;
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#ufo_form");
// select and create table with the ufo data
var tbody = d3.select("#table_body");
  tableData.forEach((ufo_sighting) => {
    var row = tbody.append("tr");
    Object.entries(ufo_sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
        });
    });

//methods for running below function
form.on("submit",runEnter);
button.on("click",runEnter);

//create function for filtering data
function runEnter() {
    //prevent reload
    d3.event.preventDefault();
    //delete table that is currently in tbody and clear error message
    d3.select("#table_body").selectAll("*").remove();
    d3.select("#error_message").text("");

    //save input elements for each field filled in
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value").toLowerCase();
    console.log(inputValue);
    console.log(tableData);

    //Filter data by inputvalue
    var filteredData = tableData.filter(test => test.datetime.includes(inputValue));
    console.log(filteredData);

    //display table of filtered data
    filteredData.forEach((ufo_sighting) => {
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
            });
        });
    
    // return to base table if no date is selected
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
    // go back to initial data set displaying error message at the top of the page
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