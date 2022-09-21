import React from 'react'
import style from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <Link href={'/'}>Inicio</Link> 
        <Link href={'/nosotros'}>Nosotros</Link>  
        <Link href={'/tienda'}>Tienda</Link>   
        <Link href={'/blog'}>Blog</Link> 
      </nav>
    </footer>
  )
}

export default Footer