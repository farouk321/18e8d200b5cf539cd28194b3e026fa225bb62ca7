	/*	FindListing(
	    (e)=>{
	        console.log(e)
	    },
	    {hitLimit:-1,
	     details:'course',
	     mks:['US'],
	     productTypes:['STANDARD_TSHIRT']
	    });
	*/



	//-----------------FindListing-----------------//
	function FindListing(call,O={}){
		Load()
		let status=O.status||["TRANSLATING", "REVIEW", "PUBLISHING", "DELETING","DRAFT","PUBLISHED","TIMED_OUT","PROPAGATED"],
			mks=O.mks||null,
			user=User2,
			hitLimit=O.hitLimit||2000,
			details=O.details||null,
	        productTypes=O.productTypes||null;
			return Startr(call,status,mks,user,hitLimit,details,productTypes)
	    
		async function Startr(call,s,m,u,h,d,p) {
			let hitLimit=h;
			let pageSize=500;
			let List={},st=0;
			let url = 'https://merch.amazon.com/api/ng-amazon/coral/com.amazon.merch.search.MerchSearchService/FindListings';
			let Result=[];
			let Pro=new Promise((LoopEnded)=>{ListLoop(1,LoopEnded)})
			async function ListLoop(i=0,LoopEnded){
				if (!i) await sleep(300);
				var Pt = {
					"pageSize": pageSize=hitLimit*hitLimit<hitLimit*pageSize?hitLimit:pageSize,
					"pageToken": List.pageToken || [],
					"sortField": "DateCreated",
					"sortOrder": "Descending",
					"productDetails": d,
					"status": s,
					"marketplaces": m,
					"productTypes": p,
					"searchableOnRetail": null,
					"deleteReasonType": [""],
					"accountId": u,
					"__type": "com.amazon.merch.search#FindListingsRequest"
				};
				RXhrJSON("POST",url,JSON.stringify(Pt),ListProccess);

				function ListProccess(O){
					List = O;
					st++;
					Result.push(...List.results.filter(e=>e.asin));
					hitLimit-=pageSize;
					if (O.hitCount-st*pageSize>0&&hitLimit!=0){return ListLoop(0,LoopEnded)};
	                let Rt=[],ResultDesign=Result.groupBy(e=>e.designId);
	                Rt[0]=Result;
	                Rt[1]=Result.groupBy(e=>e.designId).groupBy(e=>e.productType,1).groupBy(e=>e.marketplace,2);
	                Rt[2]=Result.reduce((g,{designId,marketplace,productTitle,productType})=>{if (!g[0][designId]&&marketplace=="US"){g.push([productTitle,designId]);g[0][designId]=1;}return g},[{}]).splice(1);
	                var C=new Compare();
	                for (var i in Rt[2]) C.S(Rt[2][i][0],Rt[2][i][1]);
	                Rt[3]=C.R();
	            	var Des={}
	                for (var i in Rt[3]){
	                    Rt[3][i][0]=Rt[3][i][0][0]
	                    Rt[3][i][1]=Rt[3][i][1].map(e=>Des[e]=Rt[3][i][0])
	                }
	                var ResultAsin=Result.groupBy(({asin})=>asin,0)
	                Rt[3]=Result.reduce((g,{asin})=>{g.push(asin);return g;},[])
	                	.groupBy(e=>ResultAsin[e][0].productType,0)
	                	.groupBy(e=>ResultAsin[e][0].marketplace,1)
	                	.groupBy(e=>Des[ResultAsin[e][0].designId]??'Default',2);
	                GetS(Sales,365).then(Sl=>{
	                	Rt[3]=Rt[3].dig(2,(o)=>{A=[];for (let i in o){B=[];for (let asin of o[i]) B.push([asin,Sl[asin]??0]);A.push([i,B]);}return A;})
	                	LoopEnded(Rt);
						if (call) call(Rt);
					});
				}
			};

			return Pro;
		}
	    function Compare(){
			let Reg=["tee","saying","gift",'Joke','Humor',"friend","teen","retro","kids","youth","joy","fun","shirt","t-shirt","tshirt"];
			let NM=new RegExp('(^|[^\w])([^a-zA-Z0-9]|'+Reg.join("|")+')[s]{0,1}($|[^\w])','i');
	        var Ks=[],Rs=[],Df=String(Math.random()),Dff='X';
	        this.S=function(a,v){
	        	a=a.replace(/gift/i,'item').toLowerCase().replace(/(^| )(.)/g, function(v) { return v.toUpperCase(); }).split(" ").filter(e=>!NM.test(e)).join(" ");
	            let L=a.split(" ").length
	    		var Rs=Tmpl(a)
	            let F=0;
	            for (var i in Ks){
	                let K=Ks[i][0].filter(e=>(Rs.indexOf(e)!=-1)&&e.split(" ").length>=L-1)
	                if (K.length){F=1;Ks[i][0]=K;Ks[i][1].push(v);break}
	            }
	            if (!F) Ks.push([Rs,[v]])
	    	}
	        this.R=function(){return Ks}
	        function Tmpl(a,d=0){
	    	    if (!(a instanceof Array)) a=a.split(' ');
	    	    var K=[],as=[''];
	    	    if (a.length-1) as=Tmpl(a.slice(1),1);
	    	    for (var i of as){
	    	        K.push(a[0]+" "+i)
	    	        K.push(Df+' '+i)
	    	    }
	    	    K=K.map(e=>e.trim().replace(new RegExp(Df+(e.split(' ').length<5?'':' '+Df),'g'),Df));
	    	    if (!d){
	     	    	K=K.filter(e=>(e.match(new RegExp(Df,'g'))??[]).length<=(e.split(' ').length>5?2:1));
	   	    		K=K.map(e=>e.replace(new RegExp(Df,'g'),Dff));
	    	    }
	    	    return K;
	    	}
	    }
	}

	//-----------------GetSales-----------------//
	function GetS(S,d=30,c=null,st=0,C=0,N=Date.now()){
		if (S[d]) return new Promise((r)=>{r(S[d])});
		S[d]={};
		return Sales(S[d],d,c,st,C,N);
		function Sales(v,d=30,c=null,st=0,C=0,N=Date.now()){
		    var mart = {
	            ATVPDKIKX0DER: "US",
	            A1F83G8C2ARO7P: "GB",
	            A1PA6795UKMFR9: "DE",
	            A13V1IB3VIYZZH: "FR",
	            APJ6JRA9NG5V4: "IT",
	            A1RKKUPIHCS9HS: "ES",
	            A1VC38T7YXB528: "JP"
	        };
			var dd=d<=90?d:90;
			d-=dd;
			var T=N - st * 24 * 3600 * 1000;
			url = 'https://merch.amazon.com/api/reporting/purchases/records?'+
				'marketplaceId='+Object.keys(mart).join('&marketplaceId=')+
				'&fromDate=' + (T - (dd-1) * 24 * 3600 * 1000) + '&toDate=' + T;
			return RXhrJSONP('GET', url, '').then(async function(Sale) {
				for (var i in Sale){
					for (var i2 in Sale[i]){
						C+=Sale[i][i2][0].unitsSold;
						v[Sale[i][i2][0].asin] = (v[Sale[i][i2][0].asin]||0) + Sale[i][i2][0].unitsSold;
					}
				}
				if (d>0){
					return Sales(v,d,c,st+dd,C,N);
				}else{
					console.log("Sold:"+C+", "+(st+dd)+"/"+(d+dd+st));
					c&&c();
				}
				return v;
			});
		}
	}

	//-----------------Load-----------------//
	function Load(){
		if (this.IsLOAD) return;
		this.IsLOAD=1;
		this.Sales={};
		for (var v of [Array,Object]) toProto(v,'groupBy',groupBy);
		for (var v of [Array,Object]) toProto(v,'dig',dig);

		function toProto(o,k,v){
		    Object.defineProperty(o.prototype, k, {
		      enumerable: false,
		      value: v
		    });
		}
	    function dig(n,f){
	    	return Dig(this,n,f);
		    function Dig(o,n,f){
		    	if (!n){
		    		return f(o);
		    	}else{
		    		for (var j in o) o[j]=Dig(o[j],n-1,f);
		    	}
		    	return o;
		    }
	    }
		function groupBy(fn,t=0){
		    return dL(this,t);
		    function dL(a,d){
		        if (!d) return gB(a,fn);
		        for (let i in a) a[i]=dL(a[i],d-1);
		        return a;
		    }
		    function gB(a,fn){
		        return a.reduce((g, v) => {
		          const k = fn(v);
		          g[k] = g[k] ?? [];
		          g[k].push(v);
		          return g;
		        }, {});
		    }
		}
	}

	//-----------------Login-----------------//
	function Login(){
		var http = new XMLHttpRequest();
		var url = 'https://merch.amazon.com/manage/designs';
		http.open('GET', url, false);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				User = http.responseText.match(/customerId":"([^"]+)"/)[1];
				User2 = http.responseText.match(/accountId":"([^"]+)"/)[1];
			}
		};
		http.send();
	}

	//-----------------sleep-----------------//
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	//-----------------RXhrJSON-----------------//
	function RXhrJSONP(method, url, post, Rc = 5) {
        return new Promise((call, fail) => { RXhrJSON(method, url, post, call, Rc, fail) });
    }
	function RXhrJSON(method, url,post,call,Rc=5,fail=()=>{}){
	    (function R(){
	        if (Rc==0) return fail();
	        Rc--;
	        let http = new XMLHttpRequest();
	        http.open(method, url, true);
	        http.setRequestHeader('Content-Type', 'text/plain');
	        http.onreadystatechange = async function() {
	            if (http.readyState == 4) {
	                if (http.status == 200){
	                    try{
	                        var O = JSON.parse(http.responseText);
	                    }catch(e){
	                    	await sleep(1000);
	                        return R();
	                    }
	                    call(O);
	                }else{
	                	await sleep(1000);
	                    return R();
	                }
	            }
	        }
	        http.send(post);
	    })();
	}