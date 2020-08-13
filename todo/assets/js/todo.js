//to add new to do
$('.input-group').on('keypress',function(event){
	if (event.which === 13) {
		var newtodo = $(this).val()
		$('ul').append('<li><span><i class="fas fa-trash-alt"></i></span><input type="checkbox" class="check">'+' '+newtodo+"</li>")
		$(this).val('')
	}
})
//to mark as done
$('ul').on('click','li',function(){
	$(this).toggleClass('lis')
})
//to delete a todo
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove()
	})
	event.stopPropagation()//stops the events on the element slelected
})
//add icon
$('.fa-edit').on('click',function(){
	$('.input-group').fadeToggle(1000)
})