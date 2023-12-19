const fs = require("fs");
const yargs = require("yargs");

// node app.js --name=Adam --lastName=Mickiewicz

const params = yargs.argv;

const user = {
  name: params.name,
  lastName: params.lastName,
};

const serializeUser = JSON.stringify(user);

const file = "user.json";
fs.readFile(file, "utf-8", (error, readData) => {
  if (error) {
    console.log("file read error", error.message);
  } else {
    console.log(readData);
  }

  fs.writeFile(file, serializeUser, (error) => {
    if (error) {
      console.log("failed to write file", error.message);
    } else {
      console.log("user saved to file");
    }
  });
});
