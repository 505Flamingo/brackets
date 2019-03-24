module.exports = function check(str, bracketsConfig) {
  let bracketsStorage = [];
  let openBrackets = ['(','[','{','|','1','3','5','7','8'];
  let closeBrackets = [')',']','}','|','2','4','6','7','8'];
  for (i = 0; i < str.length; i++ ) {
    if (openBrackets.includes(str[i])) {
    bracketsStorage.push(str[i]);    
    } 
    if (closeBrackets.includes(str[i]) && bracketsStorage.length !== 0) {
      if (closeBrackets.indexOf(str[i]) == openBrackets.indexOf(bracketsStorage.pop()) ) {
        if (bracketsStorage.length === 0) {
          return true;
        } 
      } else {
        return false;
      }
      } else {
        return false;
      }
    }
}