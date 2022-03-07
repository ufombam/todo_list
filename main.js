//adding a close button to every list item
let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("button");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}
//code above for static elements - you can remove it and also remove the corresponding HTML
//======================================================================================


//create Element on mouse click
const createEl = () => {
    let my_Input = document.getElementById("input");
    let fieldValue = my_Input.value;
    let my_list = document.getElementById('ul');
    let new_Element = document.createElement('li');
    let text = document.createTextNode(fieldValue);
    new_Element.appendChild(text);
    if (!fieldValue) {
        alert('The field cannot be empty')
    } else {
        my_list.appendChild(new_Element);
        my_Input.value = "";
    }
    let span = document.createElement("button");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    new_Element.appendChild(span);

    //close an element once clicked on close button
    let close = document.getElementsByClassName("close");
    let i;
        for (i = 0; i < close.length; i++) {   
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// create element on key press (enter)
const createElk = (e) => {
    if (e.keyCode === 13) {
        createEl();
    }
}
const my_Input = document.getElementById("input");
my_Input.addEventListener('keyup', createElk);


// // Cross any item done when clicked
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)


