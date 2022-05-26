import { readFromLS, writeToLS } from './ls.js';
import { addListeners } from './main.js';
import { qs } from './utilities.js';

class Todos {
    /**
     * @param {string} storeKey
     * @param {element} listElem 
     */
    constructor(listElem, storeKey) {
        this.listElem = listElem;
        this.storeKey = storeKey;
    }

    addTodo(e) {
        e.preventDefault();
        saveTodo(qs('.Input')[0].value, this.storeKey);
        this.listTodos();
        qs('.Input')[0].value = "";
        this.filterTodos();
    }

    listTodos(list) {
        if (!list) {
            list = getTodos(this.storeKey) || [];
        }
        renderTodoList(list, this.listElem);
        addListeners();
    }

    completeTodo() {
        let itemIndex = null;
        let itemID = event.target.id.substring('checkbox'.length);
        todoList = getTodos(this.storeKey)
        todoList.forEach(objectItem => {
            if (String(objectItem.id) == itemID) {
                itemIndex = todoList.indexOf(objectItem)
            }
        });
        todoList[itemIndex].completed = !todoList[itemIndex].completed
        writeToLS(this.storeKey, todoList);
        this.filterTodos()
    }

    removeTodo() {
        let itemIndex = null;
        todoList = getTodos(this.storeKey)
        todoList.forEach(objectItem => {
            if (String(objectItem.id) == event.target.id) {
                itemIndex = todoList.indexOf(objectItem)
            }
        });
        todoList.splice(itemIndex, 1)
        writeToLS(this.storeKey, todoList);
        this.filterTodos()
    }

    filterTodos() {
        // Find radio checked value
        let filterValue = Array.from(qs('.Filter__Radio')).find(radio => radio.checked).value;
        let list = getTodos(this.storeKey)
        switch (filterValue) {
            case "Active":
                list = list.filter(items => !items.completed)
                break;
            case "Completed":
                list = list.filter(items => items.completed)
                break;
            case null:
                list = [];
                break;
        }
        this.listTodos(list)
    }
}

let todoList = [];

/** build a todo object, add it to the todoList, and save the new list to local storage.
 * @param {string} key The key under which the value is stored under in LS 
 * @param {string} task The text of the task to be saved.
 */
function saveTodo(task, key) {
    if (task !== "" && task !== undefined) {
        let bool = Boolean(false);
        todoList = getTodos(key)
        if (todoList === null) {
            todoList = [];
        }
        let taskItem = {
            id: Date.now(),
            content: task,
            completed: bool
        };
        todoList.push(taskItem);
        writeToLS(key, todoList);
    }
}

/**
 * check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param  {string} key The key under which the value is stored under in LS
 * @return {array}     The value as an array of objects
 */
function getTodos(key) {
    todoList = readFromLS(key);
    return todoList;
}

/** 
 * foreach todo in list, build a li element for the todo, and append it to element
 * @param {array} list The list of tasks to render to HTML 
 * @param {element} element The DOM element to insert our list elements into.
 */
function renderTodoList(list, element) {
    element.innerHTML = "";
    let counter = 0
    list.forEach(todo => {
        let status = "";
        if (todo.completed) {
            status = "checked"
        }
        const item = document.createElement("li");
        item.className = "List__Item";
        item.innerHTML = `
            <label for="checkbox${todo.id}" class="Item__Label ${status === 'checked' ? 'Item__Label--checked' : ''}">
                <input type="checkbox" id="checkbox${todo.id}" class="Item__Checkbox" ${status}/>
                ${todo.content}
            </label>
            <button type="button" id="${todo.id}" class="Item__Remove Button Button--danger">X</button>
        `
        element.appendChild(item);
        counter++
    })
    qs('.Filters__Count')[0].innerHTML = `${counter} tasks left`
}

export default Todos