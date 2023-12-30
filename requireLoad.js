    //-----------------requireLoad----------------------
    async function Load(nd,fn=((e)=>e)){
        await requireLoad()
        return prequirejs([,...nd]).then(e=>Login()).then(fn);
        function prequirejs(ar){
            return new Promise((r,f)=>requirejs(ar,r))
        }
        async function requireLoad() {
            let v='latest';
            if (this.requirejs) return Promise.resolve(0);
            var branch='https://cdn.jsdelivr.net/gh/farouk321/18e8d200b5cf539cd28194b3e026fa225bb62ca7@'+v;
            require = {baseUrl:branch,deps: ["config"]};
            await lS(branch+"/require.js")
            return new Promise((r,f)=>setTimeout(Tim=(e=>{try{requirejs.LoadPromise.then(r)}catch(e){setTimeout(Tim,100)}})),100);
            function lS(src,async=true,type="text/javascript"){
                return new Promise((resolve,reject)=>{
                    try{
                        const tag=document.createElement("script");
                        const container=document.head||document.body;
                        tag.type=type;
                        tag.async=async;
                        tag.src=src;
                        tag.addEventListener("load",()=>{resolve(1)});
                        tag.addEventListener("error",()=>{reject(0)});
                        container.appendChild(tag);
                    }catch(error){
                        reject(error);
                    }
                })
            };
        }
    }
