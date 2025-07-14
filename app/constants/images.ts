import photo2 from '../assets/alstro-photo/2.jpg';
import photo13 from '../assets/alstro-photo/13.jpg';
import photo23 from '../assets/alstro-photo/23.jpg';
import photo24 from '../assets/alstro-photo/24.jpg';
import photo26 from '../assets/alstro-photo/26.jpg';
import photo27 from '../assets/alstro-photo/27.jpg';
import photo30 from '../assets/alstro-photo/30.jpg';
import photo34 from '../assets/alstro-photo/34.jpg';
import photo31 from '../assets/alstro-photo/31.jpg';
import photo40 from '../assets/alstro-photo/40.jpg';


interface Isliders {
    before: string,
    after: string,
}

export const sliderImages: Isliders[] = [
    {before: photo2.src, after: photo13.src},
    {before: photo23.src, after: photo24.src},
    {before: photo26.src, after: photo27.src},
    {before: photo30.src, after: photo34.src},
    {before: photo31.src, after: photo40.src},
];