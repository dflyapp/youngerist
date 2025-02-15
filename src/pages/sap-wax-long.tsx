import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import Post from 'components/Post'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from '../styles/Blog.module.css'
import { sortByDate } from '../utils'

import HeroBlog from 'assets/img/HeroBlog.jpg'

export default function SapWaxLong({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Youngerist Blogs: Sáp Wax Lông</title>
        <meta
          name="description"
          content="Những mẹo nhỏ về cách dùng sáp wax lông giúp bạn chăm sóc làn da của mình tốt hơn."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cover}>
        <div className="container mx-auto">
          <Header />
        </div>
      </div>
      <h1 className="text-dark text-4xl text-center mt-24">
        Chuyên blog về sáp wax lông
      </h1>
      <div className="container mx-auto my-24">
        <div className="flex flex-wrap">
          {posts.map((post: any, index: any) => (
            <Post key={index} post={post} path="sap-wax-long" />
          ))}
        </div>
      </div>
      <section className="container mx-auto mb-24">
        <p>
          Tuy ngày nay xã hội hiện đại nhưng đa số các chị em phụ nữ đều ngại ra
          các tiệm spa để triệt/tẩy lông toàn thân. Hiểu được tâm lý đó
          Youngerist sẽ là cứu tinh cho các chị em bằng sản phẩm sáp wax lông
          dành cho người muốn triệt lông. Ưu điểm của túi sáp để wax lông nhà
          Youngerist là siêu bám lông, sử dụng lâu dài sẽ giúp triệt lông, an
          toàn với mọi loại da, giá cả phải chăng.
        </p>
        <h2>SÁP WAX LÔNG THIÊN NHIÊN LÀ GÌ?</h2>
        <p>
          Sáp wax lông là những hạt nhỏ như hạt đậu được cô đặc từ các thành
          phần thiên nhiên. Đây là phương pháp được biến tấu từ những thói quen
          hằng ngày của người Châu Phi, Châu Âu... Họ thường nung đặc các thành
          phần thiên nhiên như: Cam, trà xanh, dâu tây,... Thành phẩm là hỗn hợp
          cô đặc có độ bám và kết dính cao giúp loại bỏ dễ dàng các nang lông,
          chân lông.
        </p>
        <p>
          Sáp có công dụng chính là wax lông lấy sạch lông toàn thân. Sau khi sử
          dụng sáp <strong>wax lông an toàn tại nhà</strong> thì bạn sẽ thấy sáp
          còn có khả năng phục hồi nang lông sau khi wax, lấy đi những chất thải
          trong lỗ chân lông. Đặc biệt, sau quá trình sử dụng sáp lâu dài sẽ
          giúp lông mọc chậm và thưa, và đặc biệt là có thể triệt lông cho người
          dùng.
        </p>
        <h2>CÁCH WAX LÔNG BẰNG SÁP NÓNG</h2>
        <p>
          Bước 1: Sử dụng khăn chườm nước ấm lên vùng da cần wax từ 7 – 10 phút
          và dùng sản phẩm Prewax Youngerist giúp lỗ chân lông giãn nở và không
          gây đau rát trong quá trình wax (có thể phủ 1 lớp phấn rôm để dễ dàng
          lấy được chân lông)
        </p>
        <p>
          Bước 2: Cho sáp vào nồi nấu sáp Youngerist và vặn nút nồi ở nấc cao
          nhất, sau khi sáp nóng chảy thì chỉnh nút nồi về nấc trung bình để giữ
          sáp có đủ nóng trong quá trình wax. Nếu không có nồi nấu sáp chuyên
          dụng thì có thể đun sáp bằng chén silicon Youngerist hoặc bỏ vào lò vi
          sóng
        </p>
        <p>
          Bước 3: Dùng thanh gỗ lấy một lượng sáp wax vừa đủ. Lúc này sáp có độ
          dẻo nhất định (Lưu ý: Khi lấy sáp lên mà sáp còn chảy xuống nhanh thì
          nên để nguội thêm). Sau đó, dùng que để quét sáp lên vùng da cần wax
          thuận theo chiều lông mọc. Dùng que gỗ đã phết sáp để quét mạnh lên
          vùng da cần wax để sáp bám lông tốt.
        </p>
        <p>
          Bước 4: Đợi sáp trên vùng da cần wax nguội khoảng 10-15 giây rồi giựt
          mạnh sáp ngược chiều lông mọc. LƯU Ý: Nên giựt mạnh và dứt khoát để
          tránh tổn thương da và lấy lông hiệu quả. Sau khi wax xong thì nên sử
          dụng Afterwax Youngerist để dưỡng ẩm và làm dịu da.
        </p>
        <p>
          Bước 5: Cuối cùng là thoa một lớp mỡ trăn lên vùng da vừa wax xong để
          làm chậm quá trình mọc lông và triệt lông.
        </p>
        <h2>MUA SÁP WAX LÔNG Ở ĐÂU?</h2>
        <p>
          Vì sáp để wax lông khá phổ biến nên trên thị trường có rất nhiều cửa
          hàng bán sản phẩm này với nhiều mức giá khác nhau. Tuy nhiên, vẫn có
          nhiều nơi bán hàng giả, hàng nhái và điều này gây ra các vấn đề như
          wax lông bị đau, sáp không bám lông, hôi mùi nhựa.... Hiểu được điều
          trên nên Youngerist đã đem lại cho các bạn một sản phẩm cao cấp. Sáp
          nóng wax lông nhà Youngerist mang những ưu điểm nổi trội như sản phẩm
          chất lượng, siêu bám lông, đóng gói đẹp mắt, mẫu mã đa dạng, mùi thơm
          đặc trưng của thiên nhiên.
        </p>
        <ul>
          Thông tin sản phẩm wax lông Youngerist:
          <li>- Công dụng: Wax lông toàn thân</li>
          <li>- Loại da: mọi loại da</li>
          <li>- Đóng gói: Bịch 50g và 100g</li>
          <li>
            - Thành phần từ tự nhiên: cam, trà xanh, dâu tây,.... Ngoài ra, còn
            có các tinh dầu tạo mùi hương như mùi Lavender, hoa hồng, cam,
            dừa,...
          </li>
          <li>
            - Màu: Orange (cam), chamomile (hoa cúc), strawberry (dâu tây), rose
            (hoa hồng), honey (vàng mật ong), tea tree (trà xanh), lavender (hoa
            oải hương)
          </li>
        </ul>
        <p>
          Đặc biệt là <strong>sáp wax lông thiên nhiên</strong> chính hãng sẽ là
          mấu chốt giúp bạn lấy sạch lông ở vùng da đã wax. Ngoài ra, còn có các
          ưu đãi hấp dẫn cho những đơn hàng đầu tiên và khách hàng thân thiết.
          Nhanh tay mua hàng tại Youngerist để được nhận nhiều ưu đãi ngay.
        </p>
      </section>
      {/* footer */}
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('src/pages/sap-wax-long/content'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('src/pages/sap-wax-long/content', filename),
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
