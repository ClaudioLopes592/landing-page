"use client"

import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import logo from '@/assets/logo.svg'
import styles from '@/components/header/styles.module.scss'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"

export function Header() {

    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <header className={styles.header}>
            <nav className={styles.headerContent}>
                <div className={styles.headerIcons}>
                    <Link href={'https://www.instagram.com/'} target="_blank">
                        <FaInstagram className={styles.icons} data-aos="fade-down" data-aos-delay="150" />
                    </Link>
                    <Link href={'https://br.linkedin.com/'} target="_blank">
                        <FaLinkedin className={styles.icons} data-aos="fade-down" data-aos-delay="250" />
                    </Link>
                    <Link href={'https://www.facebook.com/?locale=pt_BR'} target="_blank">
                        <FaFacebook className={styles.icons} data-aos="fade-down" data-aos-delay="400" />
                    </Link>
                </div>
                <div className={styles.headerLogo} data-aos="fade-up" data-aos-delay="400">
                    <Image
                        data-aos="flip-up"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                        src={logo}
                        alt="Logo do site"
                        priority
                        quality={100}
                    />
                </div>
                <div>
                    <Link href={'#'}>
                        <button className={styles.headerButton} data-aos="fade-down" data-aos-delay="150">
                            Agendar horário
                        </button>
                    </Link>
                </div>
            </nav>
            <main className={styles.hero} data-aos="fade-up" data-aos-delay="400">
                <h1>ESTILO É UM REFLEXO DE SUA ATITUDE E SUA PERSONALIDADE.</h1>
                <p>Horário de funcionamento: 09:00 às 19:00</p>
                <Link href={'#'} className={styles.buttonContact} target="_blank">
                    Agendar horário
                </Link>
            </main>
        </header>
    )
}