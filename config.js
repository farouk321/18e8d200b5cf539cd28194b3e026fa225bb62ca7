require=({
	paths: {
	 "FindListing": "./FindListing",
	 "RXhrJSON": "./RXhrJSON",
	 "GetSales": "./GetSales",
	 "Login": "./Login",
	 "groupBy": "./groupBy",
	 "Sleep": "./Sleep",
	},
	shim: {
		"FindListing": {
			deps: ["RXhrJSON","GetSales","Login","groupBy","Sleep"],
		}
	},
	baseUrl: "https://cdn.jsdelivr.net/gh/farouk321/18e8d200b5cf539cd28194b3e026fa225bb62ca7/"
});
