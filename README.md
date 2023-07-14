Load(["FindListing"],({U,U2})=>{
    //
});

//-----------------requireLoad2----------------------
function Load(nd,fn){
    requireLoad().then(e=>new Promise((r,f)=>requirejs(['Login',...nd],r)).then(e=>Login().then(fn)));
}

//-----------------requireLoad----------------------
function requireLoad() {
    if (this.requirejs) return Promise.resolve(0);
    var branch='https://cdn.jsdelivr.net/gh/farouk321/18e8d200b5cf539cd28194b3e026fa225bb62ca7@latest';
    return lS(branch+"/require.js",branch+"/config.js")
    function lS(src,data,async=true,type="text/javascript"){return new Promise((resolve,reject)=>{try{const tag=document.createElement("script");const container=document.head||document.body;tag.type=type;tag.async=async;tag.dataset.main=data;tag.src=src;tag.addEventListener("load",()=>{resolve({loaded:true,error:false});});tag.addEventListener("error",()=>{reject({loaded:false,error:true,message:`Failed to load script with src ${src}`,});});container.appendChild(tag);}catch(error){reject(error);}})};
}
