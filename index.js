//prompt message at the beginning
let person = prompt("Hello! before we start, may I know your name, please?");

//variables
let welcomeTitle = document.querySelector('h1');
let addToDoButton = document.querySelector('#addToDo');
let toDoContainer= document.querySelector('#todo-container');
let inputField = document.querySelector('#input-field');





welcomeTitle.textContent = `Hello ${person}, what do you want to put in your shopping list today?`;

welcomeTitle.style.color = "#FFFFFF";
welcomeTitle.style.padding = "0px 10px 0px 10px";
welcomeTitle.style.fontSize = "16px";





// create button
inputField.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        if(inputField.value === ""){
        
            alert('please type something')

        }else if(inputField.value.length >= 25){
        
            alert('Text is too long, not more than 25 characters allowed')
        
        }else{

    var paragraph = document.createElement('p');
    var deleteItem = document.createElement('button');

    var checkedItem = document.createElement('button');
}
}
    //add innertext to paragraph
    paragraph.innerHTML = inputField.value;





    //adding value to delete button
    deleteItem.innerHTML = '<i class="fas fa-trash"></i>';


    //adding value to checked button
    checkedItem.innerHTML = '<i class="fas fa-check"></i>';    
    checkedItem.classList.add('checked');




    //append element
    toDoContainer.appendChild(paragraph);
    paragraph.appendChild(deleteItem);
    paragraph.appendChild(checkedItem);

    //resetting the input field after adding the element to the list
    inputField.value = "";

    //deleting the element after clicking one time on
      
    
    deleteItem.addEventListener('click', () => {
        paragraph.classList.add('fall');
        paragraph.addEventListener('transitionend', function(){
            paragraph.remove();
        })
        }
    )

    checkedItem.addEventListener('click', () => {
        paragraph.classList.toggle('checked-item');
        checkedItem.classList.toggle('checked-icon');

    })

    paragraph.addEventListener('click', ()=> {
        paragraph.contentEditable;
    })
    
;}) 