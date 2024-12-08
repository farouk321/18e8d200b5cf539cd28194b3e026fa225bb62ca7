//-----------------FindDesigns-----------------//
async function FindDesigns(call,O={}){
	groupBy();
	await Login();
	let status=Def("status",["TRANSLATING", "REVIEW", "PUBLISHING", "DELETING","DRAFT","PUBLISHED","TIMED_OUT","PROPAGATED"]),
		mks=Def("mks",null),
		user=LOGIN.U2,
		hitLimit=Def("hitLimit",2000),
		details=Def("details",null),
		productTypes=Def("productTypes",null),
		deleteReasonType=Def("deleteReasonType",["", "CONTENT_POLICY_VIOLATION", "INACTIVE_NO_SALES"]);
	return Startr(call,status,mks,user,hitLimit,details,productTypes,deleteReasonType)
	function Def(t,v){
		return (t in O?O[t]:v);
	}
	async function Startr(call,s,m,u,h,d,p,drt) {
		let Pages=0;
		let hitLimit=h;
		let pageSize=500;
		let List={},st=0;
		let url = 'https://merch.amazon.com/api/ng-amazon/coral/com.amazon.merch.search.MerchSearchService/FindDesigns';
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
			"deleteReasonType": drt,
			"accountId": u,
			"__type": "com.amazon.merch.search#FindDesignsRequest"
		    };
		    RXhrJSON("POST",url,JSON.stringify(Pt),ListProccess);
		
		    function ListProccess(O){
					if (hitLimit<0) hitLimit=O.hitCount;
					if (!Pages) Pages=Math.ceil(hitLimit/pageSize)||0;
			List = O;
			st++;
			Result.push(...List.results.filter(e=>e.productCount));
			hitLimit-=pageSize;
					console.log("Design: "+st+"/"+Pages);
			if (O.hitCount-st*pageSize>0&&hitLimit!=0){return ListLoop(0,LoopEnded)};
			let Rt=[];
			Rt[0]=Result;
			var C=new Compare();
			for (let i in Rt[0]) C.S(Rt[0][i].designTitle,Rt[0][i].designId);
			Rt[1]=C.R();
			for (let i in Rt[1]){
			    Rt[1][i][0]=Rt[1][i][0][0]
			}
			LoopEnded(Rt);
			if (call) call(Rt);
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
