// --- Day 4: High-Entropy Passphrases ---

// --- Part Two ---

// For added security, yet another system policy has been put in place. Now, a
// valid passphrase must contain no two words that are anagrams of each other
// - that is, a passphrase is invalid if any word's letters can be rearranged
// to form any other word in the passphrase.

// For example:

// abcde fghij is a valid passphrase.
// abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
// a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
// iiii oiii ooii oooi oooo is valid.
// oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.
// Under this new system policy, how many passphrases are valid?
const readline = require('readline');
const fs = require('fs');
let total = 0;

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
  console.log(tmp);
  tmp.forEach((elem, idx, arr) => {
    arr[idx] = elem.split('').sort().join();
  });
  let counts = {};
  let count = 0;
  tmp.forEach((x) => {
    // console.log(typeof x);
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] > count) count = counts[x];
    // console.log(counts);
  });
  // let count = 0;
  // tmp.forEach((x) => {
  //   if (counts[x] > count) count = counts[x];
  // });
  if (count === 1) total++;
  console.log(total); // 265 is correct answer
});
console.log(total);
