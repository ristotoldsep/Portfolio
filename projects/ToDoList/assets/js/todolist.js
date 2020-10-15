//we need to select li inside ul, because our event listeners wouldnt work otherwise with new lis created after the document has first booted

//.on("click") > click(), because on() will account for future elements
$("ul").on("click", "li", function () { 
    $(this).toggleClass("crossed");
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut("slow", function () //parent() removes li!!!! because span is nested inside of it
    {
        console.log("To-Do Removed!");
        $(this).remove();
    });
    event.stopPropagation(); //when clicking on span, stopping from bubbling up to other elements!
});

//If someone clicks enter in the input field
$("input[type='text']").keypress(function (event) 
{
    if (event.charCode === 13) //Clicked enter
    {
        console.log("Clicked enter");
        //Gets input text value
        if($(this).val() !== "") // Cant input empty string
        {
            var inputText = ($(this).val()); 
            //Clears input text field
            $(this).val("");
            //append adds new li to ul
            $("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + inputText + "</li>")
        }
        
    }
    else {
        console.log("clicked something else");
    }
});

$(".fas.fa-plus").on("click", function()
{
    $("input[type='text']").fadeToggle("slow", function()
    {
        console.log("Input hidden/shown!");
    });
});
