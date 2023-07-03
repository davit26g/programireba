document.addEventListener('DOMContentLoaded',function(){
    let reload = document.querySelector('.logo');
    let showmore = document.querySelector('.seven-li');

    reload.addEventListener('click',()=>{
        window.location.href='file:///C:/Users/Davit/Desktop/chtoto/programireba/index.html'
    });

    showmore.addEventListener('click',()=>{
        let downblock = document.querySelector('.left-down-block');
            if(downblock.style.visibility = 'hidden'){
                downblock.style.visibility = 'visible'
            }else if(downblock.style.visibility = 'visible'){
                downblock.style.visibility = 'hidden'
            }
        
    })
})