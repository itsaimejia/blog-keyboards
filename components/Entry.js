import React from 'react'
import Image from 'next/image'
import style from '../styles/Entry.module.css'
import Link from 'next/link'
import { formatDate } from '../helpers/Index'

const Entry = ({dataEntry}) => {
    
  const {titulo, descripcion, contenido, imagen, published_at, id } = dataEntry
  

  return (
    <div className={style.container__post}>
        <div className={style.post}>
        <div className={style.header__post}>
            <div className={style.img__circle}>
                <Image layout='fill' src={'http://localhost:1337/uploads/eb7e0408d5f30f4ed7e269ea451169d4_c8a1e0bb4e.jpg'} alt=''></Image>
            </div>
            <div className={style.user__info}>
                <h3>{titulo}</h3>
                <p suppressHydrationWarning>{formatDate(published_at)}</p>
            </div>
        </div>
        <div className={style.content__post}>
            <Image layout='responsive' width={400} height={300} src={`http://localhost:1337${imagen.url}`} alt=''></Image>
            <p>{descripcion}</p>
            <div className={style.show__complete__post}>
                <Link href={`/blog/${id}`}>
                        <a><svg  
                            viewBox="0 0 490 490"><g>
                        <path d="M490,254.451V0.419L245,235.953L0,0.419v254.032l245,235.131L490,254.451z M30.625,72.346L245,278.421L459.375,72.346
                            v169.036L245,447.143L30.625,241.381V72.346z"/></g>
                        </svg></a>
            </Link>
            </div>
        </div>
       
    </div>
    </div>
  )
}

export default Entry