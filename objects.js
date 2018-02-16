var basicCatRecord = {
    name: 'Bernard',
    age: 12,
    breed: 'Maine Coon'
};

var catRecord = {
    basic: {
        name: 'Bernard',
        age: 12,
        breed: 'Maine Coon',
        sex: 'male' 
    },
    owner: {
        name: 'Mrs Jones',
        contact: {
            address: '55 streford road, manchester, M16 EGH',
            telephone: 0773421212
        },
        notes: 'Payment plan, prefers morning'         
    },
};

var anotherCatRecord = {
    basic: {
        name: 'Bernard',
        age: 12,
        breed: 'Maine Coon',
        sex: 'male' 
    },
    owner: null
};

// Traverse


// function traverse (record) {
//     for (var key in record) {
//         if (record[key] instanceof Object) traverse(record[key])
//         else console.log(record[key]);
//     }
// }

// traverse(catRecord);

// Search

function searchObj (record, term) {
    var found;
    for (var key in record) {
        if(typeof record[key] === 'string') {
            found = record[key].includes(term);            
        } else if (record[key] instanceof Object) {
           found = searchObj(record[key], term);           
        }
        if (found) return true;
    }
    return false;
}

module.exports = {
    searchObj
}