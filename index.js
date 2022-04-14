const data1 = [{
        "age": 3,
        "name": "Curtis Greene",
        "email": "curtis.greene@zaj.ca",
    },
    {
        "age": 23,
        "name": "Nikki Lowe",
        "email": "nikki.lowe@darwinium.tv",
    },
    {
        "age": 39,
        "name": "Barr Copeland",
        "email": "barr.copeland@nipaz.me",
    },
];
const data2 = [{
        "age": 29,
        "name": "Calhoun Woodward",
        "email": "calhoun.woodward@medmex.info",
    },
    {
        "age": 21,
        "name": "Leta Lee",
        "email": "leta.lee@qnekt.com",
    },
    {
        "age": 40,
        "name": "James Dinh",
        "email": "j.dink@erw.com",
    }
];

//

var _ = require('lodash');


const task1 = _.findIndex(data1, { "age": 23 });
const task2 = _.concat(data1, data2);
const task3 = _.omit(data1[0], ["age"]);

//superTask (???)

const user = data2[0];

const newUser = Object.fromEntries(Object.entries(user).filter(arr => arr[0] !== 'age'))
console.log(newUser)