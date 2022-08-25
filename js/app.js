const todos = [
    {
        text: 'Fare la Spesa',
        done: false,
    },
    {
        text: 'Andare in palestra',
        done: true,
    },
    {
        text: 'Guardare l\'inter in TV',
        done: false,
    },
]


const app = new Vue({
    el: '#root',
    data: {
        todos: todos,
        classDefaultTodo: 'todo',
    },
    methods: {
        toggleIsDone(todo) {
            todo.done = !todo.done
        }
    },


})

