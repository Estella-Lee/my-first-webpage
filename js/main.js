// 모바일 토글 버튼 관련
const toggleBtn = document.querySelector('.toggleBtn');
const mainMenu = document.querySelector('.mainMenu');
const menu = document.querySelector('.gnb');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.addEventListener('click', removeToggleMenu);
window.addEventListener('resize', removeToggleMenu);

function removeToggleMenu() {
    toggleBtn.classList.remove('active');
    mainMenu.classList.remove('active');
    menu.classList.remove('active');
}



// top 버튼 관련
const topBtn = document.getElementById('topBtn');

const scrollFunc = () => {
    let y = window.scrollY;

    if (y > 150) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none'
    }
};

window.addEventListener('scroll', scrollFunc);
    
topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
})


