const p = new promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 3000);
})

//let's do this fully each stages.