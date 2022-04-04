$(function(){
    $('#selectBtn').click(function(){
        $('input:checkbox').attr('checked','checked');
        $(this).attr('disabled','disabled');
        $('#deselectBtn').removeAttr('disabled');

    });
    $('#deselectBtn').click(function(){
        $('input:checkbox').removeAttr('checked');
        $(this).attr('disabled','disabled');
        $('#selectBtn').removeAttr('disabled');
    });

    $('#languages').change(function(){
        alert($(this).val());
    });
    $(document).contextmenu(function(){
        return false;
    });
});