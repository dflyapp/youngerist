import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Post from 'components/Post'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from '../styles/Blog.module.css'
import { sortByDate } from '../utils'

import { authClient } from '../lib/client'

import HeroBlog from 'assets/img/HeroBlog.jpg'

export default function Blog({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Youngerist Blogs</title>
        <meta
          name="description"
          content="Những mẹo nhỏ giúp bạn chăm sóc làn da của mình tốt hơn."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cover}>
        <div className="container mx-auto">
          <Header />
          <div className="flex flex-wrap pt-24">
            <div className="w-full md:w-1/2 px-8 md:px-0">
              <h3>Vì sự tự tin cho vẻ đẹp của bạn</h3>
              <button
                onClick={async () => {
                  const { data, error } = await authClient.signUp.email(
                    {
                      email: 'duongital@gmail.com', // user email address
                      password: 'thanhtraTRA123!', // user password -> min 8 characters by default
                      name: 'Duong', // user display name
                      image: '', // user image url (optional)
                      callbackURL: '/', // a url to redirect to after the user verifies their email (optional)
                    },
                    {
                      onRequest: (ctx) => {
                        //show loading
                      },
                      onSuccess: (ctx) => {
                        //redirect to the dashboard or sign in page
                      },
                      onError: (ctx) => {
                        // display the error message
                        alert(ctx.error.message)
                      },
                    }
                  )
                  console.log({ data, error })
                }}
              >
                Register
              </button>
              <h4 className="text-accent my-4">
                Chuyên trang blog của chúng tôi
              </h4>
            </div>
            <div className="w-full md:w-1/2 px-8 md:px-0">
              <Image
                src={HeroBlog}
                alt="tree"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-dark text-4xl text-center mt-24">Bài viết</h1>
      <div className="container mx-auto my-24">
        <div className="flex flex-wrap">
          {posts.map((post: any, index: any) => (
            <Post key={index} post={post} path="blog" />
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
  const files = fs.readdirSync(path.join('src/pages/blog/content'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('src/pages/blog/content', filename),
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
