var todolist = [];

var scntDiv = $('t_newadd');
var i = $('t_newadd tr').size() + 1;




function loginuser(form){
  var un = document.logininfo.usr.value;
  var pw = document.logininfo.pword.value;

  console.log(un);
  console.log(pw);
  window.location="todolist.html";


}

function addtodo(form){
  var task = {id: todolist.length,taaknaam: form.taskname.value, priority: form.priority.value,date: form.date.value, done: form.done.value}
  todolist.push(task);
  console.log(todolist[0]);
}

$('#addScnt').click(function(){
  scntDiv.append('<tr><td> todo: </td><td> prioriteit </td><td> afgewerkt?</td><td>deadline</td></tr>');
    i++;
    return false;
})


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
