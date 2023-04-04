//-----------------------변수
//1. KR
const kr_lnb = document.querySelector('header .right > li:first-child')
const kr_lnb_open = document.querySelector('header .lang')
//2. 전체메뉴+닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')
//3. ACC gnb + sub
const nav_acc = document.querySelectorAll('.nav > ul > li')
const nav_acc_sub = document.querySelectorAll('.nav > ul > li > .sub')
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
//4. main - right_popup===========
const rightpop = document.querySelector('main #right_popup')
const popup = document.querySelector('main #right_popup #popup_btn a:first-child')
const contents = document.querySelector('main #right_popup .contents')
console.log(popup,contents)
//1. right 500 숨기기
rightpop.style.transform = 'translateX(500px)'
//2. pop_btn 클릭 -> right 보이기

//------------------------------event
//1. 이벤트 실행 전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display='none'
kr_lnb_open.style.display='none'
all_nav_open.style.display='none'
nav_acc_sub[0].style.display='none'
//2. 햄버거메뉴 클릭 시 전체 메뉴 나오기
all_nav.addEventListener('click', function(){
    all_nav_open.style.display='block'
})
//3. 닫기클릭 시 전체메뉴 숨기기
all_nav_close.addEventListener('click', function(){
    all_nav_open.style.display='none'
})
//4. 메뉴에 마우스 오버 시 서브 메뉴 보이기
//mouseover, mouserout
nav_acc[12].addEventListener('mouseover', function(){
    nav_acc_sub[0].style.display='block'
})
//5. 메뉴에 마우스 나갈 시 서브 메뉴 숨기기
nav_acc[12].addEventListener('mouseout', function(){
    nav_acc_sub[0].style.display='none'
})
//6. 메뉴에 마우스 오버 시 서브 메뉴 보이기
kr_lnb.addEventListener('mouseover', function(){
    kr_lnb_open.style.display='block'
})
//7. 메뉴에 마우스 나갈 시 서브 메뉴 숨기기
kr_lnb.addEventListener('mouseout', function(){
    kr_lnb_open.style.display='none'
})
//8. 메뉴에 클릭 시 전체 메뉴 숨기기
popup.addEventListener('click', function(){
    rightpop.style.transition = 'all 0.5s'
    rightpop.style.transform = 'translateX(0)'
})
popup.addEventListener('mousedown', function(){
    rightpop.style.transition = 'all 0.5s'
    rightpop.style.transform = 'translateX(500px)'
})