const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkNegArray(arr){
    return new Promise((resolve,reject) =>{
        
        if(Array.isArray(arr)){
            for (let i = 0; i < arr.length; i++) {
                    if(arr[i]<0) resolve(`Found Neg ${arr[i]}`);
            }
            console.log('resolving ... '+sum);
            reject("all positive")
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from check');
    })
}


const Promises = []
for(let i= 0 ; i<array2D.length ;i++){
    Promises.push(checkNegArray(array2D[i]));
}

Promise.any(Promises)
    .then((res)=>{
        console(res)
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });
