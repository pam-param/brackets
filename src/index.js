module.exports = function check(str, bracketsConfig) {
  let bracketsMap = new Map(bracketsConfig.map(item => [item[1], item[0]]));
  let stack = [];
  const values = Array.from(bracketsMap.values());

  for (let char of str) {
    if (values.includes(char)) {
      if (bracketsMap.get(char) === char && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      if (bracketsMap.has(char)) {
        if (bracketsMap.get(char) !== stack.pop())
        {
            return false;
        }
      }
    }
  }

  return stack.length === 0;
}
