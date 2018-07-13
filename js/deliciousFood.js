function carteFn(obj,obl){
    // var oSele = document.getElementsByTagName('nav')[0];
    // var oLi=oSele.getElementsByTagName('li');
    // var obl=document.getElementsByTagName('ul');
    for(var i=0;i<obj.length;i++){
        obj[i].index=i;
        obj[i].onclick=function(){
            for(var i=0;i<obl.length;i++){
                obj[i].className="";
                obl[i].style.display='none';
            }
        obl[this.index].style.display='block';
        this.className="active"
        }
    }
}
window.onload=function(){
    var oSele = document.getElementsByTagName('nav')[0];
    var oLi=oSele.getElementsByTagName('li');
    var oUl=document.getElementsByTagName('ul');
    carteFn(obj,obl);
}