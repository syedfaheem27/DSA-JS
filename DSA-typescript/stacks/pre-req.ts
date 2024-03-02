//Create a stack which always stores the
//numbers in ascending order lowest at the bottom
// and highest at the top

//Add - TC O(n) & SC O(n)
//Remove - TC O(1) & SC O(1)
class SortedStack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  add(el: number): this {
    if (this.stack[this.length - 1] < el || this.isEmpty) {
      this.stack.push(el);
      return this;
    }

    let temp_stack: number[] = [];

    while (!this.isEmpty && this.stack[this.length - 1] > el) {
      let num = this.stack.pop();

      if (num !== undefined) temp_stack.push(num);
      else break;
    }

    this.stack.push(el);

    while (temp_stack.length !== 0) {
      let num = temp_stack.pop();

      if (num !== undefined) this.stack.push(num);
    }

    return this;
  }

  remove(): number | undefined {
    if (this.isEmpty) {
      console.log("Can't remove elements from an empty stack");
      return;
    }

    let num = this.stack.pop();
    return num;
  }

  get isEmpty(): boolean {
    return this.stack.length === 0 ? true : false;
  }

  get length(): number {
    return this.stack.length;
  }
}

/*------------------------------_*/

//Given a stack of integers, sort it in ascending order using another temporary stack.

/*
Input : [34, 3, 31, 98, 92, 23]
Output : [3, 23, 31, 34, 92, 98]

Input : [3, 5, 1, 4, 2, 8]
Output : [1, 2, 3, 4, 5, 8] 
*/

function sortStack(stack: number[]): number[] {
  let n = stack.length;
  let temp_stack: number[] = [];

  while (stack.length !== 0) {
    let num = stack.pop();

    if (num !== undefined) {
      if (temp_stack.length === 0) {
        temp_stack.push(num);
        continue;
      }
      let count = 0;

      while (temp_stack[temp_stack.length - 1] > num) {
        let top_num = temp_stack.pop();

        if (top_num !== undefined) {
          stack.push(top_num);
          count++;
        }
      }

      temp_stack.push(num);

      while (count !== 0) {
        let new_num = stack.pop();

        if (new_num !== undefined) {
          temp_stack.push(new_num);
          count--;
        }
      }
    }
  }
  return temp_stack;
}

console.log(sortStack([34, 3, 31, 98, 92, 23]));
