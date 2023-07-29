const todoArray = [];

const addTodo = input => {
    todoArray.push({input,done:false});
}

const deleteTodo = index => {
    todoArray.splice(index, 1);
}

const markAsDone = index => {
    todoArray[+index].done = true
}

const getAllTodo = () => {
    return todoArray;
}

module.exports = {
    addTodo,
    deleteTodo,
    getAllTodo,
    markAsDone
}