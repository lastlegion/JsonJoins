var extend = require("extend")

var _mergetwo = function(data1, data2, keys){
    var merged = [];
    for(var i=0; i<data1.length; i++){
        var row1 = data1[i];
        for(var j=0; j<data2.length; j++){
            var row2 = data2[j];
            if(row1[keys[0]] == row2[keys[0]]){
                var rowM = extend({}, row1, row2);
                    merged.push(rowM);
            }
        }
    }
    var flat = [];
    merged = merged.concat.apply(flat, merged);
    return merged;
};


var innerJoin = function(sources, keys){
        if(sources.length == 1){
            return sources;
        } else if(sources.length == 2){
            return _mergetwo(sources[0],sources[1], keys)
        } else {

            //merge first 2
            var m2 = _mergetwo(sources[0], sources[1], keys)
            sources.shift(2);
            sources = sources.push(m2);
            _merge(sources)
        }

        return merged[0];
};

exports.innerJoin = innerJoin;