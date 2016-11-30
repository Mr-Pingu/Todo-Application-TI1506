var todolist = [];





function loginuser(form){
  var un = document.logininfo.usr.value;
  var pw = document.logininfo.pword.value;

  console.log(un);
  console.log(pw);
  window.location="todolist.html";


}

function addtodo(form){
  var name = form.taskname.value;
  var prio = form.priority.value;
  var date = form.date.value;
  var due = form.done.value;
  var task = [name,prio,date,due];
  todolist.push(task);
  console.log(todolist[0]);
}



// Sorteer functies
function sort_date(){

}

function sort_prio(){

}


function by_observer(){
  return false;
}

//Functions for popup
function todo_popup_show() {
document.getElementById('popup1').style.display = "block";
}
function todo_popup_hide(){
document.getElementById('popup1').style.display = "none";
}

// Functions for editing
function editprio(index){
  if (array[index] == 0){
  array[index].priority = 1;}
  else {array[index].priority = 0;}
}

function editname(newnaam){
  if (naam !== null){
  array[index].name = naam;}
  else {return false;}

}

function editdate(newdate){
  if (newdate !== 0) {
    array[index].date = newdate;}
    else { return false;}
  }


function editdone(newdone){
  if (array[index] == 0){
  array[index].priority = 1;}
  else {array[index].priority = 0;}
}

function showtodofromarray(array) {
  for(i = 0;i < todolist.length; i==)
  var tablerow = document.createElement("tr");
  var tabledata1 = document.createElement("td");
  var node = document.createTextNode(array[0][0]);
  tabledata1.appendChild(node);
  var tabledata2 = document.createElement("td");
  var node2 = document.createTextNode(array[0][1]);
    tabledata2.appendChild(node2);
  var tabledata3 = document.createElement("td");
  var node3 = document.createTextNode(array[0][2]);
    tabledata3.appendChild(node3);
  var tabledata4 = document.createElement("td");
  var node4 = document.createTextNode(array[0][3]);
    tabledata4.appendChild(node4);

  tablerow.appendChild(tabledata1);
  tablerow.appendChild(tabledata2);
tablerow.appendChild(tabledata3);
tablerow.appendChild(tabledata4);

var element = document.getElementById("t_newadd");
element.appendChild(tablerow);


    //chatlog.scrollTop = chatlog.scrollHeight;
}
