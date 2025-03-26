let id = 1;

let todos = [
    {
        id: id++,
        name: 'test1',
    },
    {
        id: id++,
        name: 'test2',
    }
];

console.log(todos);

todos = todos.filter(todo => todo.id !== 1);

console.log(todos);