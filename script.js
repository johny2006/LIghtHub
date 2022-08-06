window.onscroll = () =>{
    navbar.classlist.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.back').classList.add('active');
    }else{
        document.querySelector('.back').classList.remove('active');

    }
}
    
    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.back').classList.add('active');
        }else{
            document.querySelector('.back').classList.remove('active');      
        }
    }