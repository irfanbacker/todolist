$(document).ready(function(){

  $('#add').on('click', function(){

      var item = $('#item');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          location.reload();
        }
      });

      return false;

  });

  $('#rem').on('click', function(event) {
    event.preventDefault();
    var dtasks = $("#todo input:checkbox:checked").map(function () {
        return {item: $(this).val()};
    }).get();
    $.ajax({
       type:'POST',
       url:'/del',
       data:{dtask:dtasks},
       success:function(data){
         location.reload();
       }
     });
   });

});
