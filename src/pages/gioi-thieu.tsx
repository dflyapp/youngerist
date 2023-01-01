import Head from 'next/head'
import SanPhamItem from 'components/SanPham'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from '../styles/Blog.module.css'

export default function GioiThieu() {
  return (
    <div>
      <Head>
        <title>Giới thiệu về Youngerist</title>
        <meta
          name="description"
          content="Youngerist rất vinh dự khi đã nhận được đánh giá tốt từ hàng trăm nghìn khách hàng."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cover}>
        <div className="container mx-auto">
          <Header />
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto px-4 my-24">
        <h1>Giới thiệu về Youngerist</h1>
        <p className="mt-8">
          Hiểu được nhu cầu dọn “vi-ô-lông” và nắm bắt được những bất lợi của
          các loại sản phẩm waxing kém chất lượng trên thị trường, năm 2018,
          Youngerist ra đời với sứ mệnh mang lại giải pháp wax lông hiệu quả,
          thoải mái và tiện lợi nhất cho khách hàng.
        </p>
        <p className="mt-8">
          Đúng như cái tên của mình, Youngerist chính là “thứ mang lại sự tươi
          trẻ” những người tin dùng. Chúng tôi luôn nỗ lực cải tiến và nâng cấp
          sản phẩm của mình để đảm bảo trải nghiệm tốt nhất cho khách hàng.
          Thước đo sự thành công lớn nhất của Youngerist là nụ cười hài lòng, sự
          tin tưởng tuyệt đối của khách hàng.
        </p>
        <p className="mt-8">
          Youngerist rất vinh dự khi đã nhận được đánh giá tốt từ hàng trăm
          nghìn khách hàng. Youngerist hiện đang là đối tác của nhiều chuỗi spa,
          cơ sở làm đẹp uy tín trên cả nước. Trong tương lai, chắc chắn thương
          hiệu sẽ còn vươn mình phát triển mạnh mẽ hơn nữa trên thị trường quốc
          tế.
        </p>
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}
