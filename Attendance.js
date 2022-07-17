
let popup = document.getElementById("popup");

function openPopup(){

    popup.classList.add("open-popup");
}
function closePopup(){

    popup.classList.remove("open-popup");
}



function addRow()
{
    // get input values
    var fname = document.getElementById('FirstName').value;
    var lname = document.getElementById('LastName').value;
    var id = document.getElementById('StID').value;
      
      // get the html table
      // 0 = the first table
    var table = document.getElementsByTagName('table')[0];
      
      // add new empty row to the table
      // 0 = in the top 
      // table.rows.length = the end
      // table.rows.length/2+1 = the center
    var newRow = table.insertRow(table.rows.length/2+1);
      
      // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);
      
      // add values to the cells
    cel1.innerHTML = `${(table.rows.length/2+1)-1}`;
    cel2.innerHTML = id;
    cel3.innerHTML = fname +" "+lname;
    cel4.innerHTML = `<td><button class="att">&#9989;</button></td>`;
    cel5.innerHTML = `<td><button class="att">&#128683;</button></td>`;
    cel6.innerHTML = `<td><button class="att">&#128337;</button></td>`;
}

/**
 * Set the date of the day that the page has been opened by you   
 */
let todaydate= document.querySelector("h1");
todaydate.innerHTML=`Attendance for
${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;



/** fn to download csv file  */
const students=[{id: 0, firstname: "lana", lastname: "qawasmy", atte: "empty"}];

function newstudent (){
}

function exportToCsv(filename) {
  var processRow = function (row) {
    let rowValue =`${row.id},${row.firstname},${row.lastname},${row.att}\n`;
    return rowValue;
  };
  let csvFile = "";
  for (var i = 0; i < students.length; i++) {
    csvFile += processRow(students[i]);
  }
  let dfile = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' }); {
    var link = document.querySelector("a"); 
    var url = URL.createObjectURL(dfile);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.click();
  }
=======
let popup = document.getElementById("popup");

function openPopup(){

    popup.classList.add("open-popup");
}
function closePopup(){

    popup.classList.remove("open-popup");
}



// function addRow()
// {
//     // get input values
//     var fname = document.getElementById('fname').value;
//      var lname = document.getElementById('lname').value;
//       var age = document.getElementById('age').value;
      
//       // get the html table
//       // 0 = the first table
//       var table = document.getElementsByTagName('table')[0];
      
//       // add new empty row to the table
//       // 0 = in the top 
//       // table.rows.length = the end
//       // table.rows.length/2+1 = the center
//       var newRow = table.insertRow(table.rows.length/2+1);
      
//       // add cells to the row
//       var cel1 = newRow.insertCell(0);
//       var cel2 = newRow.insertCell(1);
//       var cel3 = newRow.insertCell(2);
      
//       // add values to the cells
//       cel1.innerHTML = fname;
//       cel2.innerHTML = lname;
//       cel3.innerHTML = age;
// }

/**
 * Set the date of the day that the page has been opened by you   
 */
let todaydate= document.querySelector("h1");
todaydate.innerHTML=`Attendance for
${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;



/** fn to download csv file  */
const students=[{id: 0, firstname: "lana", lastname: "qawasmy", atte: "empty"}];

function newstudent (){
}

function exportToCsv(filename) {
  var processRow = function (row) {
    let rowValue =`${row.id},${row.firstname},${row.lastname},${row.att}\n`;
    return rowValue;
  };
  let csvFile = "";
  for (var i = 0; i < students.length; i++) {
    csvFile += processRow(students[i]);
  }
  let dfile = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' }); {
    var link = document.querySelector("a"); 
    var url = URL.createObjectURL(dfile);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.click();
  }
}