module.exports = function zeros(expression) {
  let arr = expression.split('*');

  function fives(n) {
    if (n.includes('!!') && !(+n.slice(0, -2) % 2)) { // для четных чисел
      if(n.length >= 4){
        if(+n.slice(0, -2) < 50) return +n.slice(0, -3);
        else return +n.slice(0, -3) + Math.floor(+n.slice(0, -2) / 50);
      } else return 0;
    }

    else if (n.includes('!!')) { // для нечетных
      let result = 0;
      for (let i = 5; i <= +n.slice(0, -2); i = i * 5) {
      result += Math.floor(+n.slice(0, -2) / i);
    }
      if(+n.slice(0, -2) < 10) return result;
      else if(+n.slice(0, -2) < 50 ) return result - +n.slice(0, -3);
      else return result - (+n.slice(0, -3) + 1)
      }

    else { // для обычных факториалов
    let result = 0;
    for (let i = 5; i <= +n.slice(0, -1); i = i * 5) {
      result += Math.floor(+n.slice(0, -1) / i);
    }
    return result;
      }
    }

  function deuces (n) {
    if (n.includes('!!') && (+n.slice(0, -2) % 2)) return 0;

    else if (n.includes('!!')) { // для четных двойных
      let result = 0;
      for (let i = 2; i <= +n.slice(0, -2); i = i * 2) {
      result += Math.floor(+n.slice(0, -2) / i);
    }
    return result;
    }
    else {
      let result = 0;
      for (let i = 2; i <= +n.slice(0, -1); i = i * 2) {
      result += Math.floor(+n.slice(0, -1) / i);
    }
    return result;
    }
  }
  
  let fivesCount = arr.map(a => fives(a)).reduce((a,b)=> a + b);
  let deucesCount = arr.map(a => deuces(a)).reduce((a,b)=> a + b);
  
  return fivesCount <= deucesCount ? fivesCount : deucesCount;
}
