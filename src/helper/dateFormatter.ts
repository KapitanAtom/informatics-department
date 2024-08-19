export const formatDate = (date = new Date()) => {
    const months = [
        'Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня',
        'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}