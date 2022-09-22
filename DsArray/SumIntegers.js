let nums = [-1, 0, 1, 2, -1, -4];


function findTriples(arr, t){
    let target = [];
    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arr.length; j++){
    
            for(let k=0; k<arr.length; k++){
                
                if((arr[i] + arr[j] + arr[k]) == t){
                    target.push([arr[i], arr[j], arr[k]]);
                }
            }
    
        }

    }
    
    target = target.map(a => a.sort()).map(i => i.join(","));
    target = [...new Set(target)];
    return target.map(i => i.split(","));
}

console.log(findTriples(nums, 0));

