$('#list').click((event) => {
  event.preventDefault()
  $.post('list.php',{
  } ,(data)=>{
      $('#list_student_id').html(data);
    })   
})

$('#search_student').click((event)=>{
  event.preventDefault();
  $.post('search.php',{
    value: $('#search_box').val(),
  },(data)=>{
    $('#searched_student_result').html(data); 
    })
})

$('#add_student').click((event) =>{
  event.preventDefault();
  $.post('add.php',{
    value: $('#add_idbox').val(),
    name: $('#add_namebox').val(),
  },(data) => {
      $('#add_student_result').html(data);
  })
})

$('#delete_student').click((event) => {
  event.preventDefault();
  $.post('delete.php',{
    value: $('#delete_box').val(),
  },(data) =>{
    $('#delete_student_result').html(data);
  })
})
