'use client'
import React from 'react'

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

export const photos = [
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