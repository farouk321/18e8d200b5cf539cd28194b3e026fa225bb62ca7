require.config({
	paths: {
	 "FindDesign": "./FindDesign",
	 "FindListing": "./FindListing",
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
			deps: ["RXhrJSON","GetSales","Login","groupBy","Sleep"],
		},
		"LoadPrice": {
			deps: ["GetSales"],
		},
		"GetSales": {
			deps: ["RXhrJSON"],
		},
	}
});
