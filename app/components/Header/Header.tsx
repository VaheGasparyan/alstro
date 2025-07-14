'use client';

import styles from './style.module.scss';
import { useEffect, useState, useRef } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo/logo.png';
import Image from 'next/image';
import Head from 'next/head';

interface IMenuItem {
    name: string;
    scrollName: string;
}
const menuItems: IMenuItem[] = [
    { name: 'Экземпляры наших цветов', scrollName: 'beforeAfter' },
    { name: 'Фотографии', scrollName: 'photos' },
    { name: 'Контакты', scrollName: 'contacts' },
    { name: 'О нас', scrollName: 'aboutus' }
];

interface IheraderProp {
    handleScroll: (scrollName: string) => void
}

export const Header: React.FC<IheraderProp> = ({ handleScroll }) => {

    const [isOpenMenue, setIsOpenMenue] = useState<boolean>(true);
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const modalRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (isOpenMenue && modalRef.current) {
            const firstItem = modalRef.current.querySelector('li');
            if (firstItem) {
                (firstItem as HTMLElement).focus();
            }
        }
    }, [isOpenMenue]);

    useEffect(() => {
        if (typeof window !== "undefined") {

            const handleScroll = () => {
                setIsScroll(window.scrollY > 0);
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);


    const closeMenue = () => {
        const menue = document.querySelector(`.${styles.header_menu_active}`);

        if (menue) {
            menue.classList.add(styles.close_menu);

            setTimeout(() => {
                setIsOpenMenue(true);
                menue.classList.remove(styles.close_menu);
            }, 500);
        }
    };

    const toggleMenu = () => {
        if (isOpenMenue) {
            window.scrollBy(0,1);
            setIsOpenMenue(false);
        } else {
            closeMenue()
        }
    };



    return (
        <>
            <Head>
                <title>Новая Походка - Главная страница</title>
                <meta name="description" content="Добро пожаловать на сайт Новая Походка. Мы предоставляем услуги по преобразованию и уходу за обувью." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Новая Походка - Главная страница" />
                <meta property="og:description" content="Добро пожаловать на сайт Новая Походка. Мы предоставляем услуги по преобразованию и уходу за обувью." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.yoursite.com" />
                <meta property="og:image" content="/path/to/logo.png" />
            </Head>

            <header className={`${styles.wrapper} ${isScroll || isOpenMenue ? styles.headerScroll : ""}`}>
                <div className={`container ${styles.header}`}>
                    <div onClick={() => handleScroll('main')} style={{
                        cursor: 'pointer'
                    }}>
                        <Image
                            // width={58}
                            // height={50}
                            alt="Logo"
                            src={logo}
                            // className={styles.logo__img}
                        />
                    </div>
                    {
                        <nav className={isOpenMenue ? styles.header__menu : styles.header_menu_active}>
                            <ul ref={modalRef} className={isOpenMenue ? styles.menu__list : styles.active}>

                                {menuItems.map((val) => {
                                    return (
                                        <li key={val.name} className={styles.list__item}
                                            role="menuitem">
                                            <p onClick={() => {
                                                handleScroll(val.scrollName)
                                                closeMenue()
                                            }}>{val.name}</p>
                                        </li>
                                    )
                                })}
                            </ul>

                        </nav>
                    }
                </div>
                <div className={styles.mobile_menue}>
                    {
                        isOpenMenue ? <IoMenu className={styles.open_menue_item} color='#d7ccc8' size={25} onClick={toggleMenu} /> :
                            <IoMdClose className={styles.menue_toggle_item} color='#d7ccc8' size={25} onClick={toggleMenu} />

                    }

                </div>
            </header>
        </>
    )
}
