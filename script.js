// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]
 

  function SortNumber(numbers){
    numbers.sort((a, b)=> {return b-a});
    return numbers
  }

//   contoh penggunaan
  console.log(SortNumber([1, 2, 4, 3, 5, 3, 2, 1])) // Output: [5, 4, 3, 3, 2, 2, 1, 1]



//   2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1


function maxSubarraySum(arr, length) {
    if (length > arr.length) {
      return null; // Panjang yang diminta lebih besar dari panjang array
    }
  
    let maxSum = 0;
    let currentSum = 0;
  
    // Hitung jumlah awal dari subarray pertama
    for (let i = 0; i < length; i++) {
      currentSum += arr[i];
    }
    maxSum = currentSum;
  
    // Geser jendela subarray dengan panjang yang diinginkan
    for (let i = length; i < arr.length; i++) {
      currentSum = currentSum - arr[i - length] + arr[i];
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Contoh penggunaan
  console.log(maxSubarraySum([100, 200, 300, 400], 2)); // Output: 700


//   3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek

function sumEvenNumbers(obj) {
    let sum = 0;
  
    for (const key in obj) {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
        sum += obj[key];
      } else if (typeof obj[key] === 'object') {
        sum += sumEvenNumbers(obj[key]);
      }
    }
  
    return sum;
  }
  
  const input1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  };

  const input2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
  };
  
  console.log(sumEvenNumbers(input1)); // Output: 6
  console.log(sumEvenNumbers(input2)); // Output: 12