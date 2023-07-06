//-----------------groupBy-----------------//
groupBy()
function groupBy(){
	if (this.IsLOAD) return;
	this.IsLOAD=1;
	this.Sales={};
	for (var v of [Array,Object]) toProto(v,'groupBy',groupBy);
	for (var v of [Array,Object]) toProto(v,'dig',dig);

	function toProto(o,k,v){
	    Object.defineProperty(o.prototype, k, {
	      enumerable: false,
	      value: v
	    });
	}
	function dig(n,f){
	    return Dig(this,n,f);
	    function Dig(o,n,f){
		if (!n){
			return f(o);
		}else{
			for (var j in o) o[j]=Dig(o[j],n-1,f);
		}
		return o;
	    }
	}
	function groupBy(fn,t=0){
	    return dL(this,t);
	    function dL(a,d){
		if (!d) return gB(a,fn);
		for (let i in a) a[i]=dL(a[i],d-1);
		return a;
	    }
	    function gB(a,fn){
		return a.reduce((g, v) => {
		  const k = fn(v);
		  g[k] = g[k] ?? [];
		  g[k].push(v);
		  return g;
		}, {});
	    }
	}
}
