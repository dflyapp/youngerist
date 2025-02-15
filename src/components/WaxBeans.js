import Image from "next/image"
import { useRouter } from 'next/router'

import Button from './common/Button'
import styles from './WaxBeans.module.css'

import Wax from 'assets/img/wax-bean.png'

export default function LearnAndGrow() {
  const router = useRouter()

  return (
    (<div className={styles.wrapper}>
      <section className="container mx-auto">
        <div className="flex flex-wrap items-center py-12">
          <div className="w-full lg:w-1/2 px-4">
            <div className="px-4">
              <h1 className="text-white">SÁP WAX LÔNG</h1>
              <p className="my-12 text-white list-disc">
                Có phải bạn đang muốn “dọn cỏ” nhưng ngại đến spa? Có phải bạn
                cần một phương pháp waxing sạch sẽ, tiện lợi và không đau? Sáp
                wax lông Youngerist đáp ứng được tất cả các nhu cầu trên với
                chất sáp dẻo, siêu bám lông, nhiệt độ tan chảy thấp và có mùi
                thơm dịu nhẹ.
              </p>
              <div className="flex justify-start mb-24 lg:mb-0">
                <Button
                  className="mt-4 text-white bg-lightblue hover:opacity-75 bg-yellow5"
                  label="XEM THÊM"
                  hoverColor="#132A3E"
                  onClick={() => {
                    router.push('san-pham/sap-thom-wax-long')
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
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            <Image
              placeholder="blur"
              src={Wax}
              alt="wax"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
      </section>
    </div>)
  );
}
