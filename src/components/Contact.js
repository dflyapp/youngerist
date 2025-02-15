import Image from "next/image"

import BannerBottom from 'assets/img/banner-bottom.png'

export default function Contact() {
  return (
    (<div className="container mx-auto px-4 py-24 sm:px-0">
      <h1 className="text-deepblue text-4xl text-center">sỉ liên hệ 0933884600</h1>
      <p className="text-gray9 text-center my-16 w-full lg:w-1/2 mx-auto">
        Để mua sỉ với gía tốt hơn, xin vui lòng liên hệ với chúng tôi thông qua
        số hotline ở trên để được tư vấn trực tiếp, hiện tại các dòng sản phẩm
        của Youngerirst chỉ được phân phối duy nhất qua kênh này.
      </p>
      <Image
        placeholder="blur"
        src={BannerBottom}
        alt="office"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>)
  );
}
