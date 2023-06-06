import locationImg1 from "/public/images/roller-school/roller-4.webp"
import locationImg2 from "/public/images/roller-school/roller-3.webp"
import locationImg3 from "/public/images/roller-school/roller-5.webp"

type LocationsData = {
 name: string;
    srcImage: string;
    srcLocation: string;
}[];

export const locations: LocationsData = [
    {
        name: "Паркове Місто",
        srcImage: locationImg1,
        srcLocation: 'https://goo.gl/maps/QSf1foye2cvEFmLW7?coh=178571&entry=tt'
    },
    {
        name: "ТЦ Променада",
        srcImage: locationImg2,
       srcLocation: 'https://goo.gl/maps/kHuyPc9pXbD1dCJGA?coh=178571&entry=tt'
    },
    {
        name: "Парк Наталка",
        srcImage: locationImg3,
        srcLocation: 'https://goo.gl/maps/jTr1UFR1DT4rJ5uF8?coh=178571&entry=tt'
    },
];