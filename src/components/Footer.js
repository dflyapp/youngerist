import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray2 py-10">
      <div className="flex justify-center">
        <Link className="text-primary" href="/gioi-thieu">
          Về Chúng Tôi
        </Link>
        <div className="mx-2">-</div>
        <Link className="text-primary" href="/blog">
          Blog
        </Link>
        <div className="mx-2">-</div>
        <Link className="text-primary" href="/mo-tran">
          Mỡ trăn
        </Link>
        <div className="mx-2">-</div>
        <Link className="text-primary" href="/sap-wax-long">
          Sáp wax lông
        </Link>
        <div className="mx-2">-</div>
        <Link className="text-primary" href="/san-pham/noi-nau-sap">
          Nồi nấu sáp
        </Link>
        <div className="mx-2">-</div>
        <Link className="text-primary" href="/san-pham/sap-dua-wax-long">
          Sáp dừa wax lông
        </Link>
        <div className="mx-2">-</div>
        <Link className="text-primary" href="/san-pham/combo-dung-dich-thoa-da">
          Pre & After wax
        </Link>
      </div>
      <div className="container mt-4 px-8 sm:px-0 mx-auto">
        <p className="text-gray9 text-center">
          © <b>2022 Youngerist</b> - Vì sự tự tin cho vẻ đẹp của bạn
        </p>
        <p className='text-center'>
          Đồng sáng lập:
          <a className='underline ml-2' target="_blank" href="https://penguin.vn/">
            penguin.vn
          </a>
        </p>
      </div>
    </footer>
  )
}
