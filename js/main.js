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


