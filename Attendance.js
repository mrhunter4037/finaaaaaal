let todaydate= document.querySelector("h1");
todaydate.innerHTML=`Attendance for
${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;


const students=[{id: 0, firstname: "lana", lastname: "qawasmy", atte: "empty"}];

function newstudent (){
}

function exportToCsv(filename) {
  var processRow = function (row) {
    let rowValue =`${row.id};${row.firstname};${row.lastname};${row.atte}\n`;
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
