requirejs.config({
	paths: {
	 "FindDesign": "./FindDesign",
	 "FindListing": "./FindListing",
	 "DesignDetails": "./DesignDetails",
	 "GetDesign": "./GetDesign",
	 "GeneratePriceObj": "./GeneratePriceObj",
	 "LoadPrice": "./LoadPrice",
	 "RXhrJSON": "./RXhrJSON",
	 "GetSales": "./GetSales",
	 "Login": "./Login",
	 "groupBy": "./groupBy",
	 "Sleep": "./Sleep",
	},
	shim: {
		"FindDesign": {
			deps: ["RXhrJSON","Login","groupBy","Sleep"],
		},
		"FindListing": {
			deps: ["RXhrJSON","Login","GetSales","groupBy","Sleep"],
		},
		"GetDesign": {
			deps: ["RXhrJSON"],
		},
		"GeneratePriceObj": {
			deps: ["RXhrJSON","Login"],
		},
		"LoadPrice": {
			deps: ["RXhrJSON","GetSales"],
		},
		"GetSales": {
			deps: ["RXhrJSON"],
		},
	}
});
