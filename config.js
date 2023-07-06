require.config({
	paths: {
	 "FindListing": "./FindListing",
	 "LoadPrice": "./LoadPrice",
	 "RXhrJSON": "./RXhrJSON",
	 "GetSales": "./GetSales",
	 "Login": "./Login",
	 "groupBy": "./groupBy",
	 "Sleep": "./Sleep",
	},
	shim: {
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
