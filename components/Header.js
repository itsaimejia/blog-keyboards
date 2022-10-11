import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <div className='contenedor'>
            <div className={style.bar}>
              
              <Link href={'/'}>
               <a> <Image width={90} height={100} src='/img/kb1.jpg' alt='imágen de inicio' ></Image></a>
              </Link>
            
              <nav className={style.nav}>
                  <Link href={'/'}>Inicio</Link> 
                  <Link href={'/nosotros'}>Nosotros</Link>   
                  <Link href={'/tienda'}>Tienda</Link>   
                  <Link href={'/blog'}>Blog</Link>   
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header