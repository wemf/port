import {
    qs,
    onTouch,
    onSubmit
} from './utilities.js';

import Todos from './toDos.js';

const TODO_List = new Todos(qs('.TODO__List')[0], "TODO_List");
TODO_List.listTodos();

onSubmit('.TODO__Form', TODO_List.addTodo.bind(TODO_List));
onTouch('.Filter__Radio', TODO_List.filterTodos.bind(TODO_List));

function addListeners() {
    onTouch(`.Item__Checkbox`, TODO_List.completeTodo.bind(TODO_List));
    onTouch('.Item__Remove', TODO_List.removeTodo.bind(TODO_List));
}

export {
    addListeners
}