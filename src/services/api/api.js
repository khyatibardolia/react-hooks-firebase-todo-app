import firebase from "../firebase/config";

export const addTodos = (data) => {
    return firebase.database().ref('todos').push({data});
};

export const fetchTodos = () => {
    return firebase.database().ref('todos').once('value').then((snapshot) => {
        return snapshot.val();
    });
};

export const deleteTodos = (id) => {
    return firebase.database().ref(`todos/${id}`).remove();
};

