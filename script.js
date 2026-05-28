// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 장바구니 버튼 클릭 이벤트
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function () {
        if (this.textContent === '장바구니') {
            alert('장바구니에 추가되었습니다!');
        } else if (this.textContent === '상담 신청') {
            alert('상담 신청이 접수되었습니다. 곧 연락드리겠습니다.');
        }
    });
});

// 폼 제출 처리
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('메시지가 전송되었습니다. 감사합니다!');
        this.reset();
    });
}

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .feature').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});
