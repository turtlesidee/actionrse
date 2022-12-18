import React from "react"
import style from './style'
const Header = () => {
  return (
    <div css={style.container}>
      <img css={style.image} src="/images/resultats.svg" alt="plant" />
      <h1 css={style.title}>Resultat maturite RSE </h1>
    </div>
  )
};

export default Header;

