
const fileArray = process.argv.slice(2);
const fs = require('fs');

// let result = "hello this is the FINAL";
for (var i = 0; i < fileArray.length; i++) {

  try {
    const arr = [];
    const result = 'hello this is the FINAL';

    fs.readFile(fileArray[i], 'utf-8',
      (err, data) => {
        if (err) { console.log(err); } else {
          console.log(arr.length);
          arr.push(data);
          console.log(arr);
        // result+=JSON.parse(data);
        // console.log(result)
        // console.log(data);
        }
      });
    console.log(result);

  } catch (error) {
    console.error('there was an error:', error.message);
  }
  // console.log(result);

}

// console.log('x is ',x);
// console.log(result);
