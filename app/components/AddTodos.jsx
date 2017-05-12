var React = require('react');

var AddTodos = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();

        var todoItem = this.refs.todo.value;

        if (todoItem.length > 0){
            this.refs.todo.value = '';
            this.props.handleAddTodo(todoItem);
        }

    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="todo" placeholder="Enter todo text item"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodos;