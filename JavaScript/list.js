var options = {
    valueNames: [ 'name', 'born' ],
    // Since there are no elements in the list, this will be used as template.
    item: '<li><h3 class="name"></h3><p class="born"></p></li>'
};

var values = require('../Data/Data.json');

var userList = new List('users', options, values);

userList.add({
    name: 'Gustaf Lindqvist',
    born: 1983
});