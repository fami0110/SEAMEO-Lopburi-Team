$('#toggle-lang').on('change', function() {
    let id = $('#toggle-lang').val();
    $('.text').hide();
    $(`.text.${id}`).fadeIn();
});

$('header .menu').on('click', function() {
    $('header .menu').toggleClass('active');
});