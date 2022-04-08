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
const task3 = _.pick(data1[0], ["name", "email"]);

//superTask (???)

const user = data2[0];

const newUser = {
    "age": user.age,
    "name": user.name
};