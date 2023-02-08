let count = 1;

const handleEnter = (ele) => {
    if(event.key === 'Enter'){
        console.log(ele.value);
        var todoName = ele.value; 

        if(todoName != ''){
        addTodo(todoName);
        }
        else{
            alert('Enter the todo-name');
            exit;
        }
        ele.value = '';
    }
}

const addTodo = (todoName) =>{
    let todoList = document.getElementsByClassName('unchecked')[0];
    todoList.insertAdjacentHTML('beforeend', '<div class="todo-item todo-item-uncheck"><div class="left-side"><input type="checkbox" class="checkbox" onclick="checkedFunction(this)">    <div class="todo-name-uncheck"></div></div><div class="right-side"><i class="fa-solid fa-star"></i><i class="fa-solid fa-bookmark"></i><i class="fa-solid fa-circle-xmark" onclick="deleteTodo(this)"></i></div></div>');

    var todoNameDivs = document.getElementsByClassName('todo-name-uncheck');
    var len = todoNameDivs.length;
    console.log(len);
    var todoNameDiv = todoNameDivs[len-1];
    todoNameDiv.innerText = todoName;
    let idName = 'todo' + count;
    count += 1;
    todoNameDiv.previousElementSibling.setAttribute('id', idName );

    console.log(todoNameDiv.parentNode.parentNode);
    // todoNameDiv.parentNode.parentElement.classList.add("unchecked");
    
}

const deleteTodo = (ele) => {   
    let nodeToDelete = ele.parentNode.parentNode;
    nodeToDelete.remove();
}

const checkedFunction = (ele) =>{
    console.log(ele);
    console.log(ele.checked);
    if(ele.checked == true){
    ele.nextElementSibling.style.textDecoration =  "line-through";
    ele.nextElementSibling.style.textDecorationThickness = "3px";
    ele.nextElementSibling.style.textDecorationColor =  "grey";
    ele.nextElementSibling.style.color =  "#395B64";
    ele.nextElementSibling.style.opacity =  "0.6";
    ele.style.opacity = "0.6";
    toggleList(ele);
    }
    else{
        uncheckedFunction(ele);
    ele.nextElementSibling.style.textDecoration =  "none";
    ele.nextElementSibling.style.color =  "black";
    ele.nextElementSibling.style.opacity =  "1";
    ele.style.opacity = "1";
    }
    

}

const uncheckedFunction = (ele) =>{
    if(ele.checked == false){
        addTodo(ele.nextElementSibling.innerText);
        ele.parentNode.parentNode.remove();
    }

} 


const toggleList = (ele) => {
    let todoName = ele.nextElementSibling.innerText;
    console.log(todoName);
    console.log(ele.id);
    let todoCheckedList = document.getElementsByClassName('checked')[0];
    // let checkedParentNode = ele.parentNode.parentNode;
    todoCheckedList.insertAdjacentHTML('beforeend', '<div class="todo-item todo-item-check"><div class="left-side"><input type="checkbox" class="checkbox" onclick="checkedFunction(this)">    <div class="todo-name"></div></div><div class="right-side"><i class="fa-solid fa-star"></i><i class="fa-solid fa-bookmark"></i><i class="fa-solid fa-circle-xmark" onclick="deleteTodo(this)"></i></div></div>');

     
    var todoNameDivs = document.getElementsByClassName('todo-name');
    var len = todoNameDivs.length;
    console.log(len);
    var todoNameDiv = todoNameDivs[len-1];
    todoNameDiv.innerText = todoName;

    todoNameDiv.previousElementSibling.checked = 'true';
    todoNameDiv.parentNode.parentNode.style.textDecoration =  "line-through";
    todoNameDiv.parentNode.parentNode.style.textDecorationThickness = "3px";
    todoNameDiv.parentNode.parentNode.style.textDecorationColor =  "grey";
    todoNameDiv.parentNode.parentNode.style.color =  "#395B64";
    todoNameDiv.parentNode.parentNode.style.opacity =  "0.6";
    todoNameDiv.style.opacity = "0.6";


    ele.parentNode.parentNode.remove();
}


const reset = () =>{
    document.location.reload();
}



