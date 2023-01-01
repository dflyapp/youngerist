import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Head from 'next/head'
import Post from 'components/Post'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from '../styles/Blog.module.css'
import { sortByDate } from '../utils'

export default function MoTran({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Youngerist Blogs: Mỡ Trăn</title>
        <meta
          name="description"
          content="Những mẹo nhỏ giúp bạn chăm sóc làn da của mình tốt hơn."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cover}>
        <div className="container mx-auto">
          <Header />
        </div>
      </div>

      <h1 className="text-dark text-4xl text-center mt-24">
        Chuyên blog về mỡ trăn
      </h1>

      <div className="container mx-auto my-24">
        <div className="flex flex-wrap">
          {posts.map((post: any, index: any) => (
            <Post key={index} post={post} path="mo-tran" />
          ))}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('src/pages/mo-tran/content'))

  // Get slug and frontmatter from posts
  const posts = files
    .filter((e) => e.includes('.md'))
    .map((filename) => {
      // Create slug
      const slug = filename.replace('.md', '')

      // Get frontmatter
      const markdownWithMeta = fs.readFileSync(
        path.join('src/pages/mo-tran/content', filename),
        'utf-8'
      )

      const { data: frontmatter } = matter(markdownWithMeta)

      return {
        slug,
        frontmatter,
      }
    })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
