//Using in built js sort function and it's comparartor callback

function sortArrayAbsolute(nums) {
  nums.sort((a, b) => {
    let _a = Math.abs(a);
    let _b = Math.abs(b);
    return _a - _b;
  });

  return nums;
}
