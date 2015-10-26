/**
 * Created by JL on 2015/10/26 0026.
 */
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;

window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(context);
}
function render(cxt){
    var hour = 12;
    var minute = 34;
    var second = 56;
    
}