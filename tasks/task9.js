
  function mySlice(arr, start, end)  {
    const massiv = []
  for (let i = start; i < end; i++) massiv.push(arr[i])
  return massiv
}

function myIndexOf (arr, item, from = 0) {
  for (let i = from; i < arr.length; i++){ 
    if (arr[i] === item){ 
      return i
    }
  }
}

function myIncludes (arr, item, from = 0) {
  for (let i = from; i < arr.length; i++){
     if (arr[i] === item){
       return true
    }
  }
}

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log('MySlice: ', mySlice(arr, 1, 3), arr.slice(1, 3))
console.log('MyIndexOf', myIndexOf(arr, 10), arr.indexOf(10))
console.log('MyIncludes', myIncludes(arr, 2), arr.includes(2))