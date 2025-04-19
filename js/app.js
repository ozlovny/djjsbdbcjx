document.addEventListener('DOMContentLoaded', function() {
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.expand();
        Telegram.WebApp.setHeaderColor('#ffffff');
        Telegram.WebApp.backgroundColor = '#f5f5f5';
    }
    
    // Функция для обновления баланса
    function updateBalance(newValue) {
        document.querySelector('.balance-number').textContent = newValue;
    }
    
    // Пример: обновление баланса через 3 секунды
    setTimeout(() => updateBalance(2150), 3000);
});
