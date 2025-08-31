document.addEventListener('visibilitychange',function(){
    if(document.visibilityState === 'hidden'){
        document.title = 'Come back!'
    }else{
        document.title = 'Portfolio || Ehraj Ahmad'
    }
})


document.addEventListener('keydown', function(event){
    if(event.ctrlKey && (event.key == 'u' || event.key == 'U')){
        event.preventDefault();
    }
})