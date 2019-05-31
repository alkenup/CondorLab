$(document).ready(function(){
    $('#collapseExample').on('shown.bs.collapse', function() {
        console.log("shown");
    }).on('show.bs.collapse', function() {
        console.log("show");
    });
    /* code to scroll and not jumps on select a menu item */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var element = this.getAttribute('href');
            $("#navbarSupportedContent").on('hidden.bs.collapse', function() {
                scrollPage(element)
            })
            /* code to hide the navbar on click */
            if($('.navbar-toggler').css('display') != 'none') {
                $('.navbar-toggler').click();
            }
            else {
                scrollPage(element)
            }
        });
    });
});

function scrollPage(element) {
    var headerOffset = $("#menu").outerHeight(true);
    var elementPosition = $(element).position().top; // the 10 represent the margings. TODO: get the margin tp size automactly
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

/* function to draw the diamons image galery */
function drawDiamonds() {
    $('.item img').css({
        'border-radius': '',
        'border': '',
        'margin': ''}
    );

    $("#instagramPics").diamonds({
        size : 200, // Size of diamonds in pixels. Both width and height.
        gap : 5, // Pixels between each square.
        hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.
        autoRedraw : true, // Auto redraw diamonds when it detects resizing.
        itemSelector : ".item" // the css selector to use to select diamonds-items.
    });

    $('#shape').val('diamond');
    $('#shape').html('&#9679;');   
}

/* function to draw the circled image galery */
function drawCircles() {
    $("#instagramPics").diamonds("destroy");
    $('.item img').css({
        'border-radius': '50%',
        'border': '3px solid #FFFFFF',
        'margin': '15px;'}
    );
    $('#shape').val('circle');
    $('#shape').html('&#10070;');
}

/* function to change the shape of image galery. This is nly to show both galeries remove on client desition*/
function changeShape(shape) {
    if($('#shape').val() == "diamond") {
        drawCircles();
    }
    else {
        drawDiamonds();
    }
}