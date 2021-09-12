// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build and clear a table
function buildTable(data) {
    tbody.html("");
  }

  // create loop to pull data
  data.forEach((dataRow) => {
    // create variable to append a row in table body "tr" = table row
    let row = tbody.append("tr");
    // object.values is to reference one objust from the array
    // dataRow is to put values into the dataRow
    // for Each((val) is to put one object per row)
    Object.values(dataRow).forEach((val) => {
        // to append data into a table data tag <td>:
        let cell = row.append("td");
        // extracting only the text of the value:
        cell.text(val);
        }
    );
  });

  // to pull the property value and hold it to the 'date' variable:
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);