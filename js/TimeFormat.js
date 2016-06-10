/**
 * 获取过去到现在的天数
 */
var getDaysFromYear = function(year, month, day){
    var d = new Date();
    var cYear = d.getFullYear();
    var cMonth = d.getMonth() + 1;
    var cday = d.getDate();

    this.getDaysInMonth = function(year, month) {
        var d= new Date();
        return new Date(year, month, 0).getDate();
    }

    var y = cYear - year;
    var allMonth = 0;
    if(y < 1){
        allMonth = cMonth - month +1;
    }else if(y = 1){
        allMonth = 12 - month + 1 + cMonth - 1;
    }else if(y > 1){
        allMonth = 12 - month + 1 + cMonth - 1 + 12*(y-1);
    }
    var days = 0 - day + cday;

    if(y < 1){
        for(var i=month;i<=cMonth; i++){
            days += this.getDaysInMonth(year, i);
        }
    }else if(y = 1){
        for(var i=month;i<=12; i++){
            days += this.getDaysInMonth(year, i);
        }
        for(var i=1;i<cMonth; i++){
            days += this.getDaysInMonth(cYear, i);
        }
    }else if(y > 1){
        for(var i=month;i<=12; i++){
            days += this.getDaysInMonth(year, i);
        }
        for(var i=1;i<cMonth; i++){
            days += this.getDaysInMonth(cYear, i);
        }
        for(var j=1; j<y-1; j++){
            for(var i=1;i<12; i++){
                days += this.getDaysInMonth(year+j, i);
            }
        }
    }

    return days;
}