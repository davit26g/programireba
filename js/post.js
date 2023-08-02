document.addEventListener('DOMContentLoaded',function(){
    let like = document.querySelector('.like');
    let likeoff = document.querySelector('.likeoff');
    let likeon = document.querySelector('.likeon');    

    /* let content = document.querySelector('.content');

    for(){
        let posts = document
    } */

    like.addEventListener('click',()=>{
        if(likeoff.style.visibility === ''){
            likeoff.style.visibility = 'hidden';
            likeon.style.visibility = 'visible';
            like.style.color = 'blue';
        }else{
            likeoff.style.visibility = '';
            likeon.style.visibility = 'hidden';
            like.style.color = '';
        }
    })
})