//-----------------GetSales-----------------//
class TimeStamp{
    #y;#m;#d;#h;#min;#s;#ms
    constructor(ms) {
        this.#ms=ms
        this.#s = Math.floor(this.#ms/1000);
        this.#min = Math.floor(this.#s/60);
        this.#h = Math.floor(this.#min/60);
        this.#d = Math.floor(this.#h/24);
        this.#m = Math.floor(this.#d/30);
        this.#y = Math.floor(this.#m/12);
    }
    getYear(){return this.#y}
    getMonth(){return this.#m}
    getDay(){return this.#d}
    getHour(){return this.#h}
    getMinute(){return this.#min}
    getSecond(){return this.#s}
    valueOf(){return this.#ms}
}
class Time{
    #date;#y;#m;#d;#h;#min;#s;#ymd;#bias=0;
    constructor(date) {
        if (date instanceof Date) this.#date=date;
        else this.#date=new Date(...arguments);
        this.#y = this.#date.getFullYear();
        this.#m = this.#date.getMonth();
        this.#d = this.#date.getDate();
        this.#h = this.#date.getHours();
        this.#min = this.#date.getMinutes();
        this.#s = this.#date.getSeconds();
    }
    get stamp(){
        return this.#date.getTime()
    }
    getYear(){return this.#y}
    getMonth(){return this.#m}
    getDay(){return this.#d}
    getHour(){return this.#h}
    getMinute(){return this.#min}
    getSecond(){return this.#s}
    setBias(bias){
        this.#bias=bias;
        return this;
    }
    convertTZ(GMT){
        this.#bias=new TimeStamp(this.#date-new Date(this.#date.toString().replace(/(?<=GMT)[+-]*\d+/,(GMT>0?"+":"")+GMT))).getHour();
        return this;
    }
    valueOf(){return this.stamp}
    startOf(type){return this.plus({hours:this.#bias}).#startOf(type).minus({hours:this.#bias})}
    #startOf(type){
        switch (type){
            case "year":
                return new Time(new Date(this.#y, 0)).setBias(this.#bias)
            case "month":
                return new Time(new Date(this.#y,this.#m)).setBias(this.#bias)
            case "day":
                return new Time(new Date(this.#y,this.#m,this.#d,0)).setBias(this.#bias)
            case "hour":
                return new Time(new Date(this.#y,this.#m,this.#d,this.#h)).setBias(this.#bias)
            case "min":
                return new Time(new Date(this.#y,this.#m,this.#d,this.#h,this.#min)).setBias(this.#bias)
        }
        return this;
    }
    endOf(type){
        return this.minus({[type+"s"]:-1}).startOf(type).minus({seconds:1}).setBias(this.#bias)
    }
    plus({years,months,days,hours,minutes,seconds}){
        return new Time(
            new Date(
                this.#y+(years||0),
                this.#m+(months||0),
                this.#d+(days||0),
                this.#h+(hours||0),
                this.#min+(minutes||0),
                this.#s+(seconds||0)
            )
        ).setBias(this.#bias);
    }
    minus(obj){
        for (let k in obj) obj[k]*=-1;
        return this.plus(obj);
    }
}
function GetS(end=30,callback=null,start=0){
    let ostart=start
    let Relation={
        HOUSE_BRAND: "STANDARD_TSHIRT",
        PREMIUM_BRAND: "PREMIUM_TSHIRT"
    };
    if (!this.S) this.S={};
    let S=this.S;
    if (!this.SFull) this.SFull={};
    let SFull=this.SFull;
    let t=new Time().convertTZ(-7);
    let presets={
        Today: { from: t.startOf("day"), to: t.endOf("day") },
        Yesterday: {
            from: t.minus({ days: 1 }).startOf("day"),
            to: t.minus({ days: 1 }).endOf("day"),
        },
        Last7: {
            from: t.minus({ days: 7 }).startOf("day"),
            to: t.endOf("day"),
        },
        ThisMonth: { from: t.startOf("month"), to: t.endOf("day") },
        LastMonth: {
            from: t.minus({ months: 1 }).startOf("month"),
            to: t.minus({ months: 1 }).endOf("month"),
        },
        Last90: {
            from: t.minus({ days: 90 }).startOf("day"),
            to: t.endOf("day"),
        },
        Q1: {
            from: t.startOf("year"),
            to: t.startOf("year").plus({ months: 2 }).endOf("month"),
        },
        Q2: {
            from: t.startOf("year").plus({ months: 3 }),
            to: t.startOf("year").plus({ months: 5 }).endOf("month"),
        },
        Q3: {
            from: t.startOf("year").plus({ months: 6 }),
            to: t.startOf("year").plus({ months: 8 }).endOf("month"),
        },
        Q4: {
            from: t.startOf("year").plus({ months: 9 }),
            to: t.endOf("year"),
        },
        ThisYear: { from: t.startOf("year"), to: t.endOf("day") },
        LastYear: {
            from: t.minus({ years: 1 }).startOf("year"),
            to: t.minus({ years: 1 }).endOf("year"),
        },
    };
    var mart = {
        ATVPDKIKX0DER: "US",
        A1F83G8C2ARO7P: "GB",
        A1PA6795UKMFR9: "DE",
        A13V1IB3VIYZZH: "FR",
        APJ6JRA9NG5V4: "IT",
        A1RKKUPIHCS9HS: "ES",
        A1VC38T7YXB528: "JP"
    };
    let From,To,isPreset=false;
    if (end in presets){
        let preset=presets[end];
        From=preset.from;
        To=preset.to;
        isPreset=end;
    }else{
        From=t.minus({days:end}).startOf("day");
        To=t.endOf("day");
    }
    let dayStart=new TimeStamp(To.startOf("day")-t.startOf("day")).getDay();
    let totalDays=new TimeStamp(To.startOf("day")-From.startOf("day")).getDay();
    let List=[{stamp:To.stamp,day:0}];
    for (let days=90;days<totalDays;days+=90){
        List.push({stamp:To.minus({days:days}).startOf("day").stamp,day:days});
        List.push({stamp:To.minus({days:days+1}).endOf("day").stamp,day:days+1});
    }
    List.push({stamp:From.stamp,day:totalDays});
    return Sales(callback);
    function Sales(callback,v={S:{},SFull:{}}){
        let Start=List[1], End=List[0]
        var nDays=Start.day-End.day;
        let key=isPreset?isPreset:fst(dayStart,Start.day);
        List.splice(0,2)
        let url = 'https://merch.amazon.com/api/reporting/purchases/records?'+
            'marketplaceId='+Object.keys(mart).join('&marketplaceId=')+
            '&fromDate=' + Start.stamp + '&toDate=' + End.stamp;
        if (S[key])
            return Promise.resolve().then(()=>done());
        return RXhrJSONP('GET', url, '').then(async function(Sale) {
            for (var i in Sale){
                for (var i2 in Sale[i]){
                    if (!v.S[Sale[i][i2][0].asin]){
                        v.S[Sale[i][i2][0].asin] = Sale[i][i2][0].unitsSold - Sale[i][i2][0].unitsCancelled;
                        Sale[i][i2][0].market=mart[Sale[i][i2][0].marketplaceId];
                        if (Relation[Sale[i][i2][0].productType]) Sale[i][i2][0].productType=Relation[Sale[i][i2][0].productType];
                        v.SFull[Sale[i][i2][0].asin] = Sale[i][i2][0];
                        v.SFull[Sale[i][i2][0].asin].salesAggregateForVariations
                            .map(e=>{
                                e.units=e.unitsSold-e.unitsCancelled;
                                e.price=e.units?e.revenue.value/e.units:0;
                                e.market=mart[e.marketplaceId];
                                if (Relation[e.productType]) e.productType=Relation[e.productType];
                                return e;
                            });
                    }else{
                        v.S[Sale[i][i2][0].asin] += Sale[i][i2][0].unitsSold - Sale[i][i2][0].unitsCancelled;
                        let obj=v.SFull[Sale[i][i2][0].asin]
                        obj.revenue.value+=Sale[i][i2][0].revenue.value;
                        obj.revenueExclTax.value+=Sale[i][i2][0].revenueExclTax.value;
                        obj.royalties.value+=Sale[i][i2][0].royalties.value;
                        obj.salesAggregateForVariations
                            .push(...Sale[i][i2][0].salesAggregateForVariations
                                  .map(e=>{
                                      e.units=e.unitsSold-e.unitsCancelled;
                                      e.price=e.units?e.revenue.value/e.units:0;
                                      e.market=mart[e.marketplaceId];
                                      if (Relation[e.productType]) e.productType=Relation[e.productType];
                                      return e;
                                  }));
                        obj.unitsCancelled+=Sale[i][i2][0].unitsCancelled;
                        obj.unitsReturned+=Sale[i][i2][0].unitsReturned;
                        obj.unitsSold+=Sale[i][i2][0].unitsSold;
                        v.SFull[Sale[i][i2][0].asin].units=obj.unitsSold-obj.unitsCancelled;
                    }
                }
            }
            return done()
        });
        function fst(ost,d){
            return (ost?"_"+ost+"-":"")+d
        }
        function done(){
            if (S[key]){
                v.S={...S[key]}
                v.SFull={...SFull[key]}
            }else{
                S[key]={...v.S}
                SFull[key]={...v.SFull}
                console.log("Sold:"+Object.values(v.S).reduce((g,e)=>{g+=e;return g;},0)+", "+key);
            }
            if (List.length){
                return Sales(callback,v);
            }else{
                callback&&callback(v);
                return v.S
            }
        }
    }
}
