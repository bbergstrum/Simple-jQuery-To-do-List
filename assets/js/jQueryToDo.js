// check off specific to-do by click
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click "x" to delete to-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Adding new to-do
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // get new todo input
        var todoText = $(this).val();
        // clear input
        $(this).val("");
        // create and add new li
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    } else {

    }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});