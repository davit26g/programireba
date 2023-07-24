document.addEventListener('DOMContentLoaded',function(){
    let reload = document.querySelector('.logo');
    let showmore = document.querySelector('.seven-li');
    let downblock = document.querySelector('.left-down-block');
    let middleblock = document.querySelector('.left-middle-block');
    let menu = document.querySelector('.menu');
    let showmenu = document.querySelector('.right-menu');
    let messengericon = document.querySelector('.messenger-icon');
    let messenger = document.querySelector('.messenger');
    let notificationIcon = document.querySelector('.notifications-icon');
    let notifications = document.querySelector('.notifications');
    let accounticon = document.querySelector('.account');
    let account = document.querySelector('.profile-menu');

    

    reload.addEventListener('click',()=>{
        window.location.href='file:///C:/Users/Davit/Desktop/newgit/programireba2/indexx.html'
    });

    showmore.addEventListener('click',()=>{
            if(downblock.style.visibility === ''){
                middleblock.style.visibility = 'hidden';
                downblock.style.visibility = 'visible';
            }else if(downblock.style.visibility === 'visible'){
                middleblock.style.visibility = 'visible';
                downblock.style.visibility = ''
            }
    })
    menu.addEventListener('click',()=>{
        if(showmenu.style.visibility === ''){
            showmenu.style.visibility = 'visible';
            messenger.style.visibility = '';
            notifications.style.visibility = '';
            account.style.visibility = '';
        }else{
            showmenu.style.visibility = '';

        }
    })
    messengericon.addEventListener('click',()=>{
        if(messenger.style.visibility === ''){
            messenger.style.visibility = 'visible';
            showmenu.style.visibility = '';
            notifications.style.visibility = '';
            account.style.visibility = '';
        }else{
            messenger.style.visibility = '';
        }
    })
    notificationIcon.addEventListener('click',()=>{
        if(notifications.style.visibility === ''){
            notifications.style.visibility = 'visible';
            messenger.style.visibility = '';
            showmenu.style.visibility = '';
            account.style.visibility = '';
        }else{
            notifications.style.visibility = '';
        }
    })
    accounticon.addEventListener('click',()=>{
        if(account.style.visibility === ''){
            account.style.visibility = 'visible';
            notifications.style.visibility = '';
            messenger.style.visibility = '';
            showmenu.style.visibility = '';
        }else{
            account.style.visibility = '';
        }
    })
})