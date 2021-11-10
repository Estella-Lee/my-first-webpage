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



// window.onload = () => {
//     const goTop = () => {
//         window.addEventListener('scroll', () => {
//             if (document.querySelector('html').scrollTop > 200) {
//                 document.getElementsById('topBtn').style.display = 'block';
//             } else {
//                 document.getElementsById('topBtn').style.display = 'none';
//             }
//         });
    
//         document.getElementsById('topBtn').addEventListener('click', () => {
//             window.scrollTo({
//                 top: 0,
//                 left: 0,
//                 behavior: 'smooth'
//             });
//         })
//     };
//     goTop();
// }



// window.addEventListener('scroll', () => {
//     let top = document.querySelector('topBtn');
    
//     if (this.scrollTop() > 200) {
//         top.style.display = 'block';
//     } else {
//         top.style.display = 'none';
//     }
// });

// top.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.scrollTo({top: 0, behavior: 'smooth'});
// })
