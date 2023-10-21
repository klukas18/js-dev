// Plik z osobnym modułem

const userName = "Krzysztof";
const userSurname = "Łukaszewicz";

// module.exports.userNameExported = userName
// module.exports.userSurnameExported = userSurname


module.exports = {
    userNameExported: userName,
    userSurnameExported: userSurname,
}