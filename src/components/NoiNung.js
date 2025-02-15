import Image from "next/image"
import { useRouter } from 'next/router'

import Button from './common/Button'
import NoiNungImg from 'assets/img/noi-nung.png'

export default function NoiNung() {
  const router = useRouter()

  return (
    (<section className="py-48 px-0 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse items-center">
          <div className="w-full lg:w-1/2 px-4">
            <Image
              placeholder="blur"
              src={NoiNungImg}
              alt="mo tran"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h1 className="text-right text-dark">NỒI NẤU SÁP</h1>
            <p className="my-4 lg:my-12 lg:pl-36 text-dark list-disc">
              Cấu tạo sản phẩm: lòng nồi chống dính, mặt ngoài nhám chống trơn,
              trượt, nắp đậy trong suốt, có lỗ thoát hơi, nút điều chỉnh nhiệt
              độ
            </p>
            <div className="flex justify-end mb-24 lg:mb-0">
              <Button
                className="mt-4 text-white bg-lightblue hover:opacity-75 bg-yellow5"
                label="XEM THÊM"
                hoverColor="#132A3E"
                onClick={() => {
                  router.push('san-pham/noi-nau-sap')
                }}
              />
              <div className="w-2" />
              {/* <Button
                className="mt-4 text-white bg-lightblue hover:opacity-75"
                label="MUA NGAY"
                hoverColor="#132A3E"
                onClick={() => {
                  window.open(
                    'https://www.lazada.vn/products/mo-tran-nguyen-chat-100-youngerist-mo-tran-triet-long-khong-pha-tap-chat-mo-tran-giam-ton-thuong-vet-bong-wax-long-tay-trang-han-che-moc-long-duong-da-moi-mem-min-long-mong-hon-duoi-chuot-lam-mo-vet-seo-lota-shop-i1603653270-s6895928502.html'
                  )
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}
