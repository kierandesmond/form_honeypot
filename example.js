jQuery(document).ready(function($){
    /* Write your Public custom_public_head jQuery here! */

    if(jQuery("#et_pb_contact_username_hp_1")) // change with your input field name
        {
            
            jQuery('#et_pb_contact_username_hp_1').on('input',function(e){ // change with your input field name
                if(jQuery(this).val())
                {
                    console.log("Disabling form muahaha");
                    jQuery(".et_pb_contact_submit").prop( "disabled", true ); // change with your submit button
                    jQuery('#et_pb_contact_username_hp_1').keydown(function (e) {
                        if (e.keyCode == 13) { // listen for the enter key incase bot sends 'enter' key
                           $("#formABC").submit(function (e)  // change with your form name

                            //stop submitting the form to see the disabled button effect
                            e.preventDefault();

                            //disable the submit button
                            $("#btnSubmit").attr("disabled", true);

                            return true;

                        });
                            e.preventDefault();
                            return false;
                        }
                  });
                }    
            });
            
               
        }
}); // document ready
