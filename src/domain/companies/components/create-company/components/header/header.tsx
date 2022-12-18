import React from "react"
import style from './style'
const Header = () => {
  return (
    <div css={style.container}>
      <img css={style.image} src="/images/plant.svg" alt="plant" />
      <h1 css={style.title}>Creation d&apos;une TPE/PME </h1>
    </div>
  )
};

export default Header;

