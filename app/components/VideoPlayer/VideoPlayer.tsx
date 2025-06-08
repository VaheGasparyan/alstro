'use client'
import React from 'react';
import styles from './style.module.scss';

const VideoPlayer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>Сердце нашего производства</span>
      </div>
      <div className={styles.playerWrapper}>
        <video className={styles.player} controls width="100%" height="100%">
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};


export default VideoPlayer;
