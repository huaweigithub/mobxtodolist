import React, { Component } from 'react';
import { Row, Col, Card, Input, Button } from 'antd';
import 'antd/dist/antd.css';

import { observer } from 'mobx-react';
// @observer

class List extends Component {
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
                <Input allowClear  />
              </Col>
              <Button type="primary" onClick={store.changeNumber.bind(this)} >ADD LIST</Button>
            </Card>
          </Col>
          <span>{store.number}</span>
        </Row>
      </div>
    );
  }
}

export default List;