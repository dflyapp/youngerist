import Image from "next/image"
import { useRouter } from 'next/router'

import Button from './common/Button'
import Motran from 'assets/img/mo-tran.png'

import styles from './MoTran.module.css'

export default function Footer() {
  const router = useRouter()

  return (
    (<section className={styles.impact}>
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse items-center">
          <div className="w-full lg:w-1/2 px-4">
            <Image
              placeholder="blur"
              src={Motran}
              alt="mo tran"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h1 className="text-right text-dark">MỠ TRĂN</h1>
            <p className="my-4 lg:my-12 lg:pl-36 text-dark list-disc">
              Với thành phần 100% mỡ trăn nguyên chất được gia nhiệt thành dạng
              lỏng và đã được loại bỏ thành phần gây tanh hôi, Youngerist mang
              đến cho bạn một sản phẩm an toàn và tiện lợi hỗ trợ cho các vấn đề
              triệt lông, tẩy trang, giảm tình trạng nứt gót chân, rạn da...
            </p>
            <div className="flex justify-end mb-24 lg:mb-0">
              <Button
                className="mt-4 text-white bg-lightblue hover:opacity-75 bg-yellow5"
                label="XEM THÊM"
                hoverColor="#132A3E"
                onClick={() => {
                  router.push("san-pham/mo-tran")
                }}
              />
              <div className="w-2" />
              <Button
                className="mt-4 text-white bg-lightblue hover:opacity-75"
                label="MUA NGAY"
                hoverColor="#132A3E"
                onClick={() => {
                  window.open(
                    'https://www.lazada.vn/products/mo-tran-nguyen-chat-100-youngerist-mo-tran-triet-long-khong-pha-tap-chat-mo-tran-giam-ton-thuong-vet-bong-wax-long-tay-trang-han-che-moc-long-duong-da-moi-mem-min-long-mong-hon-duoi-chuot-lam-mo-vet-seo-lota-shop-i1603653270-s6895928502.html'
                  )
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}
