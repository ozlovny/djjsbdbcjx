export default function RewardedAd({ spotId = "322627", onReward, onError }: RewardedAdProps) {
    const showAd = useRef<() => Promise<void> | null>(null);

    useEffect(() => {
        // Инициализируем рекламный движок и подключаем Spot ID
        // @ts-expect-error admanager
        window.initCdTma?.({ id: spotId })
            .then((show: () => Promise<void>) => (showAd.current = show))
            .catch((err: any) => console.log('Ошибка инициализации рекламы:', err));
    }, [spotId]);

    return (
        <button
            onClick={() => {
                if (showAd.current) {
                    showAd.current()
                        .then(() => {
                            console.log('Реклама успешно показана');
                            onReward?.(); // Вызываем callback для награды
                        })
                        .catch((err: any) => {
                            console.error('Ошибка показа рекламы:', err);
                            onError?.(err); // Вызываем callback для обработки ошибок
                        });
                } else {
                    console.error('Реклама не инициализирована');
                }
            }}
        >
            Показать рекламу
        </button>
    );
}
