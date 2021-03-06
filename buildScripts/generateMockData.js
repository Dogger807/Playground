
/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

var jsf = require('json-schema-faker');
var mockDataSchema = require('./mockDataSchema');
var fs = require('fs');
import chalk from 'chalk';


let mySchema = jsf(mockDataSchema);

delete mySchema.id;

var json = JSON.stringify(mySchema);
json = json.substring(10)
json = json.slice(0,-1);


fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(err);// eslint-disable-line no-console
  } else {
    console.log(chalk.green("Mock data generated."));// eslint-disable-line no-console
  }
});
