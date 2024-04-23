//MEDIUM: Longest palindromic Substring

//Brute force - for each substring,check if it's a palindrome
//If yes, check length and update the max length substring if necessary
//TC O(N^3).

//Efficient Approach
//Expanding from the middle - TC O(N^2);

function longestPalindromicStr(s) {
  let start = 0,
    end = 0;
  let max_len = end - start + 1;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    //checking for even length
    let l = i,
      r = i + 1;

    while (l >= 0 && r < n && s[l] === s[r]) {
      if (r - l + 1 > max_len) {
        (start = l), (end = r);
        max_len = r - l + 1;
      }

      l--;
      r++;
    }

    //Checking for odd length
    (l = i - 1), (r = i + 1);

    while (l >= 0 && r < n && s[l] === s[r]) {
      if (r - l + 1 > max_len) {
        (start = l), (end = r);
        max_len = r - l + 1;
      }

      l--;
      r++;
    }
  }

  return s.slice(start, end + 1);
}
