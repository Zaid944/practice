function func() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("here in settimeout for 5s");
            resolve("promise resolved");
        }, 5000);
    });
}
async function main() {
    const ans = await func(); // thread blocking
    console.log("is the thread blocked here");
    return ans;
}

main();
console.log("yoyo");
console.log("sync print statement");
