function uniq(tab) {

let result = []

for (let i = 0; i < tab.length; i++) {
    if (result.indexOf(tab[i]) === -1) {
        result.push(tab[i])
    }
}
    return result;
}

module.exports = { uniq: uniq }