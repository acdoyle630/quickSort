/*jshint esversion: 6*/

module.exports = () => {
  const quickSort = (arr) => {
    for(var i=0; i < arr.length; i++){
      if(typeof arr[i] !== 'number'){
        return false;
      }
    }
    if(Array.isArray(arr) !== true) {
      return false;
    }
    // Base Case
    if (arr.length <= 1) {
      return arr;
    }

    // 1) Pick a Pivot
    const pivot = arr[0];

    // 2) Parition
    const { left, right } = partion(arr, pivot);

    // 3) Recusrively call quicksort on left and right and concat left to pivot and right to pivot
    return quickSort(left).concat(pivot, quickSort(right));
  };

  const partion = ( arr, pivot ) => {
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if ( arr[i] < pivot ){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return {
      left,
      right,
    };
  };
  return{
    quickSort,
    partion
  };
};






