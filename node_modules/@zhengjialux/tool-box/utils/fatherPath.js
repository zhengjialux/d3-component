/* 
  * 传入一个路径字符串，和分割的符号。
  * 返回一个数组，分割后的每个元素都拼接自己的父级包括祖级
  * @param {String} 传入路径字符串
  * @param {String} 传入字符
  * @returns {Array} 返回处理后的数组
*/
export const fatherPath = (path, symbol) => {
  const pathListData = [symbol]
  const pathItemArray = path.split(symbol)

  pathItemArray.forEach(item => {
    if (item) {
      const index = path.indexOf(item)
      pathListData.push(path.slice(0, index + item.length))
    }
  })

  return pathListData
}