document.addEventListener('DOMContentLoaded',function(){
    let reload = document.querySelector('.logo');
    let showmore = document.querySelector('.seven-li');
    let downblock = document.querySelector('.left-down-block');
    let scrol = document.querySelector('.left-menu'); 

    

    reload.addEventListener('click',()=>{
        window.location.href='file:///C:/Users/Davit/Desktop/newgit/programireba2/indexx.html'
    });

    showmore.addEventListener('click',()=>{
        
            if(downblock.style.visibility === ''){
                downblock.style.visibility = 'visible'
            }else if(downblock.style.visibility === 'visible'){
                downblock.style.visibility = ''
            }
        
        
    })
})