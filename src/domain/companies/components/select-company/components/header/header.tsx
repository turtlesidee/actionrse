import React from "react"
import style from './style'
const Header = () => {
  return (
    <div css={style.container}>
      <img className="w-[70px] h-[70px]" src="/images/tree.svg" />
      <h1 css={style.title}>Selection d&apos;une TPE/PME </h1>
    </div>
  )
};

export default Header;

