import styles from '@/components/footer/styles.module.scss'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerIcons}>
                <Link href={'https://www.instagram.com/'} target='_blank'>
                    <FaInstagram className={styles.icons} />
                </Link>
                <Link href={'https://br.linkedin.com/'} target='_blank'>
                    <FaLinkedin className={styles.icons} />
                </Link>
                <Link href={'https://www.facebook.com/?locale=pt_BR'} target='_blank'>
                    <FaFacebook className={styles.icons} />
                </Link>
            </div>
            <div className={styles.logoFooter}>
                <Image
                    src={logo}
                    alt="Logo barbearia"
                    priority
                    quality={100}
                />
            </div>
            <p>Copyright 2024 | Dev Barbearia - Todos os direitos reservados.</p>
        </footer>
    )
}