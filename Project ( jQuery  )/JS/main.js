let lettersArray="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
$(document).ready(function(){
    // Valid Input To Accept Only Numbers
    $('#input').keypress(function(event){
        let pat=/[0-9]/;
        if(!(pat.test(event.key))){
            event.preventDefault();
        }
    });
            
    $('#button-addon2').click(function(){
        $('#char-img').empty();
        $('#char-button').empty();
        // Handel Onclick button if number not between 1 & 26
        if(!($('#input').val() >=1 && $('#input').val() <=26)){
            $('#invalid-input').text('Invalid Number Of Characters').css('color','red');
        }
        else{
            $('#invalid-input').text('');
            let emptyArr=[];
            // select characters randomly and add them as buttons
            for(let i=0 ; ; i++){
                if(emptyArr.length == $('#input').val()){
                    break;
                }
                else{
                    let newLetter=lettersArray[Math.floor(Math.random() * 26)];
                    if(emptyArr.includes(newLetter)){
                        continue;
                    }
                    else{
                        emptyArr.push(newLetter);
                        // add characters as buttons
                        $('#char-button').append('<button class="btn me-3 mb-3 show-img">'+newLetter+'</button>');
                        // show characters images
                        $('.show-img').click(function(){
                            $('#audio').trigger('play');
                            $('#char-img').empty();
                            $('#char-img').append('<img src="Images/char/'+$(this).text()+'.jpg">');
                        });
                    }
                }
            }
        }
    });
})