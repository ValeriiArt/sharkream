import romaImg from '/public/images/trainers/roma.webp';
import mykolaImg from '/public/images/trainers/mykola.webp';
import svitlanaImg from '/public/images/trainers/svitlana.webp';
import mariiaImg from '/public/images/trainers/mariia.webp';
import ivannaImg from '/public/images/trainers/ivanna.webp';

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
        imageUrl: romaImg,
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
        imageUrl: mykolaImg,
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
        imageUrl: svitlanaImg,
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
        imageUrl: mariiaImg,
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
        imageUrl: ivannaImg,
        disciplines: [
            { item: 'базове катання' },
            { item: 'базові слайди' },
            { item: 'базове катання в скейт-парку' },
        ]
    },
];