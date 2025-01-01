function repeatFn(fn, amount, Attime=1, efn=()=>{}
, timeout=200) {
    var queued = 0
      , resolved = 0
      , failed=0
      , pending = 0
      , result = [];
    function repeat() {
        if (!(resolved % 10) || (resolved == amount))
            console.log(`${resolved}/${amount}`)
        run(Math.min(Attime - pending, amount - queued))
    }
    function run(n=1) {
        if (n < 1||failed>=3)
            return;
        pending += n;
        queued += n;
        for (i = 0; i < n; i++) {
            setTimeout(()=>{
                fn().then(function(r) {
                    result.push(r);
                    resolved++;
                    failed=0;
                    pending--;
                    return repeat();
                }).catch(function(r) {
                    efn();
                    queued--;
                    failed++;
                    pending--;
                    return repeat();
                });
            }
            , timeout)
        }
    }
    repeat()
    return new Promise(function(resolve, reject) {
        let Intr = setInterval(function() {
            if (resolved == amount) {
                clearInterval(Intr);
                console.log(result);
                resolve(result)
            }else if (failed>=3){
                clearInterval(Intr);
                throw new Error('Uh-oh! Failed');
            }
        }, 100);
    }
    )
}
