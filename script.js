var addToDoButton = document.getElementById('addToDo');
var toDocontainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function () {
    if (inputField.value != "") {
        var paragraph =document.createElement('p')
    }
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraphe_style')

    toDocontainer.appendChild(paragraph);

    inputField.value = "";

    paragraph.addEventListener('click',function() {
        paragraph.classList.add('paragraph_click')
        paragraph.addEventListener('dblclick',function() {
            toDocontainer.removeChild(paragraph);
        })
    })
}
