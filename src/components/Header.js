import { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { scroller } from 'react-scroll'
import { useRouter } from 'next/router'

import Button from './common/Button'

import LogoNvg from 'assets/svg/logo-nvg.svg'
import IconHambuger from 'assets/svg/icon_hambuger.svg'
import IconClose from 'assets/svg/icon_close.svg'
import IconArrow from 'assets/svg/icon_arrow.svg'

import styles from './Header.module.css'

export default function Header() {
  const router = useRouter()
  const [showNav, setShowNav] = useState(false)

  function goTo(place) {
    if (router.pathname === '/') {
      scroller.scrollTo(place, {
        duration: 200,
        smooth: true,
      })
    } else {
      router.push('/').then(() => {
        scroller.scrollTo(place, {
          duration: 200,
          smooth: true,
        })
      })
    }
  }

  function Button1() {
    return (
      (<button
        className="flex items-center px-8 py-3 rounded-lg border border-deepblue bg-yellow5 hover:border-white"
        onClick={() => goTo('contact')}
      >
        <span className="mr-2">MUA SỈ</span>
        <Image
          src={IconArrow}
          alt="arrow"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </button>)
    );
  }

  function RenderMenu({ classnames }) {
    const data = [
      { id: 1, name: 'moTran', label: 'MỠ TRĂN' },
      { id: 2, name: 'waxBeans', label: 'SÁP WAX LÔNG' },
      { id: 3, name: 'noiNung', label: 'NỒI NẤU SÁP' },
      { id: 4, name: 'waxCoconut', label: 'SÁP DỪA WAX LÔNG' },
      { id: 5, name: 'preAfterWax', label: 'PRE & AFTER WAX' },
    ]

    return data.map((element) => (
      <li key={element.id} className={classnames}>
        <a onClick={() => goTo(element.name)}>{element.label}</a>
      </li>
    ))
  }

  return (
    (<header className={styles.wrapper}>
      <div className="flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <div className="w-3/4 lg:w-auto cursor-pointer">
            <Image
              src={LogoNvg}
              alt="nvg"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center text-white text-base">
            <RenderMenu classnames="mx-2 lg:mx-2 cursor-pointer" />
            <li className="mx-2 lg:mx-2 cursor-pointer">
              <Button1 />
            </li>
          </ul>
        </nav>

        <nav className="block lg:hidden">
          <ul className="flex items-center text-white">
            <li className="cursor-pointer" onClick={() => setShowNav(true)}>
              <Image
                src={IconHambuger}
                alt="menu"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </li>
          </ul>
        </nav>
      </div>
      {showNav && (
        <div className="fixed h-full w-full">
          <div
            className="fixed h-full w-full bg-gray-900 opacity-50 top-0 left-0"
            onClick={() => setShowNav(false)}
          ></div>
          <div className="fixed h-full bg-white right-0 top-0">
            <div className="flex justify-end pt-5 pr-6">
              <button onClick={() => setShowNav(false)}>
                <Image
                  src={IconClose}
                  alt="close"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </button>
            </div>
            <ul className={styles.mobileheader}>
              <RenderMenu />
              <li className="text-white">
                <Button
                  className="mt-4 text-white bg-deepblue hover:text-deepblue hover:border-deepblue "
                  label="MUA SỈ"
                  hoverColor="#132A3E"
                  onClick={() => goTo('contact')}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>)
  );
}
