/**
 * Created by yao on 15/8/4.
 */
(function($){
var currentBg = 0;
setInterval(function(){
    var suffix = currentBg?'.jpg':'.png';
    document.body.style.backgroundImage = 'url(assets/images/demo/bg/'+currentBg+suffix+')';
    currentBg = (currentBg+1)%8;
},10000);
document.addEventListener('DOMContentLoaded',function(){
    var inputElementList = document.querySelectorAll('input[is=md-input]');
    for(var i=0;i < inputElementList.length;i++){
        var inputElement = inputElementList.item(i);
        inputElement.addEventListener('focus',function(){
            $(this).parent().addClass('focused');
        });
        inputElement.addEventListener('blur',function(){
            $(this).parent().removeClass('focused');
        });
        $(inputElement).on('keyup',function(){
            if(this.value){
                $(this).parent().addClass('is-floated');
            }else {
                $(this).parent().removeClass('is-floated');
            }
        });
    }
    document.getElementById('toRegister').addEventListener('click',function(event){
        event.preventDefault();
        $('.outer-container').addClass('register-ui');
    });
    document.getElementById('toLogin').addEventListener('click',function(event){
        event.preventDefault();
        $('.outer-container').removeClass('register-ui');
    });
});
})(jQuery);