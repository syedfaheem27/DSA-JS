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

// reverseBits(4);

///////////////////////////////////////////////
