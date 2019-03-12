import { observable, action } from 'mobx';


class TodoListStore {
  @observable number = 0;
  @observable list = "";
  @observable value_null= false;
  @observable todolist = [];

  @action handleChangeList(e){
    this.list = e;
  }

  @action addToDoList(e){
    const todolist = this.todolist;
    const _todoList = [...todolist];
    _todoList.push(e);
    this.todolist = _todoList;
  }

  @action delToDoList(index){
    const todolist = this.todolist;
    const _todoList = [...todolist];
    _todoList.splice(index,1);
    this.todolist = _todoList;
  }
}

const todoListStore = new TodoListStore();

export default todoListStore;