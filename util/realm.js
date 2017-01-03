'use strict';

var Realm = require('realm');

let UserSchema = {
    name : 'User',
    properties : {
        name : 'string',
        email : 'string',
        tel : 'string',
        date : 'date'
    }
};

var UserRealm = new Realm({
    path : 'user.realm',
    schema : [UserSchema]
});

module.exports = {
    UserRealm : UserRealm
};