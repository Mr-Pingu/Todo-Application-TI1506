$(document).ready(function(){

    $.getJSON("http://localhost:3000/todos",function (data) {
    console.log(data);
    });



    $.getJSON("http://localhost:3000/todos",function (todos) {
    var tr;
    for (var i = 0; i < todos.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + todos[i].task + "</td>");
        tr.append("<td>" + todos[i].prio + "</td>");
        tr.append("<td>" + todos[i].date + "</td>");
        tr.append("<td>" + todos[i].done + "</td>");
        tr.append("<td>" + '<button id="edit_but' + i + '"></button></td>');
        tr.append("<td>" + '<button data-id=' +i+ ' id="remove_but' + i + '"></button></td>');
        $('table').append(tr);
        }
    });


    // bij Submit de todo toevoegen met de data uit de velden.
    document.getElementById('add_submit').addEventListener("click", function(){

      var task = {
        task: document.getElementById('add_taskname').value,
  			prio: document.getElementById('add_priority').value,
  			date: document.getElementById('add_date').value,
  			done: document.getElementById('add_done').value
  		};
      $.get("http://localhost:3000/addtodo", task);
    })

    document.getElementById('remove_but0').addEventListener("click", function(){
      document.getElementById('remove_but0').data-id = i;
      $.get("http://localhost:3000/removetodo", task);
    })







});
