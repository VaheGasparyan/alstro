import styles from './style.module.scss';
import Slider from '../Slider/Slider';
import { sliderImages, sliderImagesSecond } from '@/app/constants/images';
import React from 'react';

interface IsliderBlockProp {
    scrollRef: React.RefObject<HTMLDivElement>
};



const SliderBlock: React.FC<IsliderBlockProp> = ({scrollRef}) => {
    return (
        <div ref={scrollRef} className={styles.container}>
            <div className={styles.text_block}>
                <h1 style={{textTransform: 'uppercase'}}>Экземпляры наших цветов</h1>
                <span>Перетащите ползунок влево или вправо, чтобы увидеть результат "до" и "после"</span>
            </div>
        <div>
            {sliderImages.map((item,index) => {
            return (
                <div key={index}>
                     <Slider before={item.before} after={item.after}/>
                </div>
            )
        })}
        </div>

        <div>
            {sliderImagesSecond.map((item,index) => {
            return (
                <div key={index}>
                     <Slider before={item.before} after={item.after}/>
                </div>
            )
        })}
        </div>
        </div>
    )
};


export default SliderBlock;