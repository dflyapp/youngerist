/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function SanPham({ item }) {
  return (
    (<Link href={`/san-pham/${item.slug}`} legacyBehavior>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 cursor-pointer">
        <img src={item.frontmatter.cover_image} alt="" />

        <strong className="text-sm text-dark mt-4">
          Posted on {item.frontmatter.date}
        </strong>

        <h4 className="mt-4">{item.frontmatter.title}</h4>
        <p className="mt-4 text-accent">{item.frontmatter.excerpt}</p>
      </div>
    </Link>)
  );
}
