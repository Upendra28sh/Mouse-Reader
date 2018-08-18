function readMouseMove(e)
{
    var x= document.getElementById('x_result');
    var y= document.getElementById('y_result');
    x.innerHTML=e.clientX;
    y.innerHTML=e.clientY;
}

document.onmousemove=readMouseMove;
