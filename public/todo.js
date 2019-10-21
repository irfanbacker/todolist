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



  /*$('#rem').on('click', function(event) {
    event.preventDefault();
    var rem = $("#todo input");
    var dtask = {item: rem.val()};
    alert(dtask);
    $.ajax({
       type:'POST',
       url:'/del',
       //contentType: "application/json; charset=UTF-8",
       //dataType: "json",
       data: dtask,
       //success:function(data){
      //    location.reload();
       //}
     });
   });
*/
});
