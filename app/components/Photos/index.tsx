'use client'
import React from 'react'

import photo1 from '../../assets/alstro-photo/1.jpg';
import photo3 from '../../assets/alstro-photo/3.jpg';
import photo5 from '../../assets/alstro-photo/5.jpg';
import photo6 from '../../assets/alstro-photo/6.jpg';
import photo7 from '../../assets/alstro-photo/7.jpg';
import photo8 from '../../assets/alstro-photo/8.jpg';
import photo9 from '../../assets/alstro-photo/9.jpg';
import photo10 from '../../assets/alstro-photo/10.jpg';
import photo11 from '../../assets/alstro-photo/11.jpg';
import photo12 from '../../assets/alstro-photo/12.jpg';
import photo14 from '../../assets/alstro-photo/14.jpg';
import photo15 from '../../assets/alstro-photo/15.jpg';
import photo16 from '../../assets/alstro-photo/16.jpg';
import photo17 from '../../assets/alstro-photo/17.jpg';
import photo18 from '../../assets/alstro-photo/18.jpg';
import photo19 from '../../assets/alstro-photo/19.jpg';
import photo20 from '../../assets/alstro-photo/20.jpg';
import photo21 from '../../assets/alstro-photo/21.jpg';
import photo22 from '../../assets/alstro-photo/22.jpg';
import photo25 from '../../assets/alstro-photo/25.jpg';
import photo28 from '../../assets/alstro-photo/28.jpg';
import photo32 from '../../assets/alstro-photo/32.jpg';
import photo33 from '../../assets/alstro-photo/33.jpg';
import photo35 from '../../assets/alstro-photo/35.jpg';
import photo36 from '../../assets/alstro-photo/36.jpg';
import photo37 from '../../assets/alstro-photo/37.jpg';
import photo38 from '../../assets/alstro-photo/38.jpg';
import photo39 from '../../assets/alstro-photo/39.jpg';
import photo41 from '../../assets/alstro-photo/41.jpg';
import photo42 from '../../assets/alstro-photo/42.jpg';
import photo43 from '../../assets/alstro-photo/43.jpg';
import photo45 from '../../assets/alstro-photo/45.jpg';
import photo46 from '../../assets/alstro-photo/46.jpg';
import photo47 from '../../assets/alstro-photo/47.jpg';
import photo48 from '../../assets/alstro-photo/48.jpg';
import photo49 from '../../assets/alstro-photo/49.jpg';
import photo50 from '../../assets/alstro-photo/50.jpg';
import photo51 from '../../assets/alstro-photo/51.jpg';
import photo52 from '../../assets/alstro-photo/52.jpg';
import photo53 from '../../assets/alstro-photo/53.jpg';

export const photos = [
  photo1,
  photo3,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo25,
  photo28,
  photo32,
  photo33,
  photo35,
  photo36,
  photo37,
  photo38,
  photo39,
  photo41,
  photo42,
  photo43,
  photo45,
  photo46,
  photo47,
  photo48,
  photo49,
  photo50,
  photo51,
  photo52,
  photo53,
];

import styles from './style.module.scss';
import { useState } from 'react';

interface IPhotos {
    scrollRef: React.RefObject<HTMLDivElement>
}

const Photos:  React.FC<IPhotos> = ({ scrollRef }) => {
    const localImages = photos.slice(0, 2);
    const [images, setImages] = useState(localImages);
    const [count, setCount] = useState(0);

    const handleShowMoreImages = () => {
        setImages(prevState => photos.slice(0, prevState.length + 2));
        setCount(prevState => prevState + 2);
    };

    return (
        <div ref={scrollRef} className={styles.container}>
            <h2>Мир альстромерий</h2>
           <div className={styles.images_wrapper}>
             {
                images.map((item, index) => {
                    return <div className={styles.image_wrapper} key={index}>
                        <img src={item.src} alt='alstro image' />
                    </div>
                })
            }
           </div>
           {
            count !== 38 && <div onClick={handleShowMoreImages} className={styles.button_wrapper}>
                <span>Ещё</span>
           </div>
           }
        </div>
    )
};

export default Photos;