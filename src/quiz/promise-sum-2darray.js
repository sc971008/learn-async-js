const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumArray(arr){
    return new Promise((resolve,reject) =>{
        console.log("1D sum is called")
        if(Array.isArray(arr)){
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
            }
            console.log('resolving ... '+sum);
            resolve(sum);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    })
}

const Promises = []
for(let i= 0 ; i<array2D.length ;i++){
    Promises.push(sumArray(array2D[i]));
}


Promise.all(Promises)
    .then((res)=>{
        let Ans =0
        res.forEach(element => {
            Ans= Ans+element
        });
        console.log(Ans)
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });
