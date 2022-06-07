//This JavaScript code was created by Marcos David Hernández Ortigoza

$(document).ready(function () {
    
    $('ul.navbar-nav > li')
            .click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});