let a = [2, 3, 4, 7, 15]

// console.log(a.reverse())

function r2 (a) {
   let res = [];
    a.forEach(element => {
        res.unshift(element);

        });
    return res;
}