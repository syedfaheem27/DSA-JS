// Bit manipulation

/*
Given an unsigned integer N, 
swap all odd bits with even bits. 
Every even position bit is swapped with the 
adjacent bit on the right side and every odd 
position bit is swapped with adjacent on the 
left side. Assume a 32 bit integer.
*/

//Method -1 (Inefficient one)

function swapBits(n) {
  let odd, even;
  let temp1, temp2;

  for (let i = 0; i <= 31; i = i + 2) {
    odd = 1 << i;
    even = 1 << (i + 1);

    temp1 = n & odd;
    temp2 = n & even;

    if ((temp1 > 0 && temp2 > 0) || (temp1 === 0 && temp2 === 0)) continue;

    n = n ^ odd;
    n = n ^ even;
  }

  console.log(n);
  return n;
}

// swapBits(23);

//Method-2 Efficient one
function swapBitsII(n) {
  let evenMask = 0xaaaaaaaa;
  let oddMask = 0x55555555;

  let evenPresNum = n & evenMask; //Preserving even bits;
  let oddPresNum = n & oddMask; //Preserving odd bits;

  let evenPresNumI = evenPresNum >> 1; //Right shifting bits at even places to odd places
  let oddPresNumI = oddPresNum << 1; //Left shifting bits at odd places to even places

  let finalRes = evenPresNumI | oddPresNumI;

  console.log(finalRes);
  return finalRes;
}

// swapBitsII(23);

///////////////////////////////////////////////////////

//Reverse the bits of a given 32-bit unsigned integer;

function reverseBits(n) {
  let res = 0;
  let lsv;

  for (let i = 0; i < 32; i++) {
    lsv = n & 1;
    res = res << 1;
    res = res | lsv;
    n = n >> 1;
  }

  console.log(res);
}

reverseBits(4);
