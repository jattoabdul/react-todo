var React = require('react');
var TodoList = require('TodoList');
var AddTodos = require('AddTodos');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },{
                    id: 2,
                    text: 'Clean the yard'
                },{
                    id: 3,
                    text: 'My third Todo Item'
                },{
                    id: 4,
                    text: 'My last Todo Item'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert('new todo: ' + text);
    },
    render: function () {
        var {todos} = this.state;

        return(
          <div>
              <TodoList todos={todos}/>
              <AddTodos onAddTodos={this.handleAddTodo(text)}/>
          </div>
        );
    }
});

module.exports = TodoApp;