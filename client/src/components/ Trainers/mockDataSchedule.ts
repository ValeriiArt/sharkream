
export type DateProperty = {
    item: string;
}[];

export type ScheduleData = {
    name: string;
    date: DateProperty;
}[];


export const schedule: ScheduleData = [
    // {
    //     name: 'Кондратьєв Роман',
    //     date: [
    //         { item: 'Пн/Ср/Пт 18:30-19:30 Файна' },
    //         { item: 'Вт/Чт 17:30-18:30 Паркове' },
    //         { item: 'Нд 12:00-13:00 Старша гр.' },
    //         { item: 'Нд 13:00-14:00 Молодша гр.' },
    //     ]
    // },
    {
        name: 'Кравченко Микола',
        date: [
            { item: 'Пн/Ср/Пт 18:30-19:40 Файна таун' },
            { item: 'Нд 12:00-13:00 Стараша гр.' },
            { item: 'Нд 13:00-14:00 Молодша гр.' },
        ]
    },
    {
        name: 'Проц Світлана',
        date: [
            { item: 'Пн/Ср/Пт 18:00-19:00 Про гр.' },
            { item: 'Пн/Ср/Пт 19:00-20:00 Стараша+Молодша ' },
        ]
    },
    {
        name: 'Філіп’єва Марія',
        date: [
            { item: 'Пн/Ср/Пт 18:30-19:30 Файна' },
            { item: 'Вт/Чт 17:30-18:30 Паркове' },
            { item: 'Нд 12:00-13:00 Старша гр.' },
            { item: 'Нд 13:00-14:00 Молодша гр.' },
        ]
    },
    {
        name: 'Усик Іванна',
        date: [
            { item: 'Пн/Ср/Пт 17:40-18:40 Старша гр.' },
            { item: 'Пн/Ср/Пт 18:40-19:40 Молодша гр.' },
            { item: 'Вт/Чт 18:00-19:00 Середня гр.' },
        ]
    },
];