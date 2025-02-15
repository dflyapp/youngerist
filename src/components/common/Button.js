import Image from "next/image"

import IconArrow from 'assets/svg/icon_arrow.svg'

export default function Button({ label, className, onClick }) {
  return (
    (<button
      className={`flex items-center px-8 py-3 rounded-lg bg-lightblue text-white ${className}`}
      onClick={onClick}
    >
      <span className="mr-2">{label}</span>
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
