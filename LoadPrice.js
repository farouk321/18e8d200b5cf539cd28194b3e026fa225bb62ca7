//-----------------LoadPrice-----------------//
async function LoadPrice(){
	await Login();
	await GetS(365);
	return (this.LoadPriceU)||(this.LoadPriceU=new LoadN());
	function LoadN(){
		var Price={};
		var PriceDiv = {
			 PHONE_CASE_APPLE_IPHONE: [1.434, 0, 0, 0, 0, 0, 1.4], 
			 PHONE_CASE_SAMSUNG_GALAXY: [1.434, 0, 0, 0, 0, 0, 1.4], 
			 RAGLAN: [1.362, 1.501, 1.603, 1.575, 1.601, 1.64, 0], 
			 ZIP_HOODIE: [1.407, 1.633, 1.714, 1.576, 1.616, 1.623, 1.344], 
			 STANDARD_SWEATSHIRT: [1.338, 1.586, 1.66, 1.548, 1.58, 1.584, 1.823], 
			 TOTE_BAG: [1.202, 0, 0, 0, 0, 0, 0], 
			 STANDARD_TSHIRT: [1.351, 1.512, 1.583, 1.525, 1.552, 1.554, 1.35], 
			 STANDARD_LONG_SLEEVE: [1.394, 1.58, 1.661, 1.522, 1.542, 1.603, 1.603], 
			 VNECK: [1.336, 1.538, 1.608, 1.55, 1.577, 1.586, 0], 
			 THROW_PILLOW: [1.239, 0, 0, 0, 0, 0, 0], 
			 STANDARD_PULLOVER_HOODIE: [1.386, 1.561, 1.653, 1.515, 1.54, 1.552, 1.755], 
			 PREMIUM_TSHIRT: [1.322, 0, 0, 0, 0, 0, 0], 
			 POP_SOCKET: [1.456, 1.537, 1.615, 1.439, 1.464, 1.465, 0], 
			 TANK_TOP: [1.309, 1.582, 1.651, 1.481, 1.509, 1.546, 0]
		},
		PriceMin = {
			 PHONE_CASE_APPLE_IPHONE: [13.85, 0, 0, 0, 0, 0, 1617.83], 
			 PHONE_CASE_SAMSUNG_GALAXY: [13.85, 0, 0, 0, 0, 0, 1617.83], 
			 RAGLAN: [18.77, 14.61, 15.96, 16.86, 16.85, 16.72, 0], 
			 ZIP_HOODIE: [26.81, 23.07, 25.85, 25.29, 25.63, 25.15, 3756.79], 
			 STANDARD_SWEATSHIRT: [25.15, 24, 26.3, 22.97, 23.36, 23.3, 2975.56], 
			 TOTE_BAG: [15.56, 0, 0, 0, 0, 0, 0], 
			 STANDARD_TSHIRT: [13.39, 12.08, 13.72, 13.75, 13.76, 13.31, 1615.23], 
			 STANDARD_LONG_SLEEVE: [17.67, 16.52, 17.8, 16.19, 16.21, 16.01, 2148.59], 
			 VNECK: [15.19, 12.92, 13.54, 14.5, 14.5, 14.06, 0], 
			 THROW_PILLOW: [17.39, 0, 0, 0, 0, 0, 0], 
			 STANDARD_PULLOVER_HOODIE: [25.04, 25.63, 28.67, 25.53, 25.93, 25.43, 3346.86], 
			 PREMIUM_TSHIRT: [15.06, 0, 0, 0, 0, 0, 0], 
			 POP_SOCKET: [11.71, 9.68, 10.35, 12.29, 12.29, 11.86, 0], 
			 TANK_TOP: [15.28, 13.39, 14.25, 13.84, 13.85, 13.74, 0]
		},des=.99,desJP=00,
		marplace={"US":["USD",0,1],"GB":["GBP",.2,1],"DE":["EUR",.19,1],"FR":["EUR",.2,1],"IT":["EUR",.22,1],"ES":["EUR",.21,1],"JP":["JPY", .1,200]};
		marplace.T=Object.keys(marplace);
		this.mc = mc
		this.GetPrice = GetPrice;
		this.AlgoPriceA = AlgoPriceA;
		this.DefPriceA = DefPriceA;
		this.GP = GP;
		var DefPrice={JP:3,ES:3,IT:3,FR:3,DE:3,GB:4,US:4.5};
		var AlgoPrice=[['(S[365][asin]||0)<2',0]];
		
		function mc(n){
			if (!marplace.T) marplace.T=Object.keys(marplace);
			return marplace.T.indexOf(n)+1;
		}
		function DefPriceA(d){
			DefPrice=d;
		}
		function AlgoPriceA(t,p){
			AlgoPrice.push([t,p]);
		}
		function PriceAlgo(asin,market){
			var P=DefPrice[market];
			for (var al of AlgoPrice) if (eval(al[0])) P=al[1];
			P=Number(P);
			if (isNaN(P)||P<0) P=0;
			return P;
		}
		function GetPrice(asin,market){
			return GP(PriceAlgo(asin,market));
		}
		function F(n,i=1){return Math.floor(n*i)/i;}
		function R(n,i=1){return Math.round(n*i)/i;}
		function Ry(a,b,p){ 
			var r;
			let M=marplace.T[b];
			let Mk=marplace[M];
		let min=PriceMin[a][b];
		let div=PriceDiv[a][b];
		if (!min||!div) return 0;
			r=(1+Mk[1])*(min+Mk[2]*p*div);
			if (M=="JP"){
				r=R(r,1e-2);
				r=R(F(F(r-desJP-1,1),1e-2)+Mk[2]+desJP+(!p?Mk[2]:0),1);
			}else{
				r=R(r,100);
				r=R(F(F(r-des-0.01,100),1)+Mk[2]+des+(!p?Mk[2]:0),100);
			}
			return r;
		}
		function GP(p){
			if (Price[p]==undefined){
				Prc(p);
				Price.i=1;
			}
			function Prc(u){
				var JC=0,Id,G=0,FT=0,To=0;
				if (!marplace.T) marplace.T=Object.keys(marplace);
				if (!marplace.P) marplace.P=Object.keys(PriceMin);
				//--------------------------------------------
				Price[u]=JSON.parse(JSON.stringify(PriceMin));
				for (var JC=0;JC<marplace.P.length;JC++){
					Id=marplace.P[JC];
					To+=PriceMin[Id].length;
					if (JC==marplace.P.length-1) FT=1;
					for (var i=0;i<PriceMin[Id].length;i++){
						RY(Id,i,u);
					}
				}
				function RY(a,b,u){
						if (!Price.i) PriceMin[a][b]=R(PriceMin[a][b]/(1+marplace[marplace.T[b]][1]),100);
						Price[u][a][b]=Ry(a,b,u);
						G+=1;
						if (G==To&&FT) console.log("Price:"+u+", "+G+"/"+To);
				}
			}
			return Price[p];
		}
	}
}
