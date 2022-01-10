// bài 2
const height = [60, 40, 55, 75, 64]

function alternatingSums(array) {
  let sumCanNang = []
  let sumCanNangLe = 0;
  let sumCanNangChan = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      sumCanNangChan += array[i]
    } else {
      sumCanNangLe += array[i]
    }
  }
  sumCanNang.push(sumCanNangChan)
  sumCanNang.push(sumCanNangLe)
  return sumCanNang;
}
console.log(alternatingSums(height))
// bài 1

let arr = [2, -900, -29, -100, 4];
    function alternatingSums(arr) {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
          if(max < arr[i] * arr[i+1]){
              max = arr[i] * arr[i+1];
          }
        }
        
        console.log(max);
      }
 alternatingSums(arr);   


