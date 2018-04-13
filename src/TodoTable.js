import React, { Component } from 'react';
import './App.css';
import App from './App';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    } from 'material-ui/Table';

class TodoTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const columns = [{
            Header: 'Date',
            accessor: 'date' // String-based value accessors!
            }, {
            Header: 'Description',
            accessor: 'description',
            }]

        return (
        // <div className="App">
        // <table className='displayTable'><tbody>
        //     <tr><th className='displayTable'>Date</th>
        //     <th className='displayTable'>Description</th></tr> 
        //     {this.props.todos.map((item, i) =>            
        //     <tr key={i}>
        //         <td className='displayTable'>{item.date}</td>
        //         <td className='displayTable'>{item.description}</td> 
        //         <td className='displayTable'><button onClick={() => this.delete(i)}>Delete</button></td>                
        //     </tr>
        //     )}
        //   </tbody></table>
        // </div>

        <div className="App">
        {/* <ReactTable data={this.props.todos}
        columns={columns} sortable={true}
        defaultPageSize={10} /> */}

        <Table selectable={false}>
            <TableHeader displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {this.props.todos.map((item, index) =>
                    <TableRow key={index}>
                    <TableRowColumn>{item.date}</TableRowColumn>
                    <TableRowColumn>{item.description}</TableRowColumn>
                    <TableRowColumn><RaisedButton onClick={() => this.props.delete(index)} primary={true} label='Delete'/></TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </div>
        );
    }
}

export default TodoTable;