var array = array();


function loginuser(form){
  var un = document.logininfo.usr.value;
  var pw = document.logininfo.pword.value;

  console.log(un);
  console.log(pw);
  window.location="todolist.html";


}

function addtodo(naam, prio, datum, af){
  var task = {name: naam, priority: prio, date: datum, done:af}
  array.push(task);
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
