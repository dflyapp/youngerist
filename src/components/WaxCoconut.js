import Image from "next/image"
import { useRouter } from 'next/router'

import Button from './common/Button'

import Wax from 'components/sap_dua.png'

export default function WaxCoconut() {
  const router = useRouter()

  return (
    (<div className="bg-primarydark py-24">
      <section className="container mx-auto">
        <div className="flex flex-wrap items-center py-12">
          <div className="w-full lg:w-1/2 px-4">
            <div className="px-4 text-white">
              <h1 className="text-white">SÁP DỪA WAX LÔNG </h1>
              <p>
                Sáp dừa wax lông Youngerist với công thức đột phá mới đem đến 1
                loại sáp vô cùng dẻo, siêu bám lông. Giúp bạn “dọn cỏ” một cách
                triệt để với sáp dừa thiên nhiên lành tính, wax lông không đau
                rát lại có hương thơm dừa nhẹ nhàng thư giãn.
              </p>
              <div className="flex justify-start mb-24 lg:mb-0">
                <Button
                  className="mt-4 text-white bg-lightblue hover:opacity-75 bg-yellow5"
                  label="XEM THÊM"
                  hoverColor="#132A3E"
                  onClick={() => {
                    router.push('san-pham/sap-dua-wax-long')
                  }}
                />
                <div className="w-2" />
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
