(function() {
    const startTime = Date.now();
    function log(item) {
        const timeSpend = (Date.now() - startTime) / 1000;
        console.log(`${item}, ${timeSpend}s`);
    }
    log("Hello!");
})();
