const animItems = document.querySelectorAll('.anim-items');

if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScrool(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItemsHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            
            if ((pageYoffset > animItemOffset-animItemPoint) && pageYoffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
        }
    }
}
function offset(el){
    const rect = el.gotBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    return{
        top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScrool()
    }, 300);
}