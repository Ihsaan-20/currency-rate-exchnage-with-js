$('.changeCategory').change(function(){
    var ids = '';
    $('.changeCategory').each(function(){
        if(this.checked)
        {
            var id = $(this).val();
            ids = ids + id + ',';
        }
        $('#category').val(ids);
        console.log(ids);
    });
});