let fnc = (a,b,c) => {
    return [a,b,c];
};

console.log(fnc(2,4,6));

let stringOnly=(a,b,c,d) =>{
    let res=[];
    let arr2=[a,b,c,d];
    for(let x of arr2){
        if(typeof(x) == "string") res.push(x);
    }
    return res;
}

console.log(stringOnly(1,"h","r",4));

let sq=(a,b,c,d)=>{
    let res=[];
    let arr2 = [a,b,c,d];
    for(let x of arr2){
        res.push(x*x);
    }
    return res;
}

let evenNumbers = (a, b, c, d) => {
  let res = [];
  let arr2 = [a, b, c, d];
  for (let x of arr2) {
    if (x % 2 === 0) res.push(x);
  }
  return res;
};

console.log(evenNumbers(1, 2, 3, 4));

// 5 .

let names = (a, b, c, d) => {
  let res = [];
  let arr2 = [a, b, c, d];
  for (let x of arr2) {
    res.push(x.toUpperCase());
  }
  return res;
};

console.log(names("black", "el", "sergio", "sirius"));
