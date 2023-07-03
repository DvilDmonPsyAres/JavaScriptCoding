function addNums(n) {
    total = 0;
    // console.time("addNums")
    for (let i = 1 ; i <= n ; i++) {
        // console.timeLog("addNums")
        total += i;
    }
    // console.timeEnd("addNums")
    return total;
  }


for(let i = 0; i <= 10; i++){
    let startTime = Date.now()
    addNums(100000);

    let endTime = Date.now()
    console.log(`${endTime - startTime}`)
}
