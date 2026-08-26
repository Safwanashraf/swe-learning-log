function outest(){
    var c = "Safwan Ashraf";
    function outer(b){
        function inner(){
            let a = 13;
            console.log(c, b - a, p);
        }
        return inner;
    }
    return outer;
    
}
function thisTesting(){
    let p = "thisTestingVariable";
    this.p = p;
    console.log(p + "It's inside thisTesting function");
}
thisTesting();
console.log(p + "It's outside thisTesting function");
outest()(33)();