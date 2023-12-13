const { StackI } = require("./stack");

class MinStack extends StackI {
  constructor() {
    super();
    this.minEl = null;
  }

  _encodeMin(val, min) {
    return 2 * val - min;
  }

  push(x) {
    if (this.isEmpty()) {
      this.minEl = x;
      return super.push(x);
    } else {
      if (x > this.minEl) {
        return super.push(x);
      } else {
        let prevMin = this.minEl;
        this.minEl = x;
        return super.push(this._encodeMin(x, prevMin));
      }
    }
  }

  pop() {
    if (this.isEmpty()) return console.log("The stack is empty");

    if (this.size() === 1) {
      this.minEl = null;
      return super.pop();
    } else {
      if (this.peek() < this.minEl) {
        this.minEl = this._encodeMin(this.minEl, this.peek());
        return super.pop();
      } else return super.pop();
    }
  }

  get minElement() {
    return this.minEl;
  }
}

module.exports = MinStack;
