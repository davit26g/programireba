document.addEventListener('DOMContentLoaded',function(){
    let reload = document.querySelector('.logo');
    let showmore = document.querySelector('.seven-li');
    let downblock = document.querySelector('.left-down-block');

    reload.addEventListener('click',()=>{
        window.location.href='file:///C:/Users/Davit/Desktop/chtoto/programireba/index.html'
    });

    showmore.addEventListener('click',()=>{
        
            if(downblock.style.visibility === ''){
                downblock.style.visibility = 'visible'
            }else if(downblock.style.visibility === 'visible'){
                downblock.style.visibility = ''
            }
        
    })
})