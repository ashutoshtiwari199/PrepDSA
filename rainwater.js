const array = [1,0,4,0,3,4,2,0,4]
// [1,5,0,4,0,2,0,3, 4,2,0,4];

function rainWater(arr) {
    let leftMaxArr = [];
    let rightMaxArr = [];
    let totalWater = 0;
    for (let i = 0; i < arr.length; i++) {
        let leftMax = 0;
        let rightMax = 0;
        // console.log(`Current Index : ${i} and value is ${arr[i]}`)
        for (let j = i; j >= 0; j--) { // reverse check (left side)
        // console.log(`Reverse Current Index : ${j} and value is ${arr[j]}`)
            if (arr[j] >= leftMax) {
                leftMaxArr.push(arr[j])
                leftMax = arr[j];
                // console.log(arr[i], 'assigned left max', arr[j])
            }
        // console.log(`left max: ${leftMax}`)
        }

        for (let k = i; k < arr.length; k++) {
        // console.log(`Forward  Current Index : ${k} and value is ${arr[k]}`)
            if (arr[k] >= rightMax) {
                rightMaxArr.push(arr[k])
                rightMax = arr[k];
                // console.log('assigned rigt max', arr[k])
            }
            // console.log(`right Max is:  ${rightMax}`)
        }
        console.log(`Index ${i} Value: ${arr[i]} LeftMax: ${leftMax} Right Max: ${rightMax}`)
        totalWater += Math.min(leftMax, rightMax) - arr[i];
    }
    // console.log(`left max: ${leftMaxArr} and right Max is:  ${rightMaxArr}`)
    console.log('Tatal', totalWater)
}

rainWater(array)
rainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
rainWater([4, 2, 0, 3, 2, 5])
rainWater([3,0,3])