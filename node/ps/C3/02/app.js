const fs = require("fs");
const { serialize } = require("v8");
const yargs = require("yargs");

// node app.js --name=Adam --lastName=Mickiewicz

const params = yargs.argv;

const user = {
  name: params.name,
  lastName: params.lastName,
};

const serializeUser = JSON.stringify(user);

// sync version
// fs.writeFileSync("user.json", serializeUser);
// console.log("user saved to file");

fs.writeFile("user.json", serializeUser, (error) => {
  if (error) {
    console.log("failed to write file", error.message);
  } else {
    console.log("user saved to file");
  }
});
