$(document).ready(() => {
    $('.card').hover(
        (e) => {
            mouseOnCard(e);
        },
        (e) => {
            mouseOffCard(e);
        }
    );

    $('.card').mousemove((e) => {
        let card = e.target;
        let pos = getRelativeMousePos(card, e.pageX, e.pageY);

        rotate(card, pos, 50);

        let kids = $(card).children();
        for(let i = 0; i < kids.length; i++) {
            let type = $(kids[i]).prev().prop('nodeName');
            let depth = 40 + ( i * 20 );
            rotate(kids[i], pos, depth);
        }
    })
});


function mouseOnCard(e) {
    let card = e.target;
    $(card).addClass('card--active');
}


function mouseOffCard(e) {
    let card = e.target;
    $(card).removeClass('card--active');
}


//  Return relative mouse position inside element.
//  {0,0} is the exact middle.
//  {-1,-1} is the top left corner.
//  {1,1} is the bottom right corner.
function getRelativeMousePos(elem, mouseX, mouseY) {
    let width = $(elem).outerWidth();
    let height = $(elem).outerHeight();

    let left = $(elem).offset().left;
    let right = left + width;
    let top = $(elem).offset().top;
    let bottom = top + height;

    let middle = {
        x: (left + right) / 2,
        y: (top + bottom) / 2
    };

    let relative_x = (mouseX - middle.x) / (width / 2);
    let relative_y = (mouseY - middle.y) / (height / 2);

    return({
        x: round(relative_x, 2),
        y: round(relative_y, 2)
    });
}


function rotate(elem, amount, depth) {
    const scale = 10;
    let rot_x = amount.x * scale;
    let rot_y = amount.y * scale;

    let rot = {
        x: (-1) * amount.y * scale,
        y: amount.x * scale
    }

    if(!depth) {
        $(elem).css({
            "transform": `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`
        });

    } else {
        $(elem).css({
            "transform": `rotateX(${rot.x}deg) rotateY(${rot.y}deg) perspective(1000px) translate3d(0,0,${depth}px)`
        });
    }

}


function updateShadow(elem, amount){
    $(elem).css( {
        "text-shadow": `0 ${amount}px ${1.2 * amount}px rgba(0,0,0,0.3)`
    });
}


function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}