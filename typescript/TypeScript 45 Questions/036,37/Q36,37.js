// Q36
//T-Shirt
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("size : " + size + "; text on T-Sirt :" + text);
}
make_shirt("Medium", "Knowledge is power");
//Q37
make_shirt();
make_shirt("Medium");
make_shirt("small", "governor initiative");
