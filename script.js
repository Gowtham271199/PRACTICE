var row =null;
function Submit(){
   var dataEntered=retrieveData();
    
   var readData = readingData(dataEntered);
   if(dataEntered==false){
    msg.innerHTML=`<h3 style ="color:red;">Please enter Data!</h3>`;
   }
   else{
    if (row==null){
        insert(readData);
        msg.innerHTML=`<h3 style ="color:green;">Data Inserted!</h3>`;
        }
        else{
         update();
         msg.innerHTML=`<h3 style ="color:orange;">Data Updated!</h3>`;
        }

   }
  document.getElementById("form").reset();
}
//CREATE
//Retrieving data from local storage
function retrieveData(){
    var name1 = document.getElementById("name").value;
    var job =document.getElementById("job").value;
    var exp =document.getElementById("exp").value;

    var arr =[name1,job,exp];
   if (arr.includes(""))
   {return false}
else{
   return arr;
   }
// Data in local storage
}
//READ
function readingData(dataEntered){
//storing data in local storage
var n = localStorage.setItem("name",dataEntered[0]);
var j = localStorage.setItem("job",dataEntered[1]);
var e = localStorage.setItem("exp",dataEntered[2]);

//getting values from local to table

var n1=localStorage.getItem("name",n);
var j1=localStorage.getItem("job",j);
var e1=localStorage.getItem("exp",e);

var arr = [n1,j1,e1];
return arr;
}

//INSERT
function insert(readData){
    row=table.insertRow()
   row.insertCell(0).innerHTML=readData[0];
   row.insertCell(1).innerHTML=readData[1];
   row.insertCell(2).innerHTML=readData[2];
   row.insertCell(3).innerHTML=`<button onclick = edit(this)>Edit</button> <button onclick = remove(this)>Delete</button>`;
}
   //above code is shortcut for below code
//    var cell1 = row.insertCell(0);
//    var cell2 = row.insertCell(1);
//    var cell3 = row.insertCell(2);
//    cell1.innerHTML=readData[0];
//    cell2.innerHTML=readData[1];
//    cell3.innerHTML=readData[2];

//EDIT
function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value=row.cells[0].innerHTML;
    document.getElementById("job").value=row.cells[1].innerHTML;
    document.getElementById("exp").value=row.cells[2].innerHTML;
}

//UPDATE
function update(){
    row.cells[0].innerHTML=document.getElementById("name").value;
    row.cells[1].innerHTML=document.getElementById("job").value;
    row.cells[2].innerHTML=document.getElementById("exp").value;
    row= null;
}
//REMOVE

function remove(td){
   var ans= confirm("Do you want to delete this?")
   if(ans==true){
    row=td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
   }
   

}