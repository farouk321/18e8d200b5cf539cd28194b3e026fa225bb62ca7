//-----------------LoadPrice-----------------//
async function LoadPrice(){
	await Login();
	await GetS(365);
	return (this.LoadPriceU)||(this.LoadPriceU=new LoadN());
	function LoadN(){
		var Price={},
		PriceR={},
		PriceObj = {
			"Div": {
				 "PHONE_CASE_APPLE_IPHONE": [1.436, 7.995, 7.932, 7.995, 8.135, 8.064, 1.4], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [1.436, null, null, null, null, null, 1.4], 
				 "RAGLAN": [1.362, 1.501, 1.604, 1.575, 1.6, 1.639, null], 
				 "ZIP_HOODIE": [1.407, 1.634, 1.714, 1.577, 1.615, 1.623, 1.344], 
				 "STANDARD_SWEATSHIRT": [1.338, 1.587, 1.659, 1.547, 1.58, 1.584, 1.823], 
				 "TOTE_BAG": [1.206, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [1.351, 1.514, 1.585, 1.526, 1.554, 1.555, 1.351], 
				 "STANDARD_LONG_SLEEVE": [1.393, 1.58, 1.661, 1.523, 1.542, 1.602, 1.603], 
				 "VNECK": [1.337, 1.537, 1.607, 1.55, 1.577, 1.586, null], 
				 "THROW_PILLOW": [1.24, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [1.386, 1.562, 1.653, 1.515, 1.54, 1.553, 1.755], 
				 "PREMIUM_TSHIRT": [1.323, null, null, null, null, null, null], 
				 "POP_SOCKET": [7.143, 8.583, 8.51, 8.545, 8.731, 8.618, null], 
				 "TANK_TOP": [1.311, 1.583, 1.654, 1.482, 1.509, 1.547, null]
			},
			"Zero": {
				 "PHONE_CASE_APPLE_IPHONE": [13.84, -0.01, -0.01, -0.01, 0.01, 0, 1617.9], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [13.84, null, null, null, null, null, 1617.9], 
				 "RAGLAN": [18.76, 14.61, 15.95, 16.86, 16.86, 16.73, null], 
				 "ZIP_HOODIE": [26.81, 23.07, 25.85, 25.28, 25.64, 25.15, 3757], 
				 "STANDARD_SWEATSHIRT": [25.14, 23.99, 26.3, 22.98, 23.36, 23.3, 2975.46], 
				 "TOTE_BAG": [15.54, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [13.38, 12.08, 13.71, 13.75, 13.75, 13.31, 1614.86], 
				 "STANDARD_LONG_SLEEVE": [17.68, 16.52, 17.8, 16.19, 16.21, 16.01, 2148.71], 
				 "VNECK": [15.18, 12.93, 13.55, 14.5, 14.5, 14.06, null], 
				 "THROW_PILLOW": [17.39, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [25.04, 25.62, 28.66, 25.53, 25.93, 25.43, 3346.97], 
				 "PREMIUM_TSHIRT": [15.05, null, null, null, null, null, null], 
				 "POP_SOCKET": [0, -0.02, -0.03, 0.07, -0.02, 0.06, null], 
				 "TANK_TOP": [15.27, 13.39, 14.24, 13.84, 13.84, 13.74, null]
			},
			"Max": {
				 "PHONE_CASE_APPLE_IPHONE": [30, 17.98, 19.98, 19.98, 19.98, 19.98, 6500], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [30, null, null, null, null, null, 6500], 
				 "RAGLAN": [45, 30, 35, 35, 35, 35, null], 
				 "ZIP_HOODIE": [37.99, 45, 50, 50, 50, 50, 8000], 
				 "STANDARD_SWEATSHIRT": [33.99, 45, 50, 50, 50, 50, 8000], 
				 "TOTE_BAG": [25, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [35, 17.48, 19.98, 19.48, 19.48, 19.48, 6500], 
				 "STANDARD_LONG_SLEEVE": [40, 35, 35, 40, 40, 40, 6500], 
				 "VNECK": [35, 35, 35, 35, 35, 35, null], 
				 "THROW_PILLOW": [45, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [35.99, 33.99, 38.99, 33.99, 33.99, 33.99, 8000], 
				 "PREMIUM_TSHIRT": [45, null, null, null, null, null, null], 
				 "POP_SOCKET": [20, 20, 20, 20, 20, 20, null], 
				 "TANK_TOP": [35, 30, 30, 30, 30, 30, null]
			},
			"Min": {
				 "PHONE_CASE_APPLE_IPHONE": [13.84, 13.99, 14.99, 15.99, 15.99, 15.99, 1617.9], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [13.84, null, null, null, null, null, 1617.9], 
				 "RAGLAN": [18.76, 14.61, 15.95, 16.86, 16.86, 16.73, null], 
				 "ZIP_HOODIE": [26.99, 23.07, 25.85, 25.28, 25.64, 25.15, 3757], 
				 "STANDARD_SWEATSHIRT": [25.14, 23.99, 26.3, 22.98, 23.36, 23.3, 2975.46], 
				 "TOTE_BAG": [15.54, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [13.38, 12.08, 13.71, 13.75, 13.75, 13.31, 1614.86], 
				 "STANDARD_LONG_SLEEVE": [17.68, 16.52, 17.8, 16.19, 16.21, 16.01, 2148.71], 
				 "VNECK": [15.18, 12.93, 13.55, 14.5, 14.5, 14.06, null], 
				 "THROW_PILLOW": [17.39, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [25.04, 25.62, 28.66, 25.53, 25.93, 25.43, 3346.97], 
				 "PREMIUM_TSHIRT": [15.05, null, null, null, null, null, null], 
				 "POP_SOCKET": [11.72, 9.68, 10.34, 12.29, 12.28, 11.86, null], 
				 "TANK_TOP": [15.27, 13.39, 14.24, 13.84, 13.84, 13.74, null]
			}
		},des=[99,2],desJP=[00,0],
		marplace={"US":["USD",0,1],"GB":["GBP",.2,1],"DE":["EUR",.19,1],"FR":["EUR",.2,1],"IT":["EUR",.22,1],"ES":["EUR",.21,1],"JP":["JPY", .1,200]};
		marplace.T=Object.keys(marplace);
		var history = {};
		this.mc = mc;
		this.GetPrice = GetPrice;
		this.GetPriceR = GetPriceR;
		this.Prsi=Prsi;
		this.AlgoPriceA = AlgoPriceA;
		this.DefPriceA = DefPriceA;
		this.GP = GP;
		this.history = history;
		var DefPrice={JP:3,ES:3,IT:3,FR:3,DE:3,GB:4,US:4.5};
		var AlgoPrice=[];
		function mc(n,idToMk=false){
			if (!marplace.T) marplace.T=Object.keys(marplace);
			if (idToMk) return marplace.T[n];
			return marplace.T.indexOf(n);
		}
		function DefPriceA(d){
			DefPrice=d;
		}
		function AlgoPriceA(t,p){
			AlgoPrice.push([t,p]);
		}
		function PriceAlgo(asin,market,type){
			var marketId=mc(market);
			var P=eval(DefPrice[market]);
			for (var al of AlgoPrice) if (eval(al[0])) P=eval(al[1]);
			P=Number(P);
			if (isNaN(P)||P<0) P=0;
			history[P]=(history[P]||0)+1
			return P;
		}
		function GetPrice(asin,market,type){
			let R=PriceAlgo(asin,market,type);
			GP(R);
			return Price[R][type][mc(market)]
		}
		function GetPriceR(asin,market,type){
			let R=PriceAlgo(asin,market,type);
			GP(R);
			return PriceR[R][type][mc(market)]
		}
		function F(n,i=1){return Math.floor(n*i)/i;}
		function R(n,i=1){return Math.round(n*i)/i;}
		function C(n,i=1){return Math.ceil(n*i)/i;}
		function toDes(min,ext,lastExt,countExt=2){
			let lastInt=1/10**lastExt,
				r=R(min,1/lastInt),
				firstInt=lastInt*10**countExt,
				r2=F(r,1/firstInt)+ext*lastInt;
			return r2>=min?r2:r2+firstInt;
		}
		function Ry(a,b,p){ 
			var r;
			let M=marplace.T[b];
			let Mk=marplace[M];
			let div=PriceObj.Div[a][b];
			let zero=PriceObj.Zero[a][b];
			let max=PriceObj.Max[a][b];
			let min=PriceObj.Min[a][b];
			if (!div) return 0;
			r=(zero+Mk[2]*p*div);
			return r;
		}
		function Prsi(price,productType,marketId,overrideExt=null){
			let max=PriceObj.Max[productType][marketId];
			let min=PriceObj.Min[productType][marketId];
			let div=PriceObj.Div[productType][marketId];
			if (!div) return price;
			let M=marplace.T[marketId];
			let desi=(M=="JP"?desJP:des);
			if (overrideExt) desi[0]=overrideExt;
			r=toDes(price,desi[0],desi[1]);
			if (r<min) return Prsi(min,productType,marketId);
			if (r>max) return Prsi(max-(M=="JP"?100:1),productType,marketId);
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
				if (!marplace.P) marplace.P=Object.keys(PriceObj.Zero);
				//--------------------------------------------
				PriceR[u]=JSON.parse(JSON.stringify(PriceObj.Zero));
				Price[u]=JSON.parse(JSON.stringify(PriceObj.Zero));
				for (var JC=0;JC<marplace.P.length;JC++){
					Id=marplace.P[JC];
					To+=PriceObj.Zero[Id].length;
					if (JC==marplace.P.length-1) FT=1;
					for (var marketId=0;marketId<PriceObj.Zero[Id].length;marketId++){
						RY(Id,marketId,u);
					}
				}
				function RY(productType,marketId,u){
					let M=marplace.T[marketId];
					let price=Ry(productType,marketId,u);
					let desi=(M=="JP"?desJP:des);
					PriceR[u][productType][marketId]=R(price,10**desi[1]);
					Price[u][productType][marketId]=Prsi(price,productType,marketId);
					G+=1;
					if (G==To&&FT) console.log("Price:"+u+", "+G+"/"+To);
				}
			}
			return Price[p];
		}
	}
}
