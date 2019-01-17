const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove().then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5c40b3448767652d3e5dcdb4'}).then((todo) => {

// });

Todo.findByIdAndRemove('5c40b2e98767652d3e5dcda6').then((todo) => {
    console.log(todo);
});