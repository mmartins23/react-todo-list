export default function todosReducer(todos, action) {

    switch (action.type) {
        case 'deleted': {
            if (confirm('Are you sure want to delete the to-do?')) {
                return todos.filter(todo => todo.id !== id);
            }
        }
    }