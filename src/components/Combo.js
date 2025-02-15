import Image from "next/image"
import { useRouter } from 'next/router'

import Button from './common/Button'
import NoiNungImg from './preafterwax.png'

export default function Combo() {
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
            <h1 className="text-right text-dark uppercase">
              Combo dung dịch PreWax & AfterWax
            </h1>
            <p className="my-4 lg:my-12 lg:pl-36 text-dark list-disc">
              Dung dịch PreWax Treatment Spray được sử dụng trước khi wax lông
              giúp làm sạch lớp trang điểm, bụi bẩn và lượng dầu thừa trên da,
              sát trùng nhẹ bề mặt da, giảm nguy cơ gây viêm nhiễm trong lúc
              wax. After Wax Treatment Oil là sự kết hợp hoàn hảo từ các loại
              dầu & chất dưỡng ẩm đã đem đến cho chúng ta một liệu pháp wax lông
              chuyên nghiệp với công dụng là làm mát, làm dịu và dưỡng ẩm cho
              da, giảm nguy cơ viêm nhiễm và tổn thương bề mặt sau khi wax.
            </p>
            <div className="flex justify-end mb-24 lg:mb-0">
              <Button
                className="mt-4 text-white bg-lightblue hover:opacity-75 bg-yellow5"
                label="XEM THÊM"
                hoverColor="#132A3E"
                onClick={() => {
                  router.push('san-pham/combo-dung-dich-thoa-da')
                }}
              />
              <div className="w-2" />
              <Button
                className="mt-4 text-white bg-lightblue hover:opacity-75"
                label="MUA NGAY"
                hoverColor="#132A3E"
                onClick={() => {
                  window.open('https://www.lazada.vn/products/i2022998891.html')
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}
