function capitalizeFirstLetter(text) {
    if (!text || text.length === 0) {
      return text;
    }
    const firstChar = text.charAt(0).toUpperCase();
    const restOfString = text.slice(1);
    return firstChar + restOfString;
  }
  
  function truncateText(text, maxLength) {
    if (!text || text.length === 0) {
      return text;
    }
    if (text.length <= maxLength) {
      return text;
    }
  
    const words = text.split(' ');
    let result = "";
    let currentLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length;
  
      if (currentLength + wordLength + (currentLength > 0 ? 1 : 0) <= maxLength) {
        if (result !== "") {
          result += " ";
        }
        result += words[i];
        currentLength += wordLength + 1;
      } else {
        break;
      }
    }
  
    return result + "...";
  }
  
  function containsSubstring(text1, text2) {
      if (!text1 || !text2){
          return false;
      }
    return text1.includes(text2) || text2.includes(text1);
  }
  
  const str = 'hello world!';
  const str2 = 'ello';
  
  console.log(capitalizeFirstLetter(str));
  console.log(truncateText(str, 11));
  console.log(containsSubstring(str, str2));