//get the lis
$("ul").on("click", "li", function(e){
	//make them checked and unchecked
	$(this).toggleClass("checked");
});

//get span
$("ul").on("click", "span", function(){
	//make the x delete the lis
	$(this).parent().fadeOut(function(){
		$(this).remove();
	}).stopPropagation();
});
$("ul").on("click", "li", function(){
	//make the x delete the lis
	$(this).children().toggleClass("deleteActive").stopPropagation();
});

//get the input
$("input").keypress(function(e){
	//get the value 
	var newTodos = $("input").val();
	//clear the value
	if (e.which === 13) {
	  $("input").val("");
	  //add to new lis
	  $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodos + "</li>")
	}
})

//get the pen Icon
$(".fa-pen-nib").click(function(){
	$("input").fadeOut().toggle();
});

