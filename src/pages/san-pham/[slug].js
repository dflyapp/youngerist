/* eslint-disable @next/next/no-img-element */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Head from 'next/head'

import Header from 'components/Header'
import Footer from 'components/Footer'

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>Sản phẩm: {title}</title>
        <meta
          name="description"
          content={excerpt}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="container mx-auto">
          <Header />
          <div className='mt-36' />
          <h1 className="text-center">{title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-24">
        <div className="mx-auto px-4 w-full md:w-1/2 blog-content">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/pages/san-pham/content'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/pages/san-pham/content', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
