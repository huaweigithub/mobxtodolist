import React, { Component } from 'react';
import { Row, Col, Card, Input, Button, List, Icon } from 'antd';
import 'antd/dist/antd.css';

import { observer } from 'mobx-react';

@observer
class ListApp extends Component {
  constructor(props){
    super(props);
    this.addList = this.addList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delTodoList = this.delTodoList.bind(this);
  }

  addList(){
    const {store} = this.props;
    if(store.list == ""){
      store.value_null = true
    }
    else{
      store.addToDoList(store.list);
      store.handleChangeList("");
      store.value_null = false
    }
  }

  handleChange(evt){
    evt.preventDefault();
    const { value } = evt.target;
    const {store} = this.props;
    store.handleChangeList(value);
  }

  delTodoList(index){
    const {store} = this.props;
    store.delToDoList(index)
  }

  render() {
    const {store} = this.props;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col>
            <Card
              style={{ width: 600 }}
            >
              <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                <Input allowClear value={store.list} onChange={this.handleChange} className={ store.value_null ? "null_border" : ""} placeholder={ store.value_null ? "不能为空.." : '输入要添加的日程...'} />
              </Col>
              <Button type="primary" onClick={this.addList} >ADD LIST</Button>
            </Card>
          </Col>
        </Row>
        <List
          className="todolist-item"
          size="small"
          header={<h3>To Do List</h3>}
          bordered
          split
          dataSource={store.todolist}
          renderItem={(item,index) => (
          <List.Item  className={this.key}>
            <List.Item.Meta
              title={item}
              style={{textAlign:"left"}}
            />
            <Button key={index} type="primary" shape="circle" icon="close" onClick={ () => this.delTodoList(index) } />
          </List.Item>
          )}
        >
        </List>
      </div>
    );
  }
}

export default ListApp;