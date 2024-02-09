//4. Reverse each word in a string
// Input: S = "i.like.this.program.very.much";
// Output: i.ekil.siht.margorp.yrev.hcum;

//some-test cases are failing
//my......name.....is...faheem - ym.....eman....si..meehaf

function reverseWordsI(s) {
  //code here
  let tempStr = "";
  let resStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ".") {
      tempStr += s[i];
      if (!s[i - 1] || s[i - 1] === ".") {
        resStr = s[i - 1] === "." ? "." + tempStr + resStr : tempStr + resStr;
        tempStr = "";
      }
    }
  }
  console.log(resStr);
}

reverseWords("i.like.this.program.very.much");
// reverseWords("my.name.is");
