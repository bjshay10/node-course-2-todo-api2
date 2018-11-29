const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5bffffea7a9adb8422c3b85411';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(`Todos: ${todos}`);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(`Todos: ${todo}`);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log(`Id not found`);
//     }
//     console.log(`Todo by Id: ${todo}`)
// }).catch((e) => {console.log(e)});

// query users collection
// load in users mongoose model
// user.findbyid
// query works but no user
// query works user found
// print error object
var uid = '5bdb1ca128c594b814bf23ee';

if (!ObjectID.isValid(uid)) {
    console.log(`Id is not valid`);
}

User.findById(uid).then((user) => {
    if (!user) {
        return console.log(`Unable tof find user`);
    }
    console.log(`User: ${JSON.stringify(user, undefined, 2)}`);
}, (e) => {
    console.log(e);
});