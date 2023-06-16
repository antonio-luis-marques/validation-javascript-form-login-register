$("input:checkbox").on('click', function() {
// in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
        // the name of the box is retrieved using the .attr() method
        // as it is assumed and expected to be immutable
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        // the checked state of the group/box on the other hand will change
        // and the current value is retrieved using .prop() method
        $(group).prop("checked", false);
        $box.prop("checked", true);
        var password = document.getElementsByClassName("register-password");
        for (let index = 0; index < password.length; index++) {
            if (password[index].type === 'password') {
                password[index].type = 'text';
            }else{
                password[index].type = 'password';
            }
            
        }
    } else {
        $box.prop("checked", false);
        var password = document.getElementsByClassName("register-password");
        for (let index = 0; index < password.length; index++) {
            
            password[index].type = 'password';
            
            
        }
    }
});