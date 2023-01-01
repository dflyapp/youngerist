import { useRouter } from 'next/router'

import Button from './common/Button'

export default function WaxAfterWax() {
  return (
    <div className="bg-primarydark">
      <section className="container mx-auto">
        <div className="flex flex-wrap items-center py-12">
          <div className="w-full lg:w-1/2 px-4">
            <div className="px-4 text-white">
              <h1 className="text-white">SÁP DỪA WAX LÔNG </h1>
              <p>THÔNG TIN SẢN PHẨM</p>
              <p>Công dụng: Wax lông toàn thân</p>
              <p>Loại da: Mọi loại da</p>
              <p>Đóng gói: Bịch 100g</p>
              <p>
                Sáp thơm không có mùi nhựa, thơm mùi dừa, sáp dẻo siêu bám lông
                và wax không đau.
              </p>
              <p>
                Thành phần từ tự nhiên: Ethylene/VA Copolymer, Paraffin,
                Glyceryl Hydrogenate, Methyl Hydrogenated Rosinate, Hydrogenated
                Coconut Oil, C30-45 Alkyl Methicone.
              </p>
              <div className="flex justify-start mb-24 lg:mb-0">
                {/* <Button
                  className="mt-4 text-white bg-lightblue hover:opacity-75 bg-yellow5"
                  label="XEM THÊM"
                  hoverColor="#132A3E"
                  onClick={() => {
                    router.push('san-pham/sap-thom-wax-long')
                  }}
                />
                <div className="w-2" /> */}
                <Button
                  className="mt-4 text-white bg-lightblue hover:opacity-75"
                  label="MUA NGAY"
                  hoverColor="#132A3E"
                  onClick={() => {
                    window.open(
                      'https://www.lazada.vn/products/i2023057166.html'
                    )
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            {/* <Image placeholder="blur" src={Wax} alt="wax" /> */}
          </div>
        </div>
      </section>
    </div>
  )
}
