import React, { Component } from 'react';
import './App.css';
import TodoItems from "./components/TodoItems";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []      
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);

  }


  addItem(e){
      if (this._inputElement.value !== ""){
          const newItem= {
              text: this._inputElement.value,
              key:Date.now()
          };
        this.setState((prevState) => {
              return{
                  items:prevState.items.concat(newItem)
              };
          });
      }


this._inputElement.value = "";
e.preventDefault();
console.log(this.state.items);
    }


deleteItem(key){
    console.log("key in delete item:" + key);
    const filteredItems=this.state.items.filter(function(item){
        return (item.key !== key);
})
    this.setState({
        items:filteredItems
    });
}
 
  render() {
    return (
        <div className="App">
        <div className="List">
      <div className="header">
      <h1> THE </h1>
      <h1 id="under"> HUSTLE ASSISTANT</h1> 
      <small> THE MINIMALISTS TO-DO LIST  </small>
        <form onSubmit={this.addItem}>
          <input placeholder="GET SH*T DONE" ref={(a)=>this._inputElement= a} >
          </input>
          <button type="submit"> MARK IT.  </button> 
          <TodoItems entries={this.state.items}
             delete={this.deleteItem}></TodoItems>
             </form>
        </div>
        </div>
        </div>
    );
  }
}