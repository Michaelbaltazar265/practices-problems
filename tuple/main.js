


const tuple = (v) => { 
    const newArr = []; 
    const one = v[0];
    const two = v[2];
    const three = v[v.length - 2]; 
    newArr.push(one, two, three);
    return newArr;
}; 

console.log(tuple([1, 2, 3, 4, 5, 6, 7, 9]))