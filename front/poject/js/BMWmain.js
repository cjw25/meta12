// Mobile menu toggle
const menuBtn = document.querySelector('[data-open="menu"]');
const drawer = document.getElementById('drawer');

if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        drawer.setAttribute('aria-hidden', String(!isOpen));
    });

    // drawer link click -> close
    drawer.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
            drawer.classList.remove('is-open');
            menuBtn.setAttribute('aria-expanded', "false");
            drawer.setAttribute('aria-hidden', "true");
        });
    });
}

// Search modal
const modal = document.getElementById('searchModal');
const openSearch = document.querySelector('[data-open="search"]');
const closeTargets = document.querySelectorAll('[data-close="search"]');

function openModal() {
    modal?.classList.add('is-open');
    modal?.setAttribute('aria-hidden', 'false');
}
function closeModal() {
    modal?.classList.remove('is-open');
    modal?.setAttribute('aria-hidden', 'true');
}

openSearch?.addEventListener('click', openModal);
closeTargets.forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Lead form demo submit
const leadForm = document.getElementById('leadForm');
leadForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(leadForm).entries());
    console.log('상담 요청 데이터:', data);
    alert('상담 요청이 접수되었습니다! (데모: 콘솔 확인)');
    leadForm.reset();
});
