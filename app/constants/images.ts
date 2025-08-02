import photo1 from '../assets/alstro-photo/1.jpg';
import photo2 from '../assets/alstro-photo/2.jpg';
import photo3 from '../assets/alstro-photo/3.jpg';
import photo4 from '../assets/alstro-photo/4.jpg';
import photo5 from '../assets/alstro-photo/5.jpg';
import photo6 from '../assets/alstro-photo/6.jpg';
import photo7 from '../assets/alstro-photo/7.jpg';
import photo8 from '../assets/alstro-photo/8.jpg';

interface Isliders {
    before: string,
    after: string,
}

export const sliderImages: Isliders[] = [
    {before: photo5.src, after: photo6.src},
    {before: photo3.src, after: photo4.src},
];

export const sliderImagesSecond: Isliders[] = [
    {before: photo1.src, after: photo2.src},
    {before: photo7.src, after: photo8.src},
];