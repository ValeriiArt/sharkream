

export type DescriptionData = {
    item: string;
}[];

export type TravelsData = {
 name: string;
    srcImage: string;
    srcLocation: string;
    description: DescriptionData;
}[];

export const travels: TravelsData = [
    {
        name: "X-Park",
        srcImage: "/images/camp/x-park.webp",
        srcLocation: 'https://goo.gl/maps/QSf1foye2cvEFmLW7?coh=178571&entry=tt',
        description: [
                {item: 'Незабутні квести, під час яких можна покращити роботу в команді.'},
                {item: 'Тренування на батутах'},
                {item:   'Тренування на роликах'},
                {item:   'Купання в басейні'},
                {item:   ' Незабутні враження на все літо'},
        ]
    },
    {
        name: "Хвиля",
        srcImage: "/images/camp/img_2916.webp",
        srcLocation: 'https://goo.gl/maps/kHuyPc9pXbD1dCJGA?coh=178571&entry=tt',
       description: [
                {item: 'За декілька днів в таборі,ваша дитина отримає:'},
                {item: 'Щоденні тренування з фізичної підготовки'},
                {item:   'Щоденні тренування на роликах'},
                {item:   'Купання в басейні'},
               {item: ' Квести,спрямовані на роботу в команді'},
               {item: ' Та ще багато веселощів'},
        ]
    },
    {
        name: "Джерело",
        srcImage: "/images/camp/dzherelo-camp.webp",
        srcLocation: 'https://goo.gl/maps/jTr1UFR1DT4rJ5uF8?coh=178571&entry=tt',
        description: [
                {item: 'За декілька днів в таборі,ваша дитина отримає:'},
                {item: 'Щоденні тренування з фізичної підготовки'},
                {item:   'Щоденні тренування на роликах'},
                {item:   'Похід в мотузковий парк'},
                {item:   ' Щоденні активності у вигляді ігор в футбол,волейбол та інші види активності'},
        ]
    },
];