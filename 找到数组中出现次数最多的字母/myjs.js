function calculation() {
    var arr = ["a","x","b","d","m","a","k","m","p","j","a"];
    var o = {};
    for (var i = 0, length = arr.length; i < length; i++) {
        var char = arr[i];//.charAt(i)
        if (o[char]) { //char就是对象o的一个属性，o[char]是属性值，o[char]控制出现的次数
            o[char]++; //次数加1
        } else {
            o[char] = 1; //若第一次出现，次数记为1
        }
    }
//遍历对象，找到出现次数最多的字符和次数
    var max = 0;
    var maxChar = null;
    for (var key in o) {
        if (max < o[key]) {
            max = o[key]; //max始终储存次数最大的那个
            maxChar = key; //那么对应的字符就是当前的key
        }
    }
    document.getElementById("more_time").innerText=maxChar;
    document.getElementById("times").innerText=max;
        var results=[];
        leng=arr.length;
        start=0;
        while (start<leng){
            start=arr.indexOf('a',start);
            if (start===-1)break;
            results.push(start);
            start=start+1
        }

        document.getElementById("position").innerText = results;

}