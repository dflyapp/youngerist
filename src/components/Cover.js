import Image from "next/image"

import MoreDetail from './common/MoreDetail'

import IconMultiply from 'assets/svg/icon_multiply.svg'
import IconEqual from 'assets/svg/icon_equal.svg'
import IconQuote from 'assets/svg/icon_quote.svg'

import BgCoverRight from 'assets/img/cover-right.png'

import styles from './Cover.module.css'

export default function Cover() {
  return (
    (<div className={styles.wrapperbg}>
      <div className="mx-auto">
        <div className={styles.wrapper}>
          {/* more details */}
          <div className={styles.moredetail}>
            <MoreDetail />
          </div>

          {/* left cover */}
          {/* <div className={styles.maskleft}>
            <Image src={BgCoverLeft} alt="v" />
          </div> */}

          {/* right cover */}
          <div className={styles.maskrightwrapper}>
            <div className="hidden md:block">
              <Image
                placeholder="blur"
                src={BgCoverRight}
                alt="office"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>

          {/* content */}
          <div className="container mx-auto z-20 px-4 lg:px-0">
            <div className="pt-8 pr-4">
              <Image
                src={IconQuote}
                alt="quote"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <label className="pl-2 text-white text-xl lg:text-xl">
                Youngerist - Vì sự tự tin cho vẻ đẹp của bạn
              </label>
            </div>
            <div className="flex items-start">
              <h1 className="w-2/3 font-light text-xl lg:text-2xl">
                <span className="text-white">
                  Nắm bắt được nhu cầu giải quyết “vi-ô-lông” một cách dễ dàng,
                  nhanh chóng và tiết kiệm, Youngerist đã cho ra đời những dòng
                  sản phẩm chất lượng cao giúp bạn trở nên tự tin hơn cho vẻ
                  ngoài rạng ngời của mình.
                </span>
              </h1>
            </div>

            {/* badges */}
            <section className="mt-10 flex flex-wrap">
              <label className="mt-2 sm:mt-0 bg-deepblue text-white text-sm badge">
                Beauty
              </label>
              <Image
                src={IconMultiply}
                alt="multi"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <label className="mt-2 sm:mt-0 bg-deepblue text-white text-sm badge">
                Care
              </label>
              <Image
                src={IconMultiply}
                alt="multi"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <label className="mt-2 sm:mt-0 bg-deepblue text-white text-sm badge">
                Advice
              </label>
              <Image
                src={IconEqual}
                alt="equal"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <label className="mt-2 sm:mt-0 bg-yellow5 text-white text-sm badge">
                Unique Impact
              </label>
            </section>
          </div>
        </div>
      </div>
    </div>)
  );
}
