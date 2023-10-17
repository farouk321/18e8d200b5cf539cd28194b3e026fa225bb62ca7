//-----------------groupBy-----------------//
async function DesignDetails(Id) {
	return RXhrJSONP("POST", 'https://merch.amazon.com/api/productconfiguration/get?id=' + Id);
}
