var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', ()=>{
    it('should exist',()=>{
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each item', ()=>{
        var todos = [
            {
                id: 1,
                text: 'Doing Something'
            },
            {
                id: 2,
                text: 'Doing Something else'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(todos.length);
    });
});