$(document).ready(function(){
    $("input").focus(function(){
        $(this).removeClass('notpermit');
    })
    $("input").blur(function(){
        $(this).removeClass('notpermit');
    })
    // $('.clearbtn').on("click",function(){
    //     $("input[name='name']").val()
    //     $("input[name='phone']").val()
    //     $("input[name='email']").val()
    // });
    $("input[name='name']").blur(function(){
        var inputName = $(this).val();
        if(inputName.length >= 50){
            // $(this).css("border-color","red");
            $(this).addClass('notpermit');
        }
    })
    $("input[name='phone']").blur(function(){
        var inputPhone = $(this).val();
        if(inputPhone.length < 6 || inputPhone.length > 16 || isNaN(inputPhone)){
            // $(this).css("border-color","red");
            $(this).addClass('notpermit');
        }
    })
    $('tr.row').on("click",function(){
        // $(this).children('td').css("color","red");
        $("#form2 input[name='name']").val($(this).children('td:nth-child(1)').text())
        $("#form2 input[name='phone']").val($(this).children('td:nth-child(2)').text())
        $("#form2 input[name='email']").val($(this).children('td:nth-child(3)').text())
    });
    $('#form2').submit(function(event){
        event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting
        var name = $("#form2 input[name='name']").val();
        var phone = $("#form2 input[name='phone']").val();
        var email = $("#form2 input[name='email']").val();
        if ($('#form2 input').hasClass('notpermit')){
            alert('Error! Input again');
            return
        } else
        alert(`Form submitted!! \nname:${name} \nphone:${phone} \nemail:${email}`);
    });
})

