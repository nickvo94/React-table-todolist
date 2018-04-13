import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: {}, todos: [], object: {}}
  }

  componentDidMount() {
    this.setState({
      todos: [
        {description: "buy coffee", date: "16.04.2018"},
        {description: "buy lamp", date: "17.04.2018"},
        {description: "fix chair", date: "18.04.2018"} 
      ]
    })

  }

  inputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  dateChanged = (event,date) => {
    this.setState({date: date});
  }

  addToDo = (event) => {
    event.preventDefault();
    console.log(this.state.date);
    const strDate = this.state.date.getDate() + "." +
                    (this.state.date.getMonth()+1) + "." +
                    this.state.date.getFullYear();
    const newTodo = {description: this.state.description, date: strDate};
    this.setState({
      //object: {...this.state.object, description: this.state.description, date: this.state.date},
      todos: [...this.state.todos, newTodo]
    });
    console.log(this.state.todos);
  }

  delete = (index) => {
    this.setState({
      todos: this.state.todos.filter((todos,i) => i !== index),
    })
    console.log(this.state.todos);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div> 
        {/* <div>                
          <form onSubmit={this.addToDo} >
            <table className='inputTable'><caption>Add To Do:</caption><tbody>            
              <tr>              
              <td><p> Date: </p></td>   
              <td><input type='text' onChange={this.inputChanged} value={this.state.date} name='date'/></td>
              <td><p>Description: </p></td>          
              <td><input type='text' onChange={this.inputChanged} value={this.state.description} name='description'/></td>              
              <td><input type='submit' value='Add' /></td>               
              </tr>
              </tbody></table>
          </form>
        </div>
        <div>
          <table className='displayTable'><tbody>
            <tr><th className='displayTable'>Date</th>
            <th className='displayTable'>Description</th></tr> 
            {this.state.todos.map((item, i) =>            
            <tr key={i}>
                <td className='displayTable'>{item.date}</td>
                <td className='displayTable'>{item.description}</td> 
                <td className='displayTable'><button onClick={() => this.delete(i)}>Delete</button></td>                
            </tr>
            )}
          </tbody></table>
        </div> */}
        <div> 
            <DatePicker hintText='Duedate' onChange={this.dateChanged} value={this.state.date} name='date'/>      
            <TextField hintText='description' onChange={this.inputChanged} value={this.state.description} name='description'/>
            <br></br>             
            <RaisedButton onClick={this.addToDo} primary={true} label='Add'/>    
        </div>
        <TodoTable todos={this.state.todos} delete={this.delete.bind(this)}/>
        
      </div>
    );
  }
}

export default App;
