const fs = require('fs');
const { stringify } = require('csv-stringify');


const allFileContents = fs.readFileSync('./input.txt', 'utf8');
const data = []
let row = {}
allFileContents.split(/\r?\n/).forEach(line => {
  // console log the line for testing/debugging
  //console.log(line)

  // do something with the line, like if match add substring to row
  switch (true) {
    // case that starts a new row/record
    case line.startsWith('CONTACT'): { 
      // if row has data, push it to the data array
      if (Object.keys(row).length > 0) {
        data.push(row)
      }
      row = {}
      break;
    }
    // case for a name field
    case line.startsWith('NAME: '): {
      row.name = line.substring(6)
      break;
    }
    // case for a phone field
    case line.startsWith('PHONE: '): {
      row.phone = line.substring(7)
      break;
    }
    default:
      break;
  }
});

// console log the data for testing/debugging
//console.log(JSON.stringify(data))

// write array to csv file
stringify(
  data, {
    header: true,
    objectMode: true,
    columns: ['name','phone'],
    quoted: true,
    delimiter: ','
  },
  (err, output) => {
    if (err) throw err;
    fs.writeFile('output.csv', output, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  }
)

/** README
 * Assuming you already have npm and Node.JS installed,
 * Open command prompt in this directory and run:
 *  npm install
 *  npm start
 */