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
async function FindListing(call,O={}){
	await Login()
	groupBy()
	let status=O.status||["TRANSLATING", "REVIEW", "PUBLISHING", "DELETING","DRAFT","PUBLISHED","TIMED_OUT","PROPAGATED"],
		mks=O.mks||null,
		user=LOGIN.U2,
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
