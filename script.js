document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // 年份篩選邏輯
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 切換按鈕 active 狀態
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // 顯隱卡片
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-year') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});