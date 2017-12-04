// --- Day 3: Spiral Memory ---

// You come across an experimental new kind of memory stored on an infinite two-dimensional grid.

// Each square on the grid is allocated in a spiral pattern starting at a location marked 1
// and then counting up while spiraling outward. For example, the first few squares are allocated like this:

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
// While this is very space-efficient (no squares are skipped), requested data must be carried
// back to square 1 (the location of the only access port for this memory system) by programs
// that can only move up, down, left, or right. They always take the shortest path:
// the Manhattan Distance between the location of the data and square 1.

// For example:

// Data from square 1 is carried 0 steps, since it's at the access port.
// Data from square 12 is carried 3 steps, such as: down, left, left.
// Data from square 23 is carried only 2 steps: up twice.
// Data from square 1024 must be carried 31 steps.
// How many steps are required to carry the data from the square identified
// in your puzzle input all the way to the access port?

// Your puzzle input is 289326.
function spiralMemory(input) {
  let steps = 1;
  const TWO = 2;
  const FOUR = 4;
  const SIX = 6;
  const EIGHT = 8;
  let twon = 2;
  let fourn = 4;
  let sixn = 6;
  let eightn = 8;
  let found = false;

  while (!found) {
    twon = twon + (8 * steps) + (TWO - 1);
    console.log(twon);
    if ((twon >= input) && (eightn < input)) {
      if ((input - eightn) <= (twon - input)) {
        steps += (input - eightn);
      } else {
        steps += (twon - input);
      }
      found = true;
      return steps + 1;
    }

    fourn = fourn + (8 * steps) + (FOUR - 1);
    console.log(fourn);
    if ((fourn >= input) && (twon < input)) {
      if ((input - twon) <= (fourn - input)) {
        steps += (input - twon);
      } else {
        steps += (fourn - input);
      }
      found = true;
      return steps + 1;
    }

    sixn = sixn + (8 * steps) + (SIX - 1);
    console.log(sixn);
    if ((sixn >= input) && (fourn < input)) {
      if ((input - fourn) <= (sixn - input)) {
        steps += (input - fourn);
      } else {
        steps += (sixn - input);
      }
      found = true;
      return steps + 1;
    }

    eightn = eightn + (8 * steps) + (EIGHT - 1);
    console.log(eightn);
    if ((eightn >= input) && (sixn < input)) {
      if ((input - sixn) <= (eightn - input)) {
        steps += (input - sixn);
      } else {
        steps += (eightn - input);
      }
      found = true;
      return steps + 1;
    }

    steps++;
  } // end while (!found)
}

// console.log(spiralMemory(57)); // 8 steps
// console.log(spiralMemory(1024)); // 31 steps
console.log(spiralMemory(289326)); // 419 steps