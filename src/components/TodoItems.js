// import React from 'react';
import React,{ Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component  {
 constructor(props){
   super(props);
   this.createTasks=this.createTasks.bind(this);
 }
 
  createTasks(item){
    return  <li key={item.key}>{item.text}<a id="close" onClick={() => this.delete(item.key)}>X </a></li>
  }
 delete(key){
   this.props.delete(key);
   console.log("key value" + key);
 }
  render(){
    const todoentries=this.props.entries;
    const listItems = todoentries.map(this.createTasks);
    // const removeButton=todoentries.pop(this.createTasks);
    return(
      <FlipMove duration={250} easing="ease-out">
      {listItems}
      </FlipMove>
    );
  }
}
export default TodoItems;