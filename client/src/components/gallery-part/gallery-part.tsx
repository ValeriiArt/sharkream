import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import img1 from "../../../public/images/gallery/1.jpg";
import img2 from "../../../public/images/gallery/2.jpg";
import img3 from "../../../public/images/gallery/3.jpg";
import img4 from "../../../public/images/gallery/4.jpg";
import img5 from "../../../public/images/gallery/5.jpg";
import img6 from "../../../public/images/gallery/6.jpg";
import img7 from "../../../public/images/gallery/7.jpg";
import img8 from "../../../public/images/gallery/8.jpg";
import img9 from "../../../public/images/gallery/9.jpg";
import img10 from "../../../public/images/gallery/10.jpg";
import img11 from "../../../public/images/gallery/11.jpg";

export const photos = [
    { src: img2, width: 1600, height: 900 },
    { src: img3, width: 800, height: 600 },
    { src: img10, width: 1600, height: 900 },
    { src: img7, width: 1600, height: 900 },
    { src: img6, width: 800, height: 600 },
    { src: img1, width: 800, height: 600 },
    { src: img11, width: 1600, height: 900 },
    { src: img9, width: 1600, height: 900 },
    { src: img8, width: 1600, height: 900 },
    { src: img5, width: 1600, height: 900 },
    { src: img4, width: 800, height: 600 },
];

// const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// const unsplashLink = (id, width, height) =>
//  `https://source.unsplash.com/${id}/${width}x${height}`;

// const unsplashPhotos = [
//  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
//  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
//  { id: "RkBTPqPEGDo", width: 1080, height: 720 },
//  { id: "Yizrl9N_eDA", width: 1080, height: 721 },
//  { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
//  { id: "Jztmx9yqjBw", width: 1080, height: 607 },
//  { id: "-heLWtuAN3c", width: 1080, height: 608 },
//  { id: "xOigCUcFdA8", width: 1080, height: 720 },
//  { id: "1azAjl8FTnU", width: 1080, height: 1549 },
//  { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
//  { id: "twukN12EN7c", width: 1080, height: 694 },
//  { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
//  { id: "sEXGgun3ZiE", width: 1080, height: 720 },
//  { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
//  { id: "q-motCAvPBM", width: 1080, height: 1620 },
//  { id: "Xn4L310ztMU", width: 1080, height: 810 },
//  { id: "iMchCC-3_fE", width: 1080, height: 610 },
//  { id: "X48pUOPKf7A", width: 1080, height: 160 },
//  { id: "GbLS6YVXj0U", width: 1080, height: 810 },
//  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
//  { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
// ];

// const photos = unsplashPhotos.map((photo) => ({
//  src: unsplashLink(photo.id, photo.width, photo.height),
//  width: photo.width,
//  height: photo.height,
//  srcSet: breakpoints.map((breakpoint) => {
//   const height = Math.round((photo.height / photo.width) * breakpoint);
//   return {
//    src: unsplashLink(photo.id, breakpoint, height),
//    width: breakpoint,
//    height,
//   };
//  }),
// }));

// type Properties = {
//     photos: {
//         src: string,
//         width: number,
//         height: number,
//     }[],
// }

const GalleryPart = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <PhotoAlbum
                layout="columns"
                photos={photos}
                spacing={0}
                padding={4}
                onClick={({ index }) => setIndex(index)}
                componentsProps={{
                    imageProps: {
                        style: { objectFit: "cover", padding: 0, border: "2px #FF7A00 solid" },
                    },
                }}
            />
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}

export default GalleryPart;

