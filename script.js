$('#toggle-lang').on('change', function() {
    let id = $('#toggle-lang').val();
    $('.text').hide();
    $(`.text.${id}`).fadeIn();
});