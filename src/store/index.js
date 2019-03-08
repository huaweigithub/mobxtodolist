import React, { Component } from 'react';
import { observable } from 'mobx';

class TodoListStore extends Component {
  @observable number = 0;

  changeNumber(){
    this.number ++;
  }

}

export default TodoListStore;