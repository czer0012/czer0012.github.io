/var myList = [
  { "time": "9:00-11:00", "monday": Communications I, "tuesday": Client Services, "wednesday": Special Collections, "thursday": Directed Research Seminar, "friday": Client Services },
  { "time": "11:00-12:30", "monday": Reference, "tuesday": Internet Applications, "wednesday": Library Software, "thursday": French, "friday": Reference },
  { "time": "14:00-15:00", "monday": Acquisitions, "tuesday": General Elective, "wednesday": Marketing, "thursday": Emerging Library Tech, "friday": Library Software },
  { "time": "15:30-17:30", "monday": French, "tuesday": French, "wednesday": Acquisitions, "thursday": Subject Analysis, "friday": Internet App}
];

function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}/

var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
