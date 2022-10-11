import React from 'react'
import { Layout } from '../../components/Layout'
import style from '../../styles/[id].module.css'
import { formatDate } from '../../helpers/Index'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const url = 'http://localhost:1337/blogs'
    const res = await fetch(url)
    const data = await res.json()
    const paths = data.map(path => {
        return {
            params: { id: path.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const url = 'http://localhost:1337/blogs/' + id
    const res = await fetch(url)
    const data = await res.json()
    return {
        props: {
            post: data
        }
    }
}

const id = ({ post }) => {
    const { titulo, descripcion, contenido, imagen, published_at, id } = post
    return (
        <Layout titlePage={'Nosotros'}>
            <div className={style.container}>
                <div className={style.body__blog}>
                    <div className={style.title__date}><p suppressHydrationWarning>{titulo}, {formatDate(published_at)}</p></div>
                    <div className={style.content__post}>
                        <p>{contenido}</p>
                        <Image layout='responsive' width={150} height={80} src={`http://localhost:1337${imagen.url}`} alt=''></Image>
                        <div className={style.description}>
                            <p>{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default id