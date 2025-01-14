import dnk1 from "../../images/dnk/dnk1.JPG";
import dnk2 from "../../images/dnk/dnk2.JPG";
import dnk3 from "../../images/dnk/dnk3.JPG";
import dnk4 from "../../images/dnk/dnk4.JPG";
import dnk5 from "../../images/dnk/dnk5.JPG";
import dnk6 from "../../images/dnk/dnk6.JPG";
import dnk7 from "../../images/dnk/dnk7.JPG";
import dnk8 from "../../images/dnk/dnk8.JPG";
import dnk9 from "../../images/dnk/dnk9.JPG";
import example1 from "../../images/dnk/examples/example1.png"
import example2 from "../../images/dnk/examples/example2.png"
import example3 from "../../images/dnk/examples/example3.png"
import jockey11 from "../../images/dnk/examples/jockey11.png"
import jockey12 from "../../images/dnk/examples/jockey12.png"
import marine11 from "../../images/dnk/examples/marine11.png"
import marine12 from "../../images/dnk/examples/marine12.png"
import preppy11 from "../../images/dnk/examples/preppy11.png"
import safari11 from "../../images/dnk/examples/safari11.png"
import sport11 from "../../images/dnk/examples/sport11.png"
import grange11 from "../../images/dnk/examples/grange11.png"

import sport016 from "../../images/sport/extra/sport016.jpeg";
import sport017 from "../../images/sport/extra/sport017.jpeg";
import grange014 from "../../images/grange/extra/grange14.jpeg";
import grange016 from "../../images/grange/extra/grange16.jpeg";
import preppy07 from "../../images/preppy/extra/preppy7.jpeg";
import preppy031 from "../../images/preppy/extra/preppy31.jpeg";
import jockey09 from "../../images/jockey/extra/jockey9.jpeg";
import jockey014 from "../../images/jockey/extra/jockey14.jpeg";

export const creatingDnk = {
    id: '1',
    segment: 'creatingDNK',
    title: 'ДНК собственного стиля',
    blocks: [
        {
            type: 'photo',
            content: [
                dnk1,
                dnk2,
                dnk3,
                dnk4,
                dnk5,
                dnk6,
                dnk7,
                dnk8,
                dnk9,
            ]
        },
        {
            type: 'title',
            title: 'My mood board',
        },
        {
            type: 'photo',
            title: 'Sport chic',
            content: [
                sport11,
                sport016,
                sport017,
            ]
        },
        {
            type: 'photo',
            title: 'Grange',
            content: [
                grange11,
                grange014,
                grange016,
            ]
        },
        {
            type: 'photo',
            title: 'Safari',
            content: [
                safari11,
            ]
        },
        {
            type: 'photo',
            title: 'Preppy',
            content: [
                preppy11,
                preppy07,
                preppy031,
            ]
        },
        {
            type: 'photo',
            title: 'Marine style',
            content: [
                marine11,
                marine12,
            ]
        },
        {
            type: 'photo',
            title: 'Jockey',
            content: [
                jockey11,
                jockey12,
                jockey09,
                jockey014,
            ]
        },
        {
            type: 'photo',
            title: 'mood board',
            content: [
                example1,
                example2,
                example3,
            ]
        },
    ],
}
