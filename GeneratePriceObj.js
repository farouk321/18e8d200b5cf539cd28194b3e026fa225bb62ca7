//-----------------GeneratePriceObj-----------------//
(function (){
    var S=["Div","Zero","Max","Min"];
    var User,User2,PriceObj={},Price = {},RoyaltyCache={},
        marplace={"US":["USD",0],"GB":["GBP",.2],"DE":["EUR",.19],"FR":["EUR",.2],"IT":["EUR",.22],"ES":["EUR",.21], "JP":["JPY", .1]};
    Load([],Start);

    async function Start({U,U2}) {
        User = U;
        User2 = U2;
        ProductConfig=await ProductConfig();
        for (var i in ProductConfig){
            let v=ProductConfig[i];
            Price[i]=Object.keys(marplace).map(function(m){return v.marketplaces.includes(m)&&1||0});
        }
        Str();
    }
    function F(n,i=1){
        return Math.floor(n*i)/i;
    }
    function R(n,i=1){
        return Math.round(n*i)/i;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function Str(){
        var JC=0,Id,ps=0,Fr=0,FT=0,To=0;
        if (!marplace.T) marplace.T=Object.keys(marplace);
        if (!marplace.P) marplace.P=Object.keys(Price);
        //--------------------------------------------
        PriceObj.Div=JSON.parse(JSON.stringify(Price));
        PriceObj.Zero=JSON.parse(JSON.stringify(Price));
        PriceObj.Max=JSON.parse(JSON.stringify(Price));
        PriceObj.Min=JSON.parse(JSON.stringify(Price));
        for (let JC=0;JC<marplace.P.length;JC++){
            Id=marplace.P[JC];
            To+=Price[Id].filter(function(i){return i;}).length;
            if (JC==marplace.P.length-1) FT=1;
            for (let i=0;i<Price[Id].length;i++){
                if (Price[Id][i]) RY2(Id,i);
            }
        }

        async function RY2(a,b){
            var ps=0;
            var mk=marplace.T[b];
            var p=[ProductConfig[a].maxPrice[mk]||ProductConfig[a].defaultPrices[mk]*2,ProductConfig[a].minPrice[mk]||ProductConfig[a].defaultPrices[mk]];
            var r=[];
            var X=0,Y=0,A=0,B=0;
            for (var i=0;i<p.length;i++){
                r[i]=await Ry(a, p[i]*1e3, marplace.T[b])
                Y+=p[i]*1e3;
                X+=r[i];
            }
            Y/=i;X/=i;
            for (i=0;i<p.length;i++){
                A+=(r[i]-X)*(p[i]*1e3-Y);
                B+=(r[i]-X)**2;
            }
            PriceObj.PriceDiv[a][b]=F(A/B,1e3);
            PriceObj.PriceZero[a][b]=F(Y-A/B*X,1e2);
            PriceObj.PriceMax[a][b]=F(ProductConfig[a].maxPrice[mk]||1e6,1e2);
            PriceObj.PriceMin[a][b]=F(ProductConfig[a].minPrice[mk]||0,1e2);
            Fr+=1;
            if (!(Fr%10)||Fr==To)console.log("Price:"+Fr+"/"+To);
            if (FT&&Fr==To) (Print());
        }
    }

    async function ProductConfig() {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = 'https://merch.amazon.com/api/ng-amazon/coral/com.amazon.merch.sellerdesignservice.MerchSellerDesignService/GetProductTypeConfiguration';
            var Pt = {
                "actingAsId": User,
                "userId": User,
                "accountId": User2,
                "__type": "com.amazon.merch.sellerdesignservice#GetProductTypeConfigurationInput",
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = async function () {
                var status = xhr.status;
                if (status == 200) {
                    resolve(JSON.parse(xhr.responseText).productTypeConfiguration);
                } else {
                    await sleep(3000);
                    resolve(await ProductConfig());
                }
            };
            xhr.send(JSON.stringify(Pt));
        });
    }

    function Print(){
        var M="PriceObj = {\n";
        for (var j=0,i=(S.length?S[j]:0);j<S.length;j++,i=S[j]){
            M+='\t"'+i+'": '+HP(PriceObj[i])+(j==S.length-1?"":",\n");
        }
        M+="\n}"
        console.log(M);
    }

    function HP(p){
        return JSON.stringify(p, undefined, 1).replaceAll(/[\n]*\s*?([\d\.]+[,]*)[\n]*\s+/g,"$1 ")
            .replaceAll(/\n([^{}])/g,"\n\t\t$1").replaceAll(/\n(})/g,"\n\t$1").replaceAll(/\s(\])/g,"$1").replaceAll(/],/g,"], ");
    }

    function PrintOld(){
        var M="";
        for (var j=0,i=(S.length?S[j]:0);j<S.length;j++,i=S[j]){
            M+="\tPrice"+i+" = "+HP(PriceObj[i])+(j==S.length-1?"":",\n");
        }
        console.log(M);
    }

    function HPOld(p){
        return JSON.stringify(p, undefined, 1).replaceAll(/[\n]*\s*?([\d\.]+[,]*)[\n]*\s+/g,"$1 ").replaceAll(/"/g,"")
            .replaceAll(/\n([^{}])/g,"\n\t\t$1").replaceAll(/\n(})/g,"\n\t$1").replaceAll(/\s(\])/g,"$1").replaceAll(/],/g,"], ");
    }

    async function Ry(T, P, M, Tr=0) {
        var cacheKey=T+P+M
        if (cacheKey in RoyaltyCache) return RoyaltyCache[cacheKey];
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = 'https://merch.amazon.com/api/ng-amazon/royalty/calculateV2';
            var Pt = {"calculateRoyaltiesRequest":{
                "marketplace": M,
                "price": {
                    "amount": Math.floor(100*(P/(1+marplace[M][1])))/100,
                    "currencyCode": marplace[M][0]
                },
                "royaltyProductConfig": {
                    "productType": T,
                    "printLocations": ["DEFAULT_SINGLE_PRINT_LOCATION"]
                }
            }},r;

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = async function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        RoyaltyCache[cacheKey]=parseFloat(xhr.responseText);
                        resolve(RoyaltyCache[cacheKey]);
                    } else {
                        if (Tr==1) return;
                        await sleep(3000);
                        resolve(await Ry(T, P, M, Tr++));
                    }
                }
            };
            xhr.send(JSON.stringify(Pt));
        });
    }

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
})()
