import Entry from '../components/Entry'
import { Layout } from '../components/Layout'
import style from '../styles/Blog.module.css'


const Blog = ({entrys}) =>{
    return(
        <Layout titlePage='Blog'>
           <div className={style.blog}>
           {entrys.map(e =>(
                <Entry key={e.id} dataEntry={e}></Entry>
            ))};
           </div>
        </Layout>
    ) 
}

export async function getStaticProps(){
    const url = 'http://localhost:1337/blogs'
    const res = await fetch(url)
    const entrys = await res.json()
    return{
        props:{
            entrys
        }
    }
}

export default Blog