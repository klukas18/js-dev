// 1. ~~~~~~~~~~~~

function uniq(tab) {

let result = []

for (let i = 0; i < tab.length; i++) {
    if (result.indexOf(tab[i]) === -1) {
        result.push(tab[i])
    }
}
    return result;
}

// 2. ~~~~~~~~~~~~~~

function diff(tab1, tab2) {
    let result = [];
    tab1.forEach(function(element) {
    if (tab2.indexOf(element) === -1) {
        result.push(element);
    }
})
    return result;
}

module.exports = { uniq: uniq, diff: diff }