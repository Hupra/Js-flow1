const arr = process.argv.slice(2);
console.log(arr.reduce((cur, prev) => Number(prev) + Number(cur)));
