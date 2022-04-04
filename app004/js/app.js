$(function(){
    $('#content').append('<p>This is a paragraph after h4 </p>');
    $('#content').prepend('<p>This is a paragraph before h4 </p>');
    $('<p>This is a paragraph3</p>').appendTo('#content');
    $('<p>This is a paragraph4</p>').prependTo('#content');
    $('#content').after('<p>This is a paragraph5</p>');
    $('#content').before('<p>This is a paragraph</p>');
    //$('#content').remove(); // to delete

});