// Q40
// Album
function car(manufacturer, model , color , year) {
    if (manufacturer && model != undefined) {
        
    
    var carobject = {
        manufacturer: manufacturer,
        model: model,
    };
    if (color != undefined) {
        carobject.color = color;
      
    }
    if (year != undefined) {
        carobject.year = year;
      
    }
    return carobject;
}}
;
var string01 = car("honda","city");
var string02 = car("tpyota","land cruiser ","black");
var string03 = car("kia","sportage","white","2024");
console.log(string01);
console.log(string02);
console.log(string03);
