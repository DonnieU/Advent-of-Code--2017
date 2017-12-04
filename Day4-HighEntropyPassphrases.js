// --- Day 4: High-Entropy Passphrases ---

// A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.

// To ensure security, a valid passphrase must contain no duplicate words.

// For example:

// aa bb cc dd ee is valid.
// aa bb cc dd aa is not valid - the word aa appears more than once.
// aa bb cc dd aaa is valid - aa and aaa count as different words.
// The system's full passphrase list is available as your puzzle input. How many passphrases are valid?
const readline = require('readline');
const fs = require('fs');
const total = [0];

// fs.readFile('/home/biff/AdventOfCode-2017/Day4-input.txt', 'utf8', (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
// });

const rl = readline.createInterface({
  input: fs.createReadStream('/home/biff/AdventOfCode-2017/Day4-input.txt')
});

rl.on('line', (line) => {
  // console.log('Line from file:', line);
  let tmp = line.split(' ');
  // console.log(tmp);
  let counts = {};
  let count = 0;
  tmp.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] > count) count = counts[x];
    // console.log(counts);
  });
  // let count = 0;
  // tmp.forEach((x) => {
  //   if (counts[x] > count) count = counts[x];
  // });
  if (count === 1) total[0]++;
  console.log(total); // 383 is correct answer
});
console.log(total);
