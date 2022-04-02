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
form.on("keyup",runEnter);
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
    var inputDate = inputElement.property("value").toLowerCase();
    
    var inputElement= d3.select("#city_name");
    var inputCity = inputElement.property("value").toLowerCase();

    var inputElement = d3.select("#state_id");
    var inputState= inputElement.property("value").toLowerCase();

    var inputElement= d3.select("#country_id");
    var inputCountry= inputElement.property("value").toLowerCase();

    var inputElement = d3.select("#shape_id");
    var inputShape= inputElement.property("value").toLowerCase();
    
    //log all data inputs
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    console.log(tableData);

    var filteredData = tableData;
    //filter data by date
    if (inputDate === ""){filteredData = filteredData;
    }
    else {filteredData = filteredData.filter(test => test.datetime.includes(inputDate));
    }

    //filter data by City
    if (inputCity === ""){filteredData = filteredData;
    }
    else {filteredData = filteredData.filter(test => test.city.includes(inputCity));}
    
    //filter data by State
    if (inputState === ""){filteredData = filteredData;
    }
    else {filteredData = filteredData.filter(test => test.state.includes(inputState));
    }

    //filter data by Country
    if (inputCountry === ""){filteredData = filteredData;
    }
    else {filteredData = filteredData.filter(test => test.country.includes(inputCountry));
    }

    //filter data by Shape
    if (inputShape === ""){filteredData = filteredData;
    }
    else {filteredData = filteredData.filter(test => test.shape.includes(inputShape));
    }

    //show filtereddata in the console
    console.log(filteredData);

    filteredData.forEach((ufo_sighting) => {
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
            });
        });

    // return to base table if no data is available
    if (filteredData.length === 0){
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

