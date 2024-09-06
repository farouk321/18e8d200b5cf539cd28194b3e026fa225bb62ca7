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
				 "PHONE_CASE_APPLE_IPHONE": [1.437, 7.996, 7.933, 7.996, 8.136, 8.065, 1.401], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [1.437, null, null, null, null, null, 1.401], 
				 "RAGLAN": [1.363, 1.502, 1.605, 1.576, 1.601, 1.64, null], 
				 "ZIP_HOODIE": [1.408, 1.635, 1.715, 1.578, 1.616, 1.624, 1.345], 
				 "STANDARD_SWEATSHIRT": [1.339, 1.588, 1.66, 1.548, 1.581, 1.585, 1.824], 
				 "TOTE_BAG": [1.207, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [1.352, 1.515, 1.586, 1.527, 1.555, 1.556, 1.352], 
				 "STANDARD_LONG_SLEEVE": [1.394, 1.581, 1.662, 1.524, 1.543, 1.603, 1.604], 
				 "VNECK": [1.338, 1.538, 1.608, 1.551, 1.578, 1.587, null], 
				 "THROW_PILLOW": [1.241, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [1.387, 1.563, 1.654, 1.516, 1.541, 1.554, 1.756], 
				 "PREMIUM_TSHIRT": [1.324, null, null, null, null, null, null], 
				 "POP_SOCKET": [7.144, 8.584, 8.511, 8.546, 8.732, 8.619, null], 
				 "TANK_TOP": [1.312, 1.584, 1.655, 1.483, 1.51, 1.548, null]
			},
			"Zero": {
				 "PHONE_CASE_APPLE_IPHONE": [13.85, 0, 0, 0, 0.02, 0.01, 1617.91], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [13.85, null, null, null, null, null, 1617.91], 
				 "RAGLAN": [18.77, 14.62, 15.96, 16.87, 16.87, 16.74, null], 
				 "ZIP_HOODIE": [26.82, 23.08, 25.86, 25.29, 25.65, 25.16, 3757.01], 
				 "STANDARD_SWEATSHIRT": [25.15, 24, 26.31, 22.99, 23.37, 23.31, 2975.47], 
				 "TOTE_BAG": [15.55, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [13.39, 12.09, 13.72, 13.76, 13.76, 13.32, 1614.87], 
				 "STANDARD_LONG_SLEEVE": [17.69, 16.53, 17.81, 16.2, 16.22, 16.02, 2148.72], 
				 "VNECK": [15.19, 12.94, 13.56, 14.51, 14.51, 14.07, null], 
				 "THROW_PILLOW": [17.4, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [25.05, 25.63, 28.67, 25.54, 25.94, 25.44, 3346.98], 
				 "PREMIUM_TSHIRT": [15.06, null, null, null, null, null, null], 
				 "POP_SOCKET": [0.01, -0.01, -0.02, 0.08, -0.01, 0.07, null], 
				 "TANK_TOP": [15.28, 13.4, 14.25, 13.85, 13.85, 13.75, null]
			},
			"Max": {
				 "PHONE_CASE_APPLE_IPHONE": [30, 17.99, 19.99, 19.99, 19.99, 19.99, 6500], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [30, null, null, null, null, null, 6500], 
				 "RAGLAN": [45, 30, 35, 35, 35, 35, null], 
				 "ZIP_HOODIE": [37.99, 45, 50, 50, 50, 50, 8000], 
				 "STANDARD_SWEATSHIRT": [33.99, 45, 50, 50, 50, 50, 8000], 
				 "TOTE_BAG": [25, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [35, 17.49, 19.99, 19.49, 19.49, 19.49, 6500], 
				 "STANDARD_LONG_SLEEVE": [40, 35, 35, 40, 40, 40, 6500], 
				 "VNECK": [35, 35, 35, 35, 35, 35, null], 
				 "THROW_PILLOW": [45, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [35.99, 33.99, 38.99, 33.99, 33.99, 33.99, 8000], 
				 "PREMIUM_TSHIRT": [45, null, null, null, null, null, null], 
				 "POP_SOCKET": [20, 20, 20, 20, 20, 20, null], 
				 "TANK_TOP": [35, 30, 30, 30, 30, 30, null]
			},
			"Min": {
				 "PHONE_CASE_APPLE_IPHONE": [13.85, 13.99, 14.99, 15.99, 15.99, 15.99, 1617.91], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [13.85, null, null, null, null, null, 1617.91], 
				 "RAGLAN": [18.77, 14.62, 15.96, 16.87, 16.87, 16.74, null], 
				 "ZIP_HOODIE": [26.99, 23.08, 25.86, 25.29, 25.65, 25.16, 3757.01], 
				 "STANDARD_SWEATSHIRT": [25.15, 24, 26.31, 22.99, 23.37, 23.31, 2975.47], 
				 "TOTE_BAG": [15.55, null, null, null, null, null, null], 
				 "STANDARD_TSHIRT": [13.39, 12.09, 13.72, 13.76, 13.76, 13.32, 1614.87], 
				 "STANDARD_LONG_SLEEVE": [17.69, 16.53, 17.81, 16.2, 16.22, 16.02, 2148.72], 
				 "VNECK": [15.19, 12.94, 13.56, 14.51, 14.51, 14.07, null], 
				 "THROW_PILLOW": [17.4, null, null, null, null, null, null], 
				 "STANDARD_PULLOVER_HOODIE": [25.05, 25.63, 28.67, 25.54, 25.94, 25.44, 3346.98], 
				 "PREMIUM_TSHIRT": [15.06, null, null, null, null, null, null], 
				 "POP_SOCKET": [11.72, 9.68, 10.34, 12.29, 12.28, 11.86, null], 
				 "TANK_TOP": [15.28, 13.4, 14.25, 13.85, 13.85, 13.75, null]
			}
		},des=[99,2],desJP=[00,0],
		marplace={"US":["USD",0,1],"GB":["GBP",.2,1],"DE":["EUR",.19,1],"FR":["EUR",.2,1],"IT":["EUR",.22,1],"ES":["EUR",.21,1],"JP":["JPY", .1,200]};
		marplace.T=Object.keys(marplace);
		var history = {};
		this.mc = mc;
		this.GetPrice = GetPrice;
		this.MGetPrice = MGetPrice;
		this.GetPriceR = GetPriceR;
		this.MGetPriceR = MGetPriceR;
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
		function GetPrice(asin,market,type,des=null){
			let R=PriceAlgo(asin,market,type);
			return MGetPrice(R,market,type,des);
		}
		function MGetPrice(R,market,type,des=null){
			let marketId=mc(market);
			GP(R);
			if (des==null){
				R=Price[R][type][marketId];
			}else{
				R=Prsi(PriceR[R][type][marketId],type,marketId,des);
			}
			return R;
		}
		function GetPriceR(asin,market,type){
			let R=PriceAlgo(asin,market,type);
			return MGetPriceR(R,market,type)
		}
		function MGetPriceR(R,market,type){
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
