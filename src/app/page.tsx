"use client"

import { Header } from "@/components/header"
import { Footer } from '@/components/footer'
import styles from './styles.module.scss'
import Link from "next/link"
import Image from "next/image"
import img from '@/assets/images.svg'
import corte1 from '@/assets/corte1.png'
import corte2 from '@/assets/corte2.png'
import corte3 from '@/assets/corte3.png'
import watssapp from '@/assets/whatssapp.svg'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <>
            <div className={styles.home}>
                <Header />
            </div>
            <section className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.content} data-aos="zoom-in" data-aos-delay="150">
                        <Image
                            src={img}
                            alt="Imagem sobre a barbearia"
                            priority
                            quality={100}
                            className={styles.aboutImg}
                        />
                    </div>
                    <div className={styles.description} data-aos="zoom-out-left" data-aos-delay="250">
                        <h2>Sobre</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p>Horário de funcionamento: <strong>09:00</strong> às <strong>19:00</strong></p>
                    </div>
                </div>
            </section>
            <section className={styles.services}>
                <div className={styles.serviceContent}>
                    <h2>Serviços</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <section className={styles.haircuts}>
                    <div className={styles.haircut} data-aos="fade-up" data-aos-delay="200">
                        <Image
                            src={corte1}
                            alt="Corte normal"
                            priority
                            quality={100}
                        />
                        <div className={styles.haircutInfo}>
                            <strong>Corte normal</strong>
                            <button>
                                R$ 45,00
                            </button>
                        </div>
                    </div>
                    <div className={styles.haircut} data-aos="fade-up" data-aos-delay="450">
                        <Image
                            src={corte2}
                            alt="Barba completa"
                            priority
                            quality={100}
                        />
                        <div className={styles.haircutInfo}>
                            <strong>Barba completa</strong>
                            <button>
                                R$ 35,00
                            </button>
                        </div>
                    </div>
                    <div className={styles.haircut} data-aos="fade-up" data-aos-delay="650">
                        <Image
                            src={corte3}
                            alt="Corte e barba"
                            priority
                            quality={100}
                        />
                        <div className={styles.haircutInfo}>
                            <strong>Corte e Barba</strong>
                            <button>
                                R$ 80,00
                            </button>
                        </div>
                    </div>
                </section>
            </section>
            <div className={styles.services}>
                <h2>Venha Conhecer</h2>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24518.52001369814!2d-46.421725345906864!3d-24.006375479826417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c53ea75d47f%3A0xebed7380dc247256!2sLitoral%20Plaza!5e0!3m2!1spt-BR!2sbr!4v1722883673775!5m2!1spt-BR!2sbr" width="100%" height="450" loading="lazy">
            </iframe>
            <Footer />
            <Link 
            href={'https://www.whatsapp.com/?lang=pt_BR'} className={styles.watssapp} target="_blank" data-aos="zoom-in-up" data-aos-delay="400">
                <Image
                    src={watssapp}
                    alt="Botão watssapp"
                    priority
                    quality={100}
                />
                <span className={styles.text}>Agende seu horário</span>
            </Link>
        </>
    )
}
