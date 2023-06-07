
export type DisciplinesData = {
    item: string;
}[];

export type TrainersData = {
    name: string;
    rank: string;
    experience: string;
    imageUrl: string;
    disciplines: DisciplinesData;
}[];


export const trainers: TrainersData = [
    {
        name: 'Кондратьєв Роман',
        rank: 'Старший тренер, засновник.',
        experience: 'Чемпіон України, займається тренерством з 2007 року.',
        imageUrl: '/images/trainers/roma.webp',
        disciplines: [
            { item: 'катання в скейт парку' },
            { item: 'катання в рампі' },
            { item: 'підготовка до змагань' },
            { item: 'базове катання по місту' },
            { item: 'стрибки, слайди' },
        ]
    },
    {
        name: 'Кравченко Микола',
        rank: 'Тренер по роликам та скейтборрдингу.',
        experience: 'Стаж тренерства: 2 роки',
        imageUrl: '/images/trainers/mykola.webp',
        disciplines: [
            { item: 'базові основи катання' },
            { item: 'пересування по місту' },
            { item: 'катання в скейт-парку.' },
        ]
    },
    {
        name: 'Проц Світлана',
        rank: 'Тренер по роликам ',
        experience: 'Досвід роботи 5 років.',
        imageUrl: '/images/trainers/svitlana.webp',
        disciplines: [
            { item: 'основні навички катання на роликах по місту' },
            { item: 'початкові елементи слалому' },
            { item: 'базове катання в скейт-парку, рампі.' },
        ]
    },
    {
        name: 'Філіп’єва Марія',
        rank: 'Тренер',
        experience: 'Досвід роботи 2 роки.',
        imageUrl: '/images/trainers/mariia.webp',
        disciplines: [
            { item: 'базове катання' },
            { item: 'базові слайди' },
            { item: 'катання в скейт-парку' },
        ]
    },
    {
        name: 'Усик Іванна',
        rank: 'Тренер ',
        experience: 'Досвід роботи 2 роки',
        imageUrl: '/images/trainers/ivanna.webp',
        disciplines: [
            { item: 'базове катання' },
            { item: 'базові слайди' },
            { item: 'базове катання в скейт-парку' },
        ]
    },
];