import fs from 'fs'
import path from 'path'
import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
     <h1>Blog-App New</h1>
    </Layout>
  ) 
}

export async function getStaticProps () {
  const files = fs.readdirSync(path.join('posts'))
console.log(files)
  return {
    props: {},
  }
}
