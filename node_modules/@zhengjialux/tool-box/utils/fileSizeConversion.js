/* 
  * 传入文件字节大小，返回文件长度换算的单位大小。
  * @param {Number} 传入文件大小
  * @returns {String} 返回转换后的文件单位大小
*/
export const fileSizeConversion = (length) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let unitIndex = 0
  while (length >= 1024 && unitIndex < units.length - 1) {
    length /= 1024;
    unitIndex++;
  }
  return length.toFixed(2) + ' ' + units[unitIndex];
}