document.addEventListener('DOMContentLoaded', function() {
    const API_BASE_URL = "https://example.com/api"; // Замените на ваш серверный URL

    // Функция для обновления баланса на странице
    function updateBalance(newValue) {
        document.querySelector('.balance-number').textContent = newValue;
    }

    // Функция для загрузки баланса с сервера
    async function fetchBalance() {
        try {
            const response = await fetch(`${API_BASE_URL}/get-balance`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Ошибка загрузки баланса: ${response.statusText}`);
            }
            const data = await response.json();
            updateBalance(data.balance); // Обновляем баланс на странице
        } catch (error) {
            console.error("Ошибка при загрузке баланса:", error);
        }
    }

    // Функция для добавления билетов после просмотра рекламы
    async function addRewardedTickets() {
        try {
            // Здесь должна быть логика показа рекламы
            alert("Рекламное видео завершено!"); // Замените на SDK вашей рекламной платформы

            // Добавляем билеты на сервере
            const response = await fetch(`${API_BASE_URL}/add-tickets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tickets: 25 }),
            });
            if (!response.ok) {
                throw new Error(`Ошибка добавления билетов: ${response.statusText}`);
            }
            const data = await response.json();
            updateBalance(data.newBalance); // Обновляем баланс на странице
        } catch (error) {
            console.error("Ошибка при добавлении билетов:", error);
        }
    }

    // Загружаем баланс при загрузке страницы
    fetchBalance();

    // Обработчик нажатия на кнопку просмотра рекламы
    const rewardedAdBtn = document.getElementById('rewarded-ad-btn');
    rewardedAdBtn.addEventListener('click', addRewardedTickets);
});

