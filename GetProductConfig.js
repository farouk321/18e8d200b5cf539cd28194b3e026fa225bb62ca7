//-----------------GetProductConfig-----------------//
async function GetProductConfig() {
  var url = 'https://merch.amazon.com/api/ng-amazon/coral/com.amazon.merch.sellerdesignservice.MerchSellerDesignService/GetProductTypeConfiguration';
  var post = {
    "actingAsId": User,
    "userId": User,
    "accountId": User2,
    "__type": "com.amazon.merch.sellerdesignservice#GetProductTypeConfigurationInput",
  };
  return RXhrJSONP("POST",url,post,{count:2,timeout:3e3}).then(e=>e.productTypeConfiguration)
}
