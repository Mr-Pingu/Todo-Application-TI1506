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
        tr.append("<td>" + '<button name="edit_but' + i + '"></button></td>');
        tr.append("<td>" + '<button name="remove_but' + i + '"></button></td>');
        $('table').append(tr);
        }
    });
});






