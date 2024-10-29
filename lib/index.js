"use strict";
const nullableUser = {
    name: 'alice',
    age: null,
    address: {
        street: null,
        city: 'wonderland',
    },
    tags: [null, 'cap']
    // null values in age, address.street and tags[0]
    // email is not given
};
