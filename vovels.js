// find the highest repeated vowel in a string with
//
function findHighestRepeatedVowel(str) {
  let vowels = "aeiou";
  letult = "";

  if (!str.match()) {
    return "No vowels found in the string.";
  }
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      let count = (str.match(new RegExp(str[i], "gi")) || []).length;
      if (count > ult.length) {
        ult = str[i];
      }
    }
  }
}
