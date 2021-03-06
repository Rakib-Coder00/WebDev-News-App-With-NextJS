import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>WebDev News Application</title>
      </Head>
      <h1>Welcome To News Application</h1>
      <ArticleList articles={articles} />
    </div>
  )   
}

export const getStaticProps = async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}
