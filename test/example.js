Load(["FindListing"],({U,U2})=>{
        
});

//-----------------requireLoad----------------------
async function Load(nd,fn){
        requireLoad().then(e=>new Promise((r,f)=>requirejs(['Login',...nd],r)).then(e=>Login().then(fn)));
}

//-----------------requireLoad----------------------
async function requireLoad() {
        let v='latest';
        if (this.requirejs) return Promise.resolve(0);
        var branch='https://cdn.jsdelivr.net/gh/farouk321/18e8d200b5cf539cd28194b3e026fa225bb62ca7@'+v;
        return lS(branch+"/require.js").then(e=>lS(branch+"/config.js").then(e=>{requirejs.config({baseUrl:branch});return requireLoad();}));
        function lS(src,async=true,type="text/javascript"){return new Promise((resolve,reject)=>{try{const tag=document.createElement("script");const container=document.head||document.body;tag.type=type;tag.async=async;tag.src=src;tag.addEventListener("load",()=>{resolve({loaded:true,error:false});});tag.addEventListener("error",()=>{reject({loaded:false,error:true,message:`Failed to load script with src ${src}`,});});container.appendChild(tag);}catch(error){reject(error);}})};
}
