var list = document.getElementById("list");

function add(){
    var item = document.getElementById("item");
    var li = document.createElement("li");
   var liText = document.createTextNode(item.value);
   li.appendChild(liText);
   list.appendChild(li);
   item.value = "";

   // Create DELETE button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    delBtn.setAttribute("onclick","delItem(this)");

    // Create EDIT button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick","editItem(this)");
}

function delItem(e){
    e.parentNode.remove();
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val);
    e.parentNode.firstChild.nodeValue = editValue;
}