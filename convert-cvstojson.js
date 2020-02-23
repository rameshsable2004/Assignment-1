const fs = require('fs');
const csv = require('csv-parser');
var arrayJSON=[];
fs.createReadStream('customer-data.csv').pipe(csv()).on('data', (row) =>
 { arrayJSON.push(row);}).on('end', () => {
    fs.writeFileSync('customer-data.json', JSON.stringify(arrayJSON));
    console.log('Exported csv file to customer-data.json.');
  });
  