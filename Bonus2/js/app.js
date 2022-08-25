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
        newToDo: '',
    },
    methods: {
        toggleIsDone(todo) {
            todo.done = !todo.done
        },
        addToDo(){
            this.newToDo = this.newToDo.trim()

            if (!this.newToDo) return

            this.todos.push({
                text: this.newToDo,
                done: false,
            })

            this.newToDo = ''
        },
        
    },


})


