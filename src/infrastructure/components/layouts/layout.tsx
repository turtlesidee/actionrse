import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import MenuHeader from "../menu-header/menu-header"

type LayoutProps = {
  title?: string
  children?: React.ReactNode
}

const Layout: BlitzLayout<LayoutProps> = ({ title, children}) => {
  return (
    <>
      <Head>
        <title>{title || "Action RSE"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuHeader />
      <div className="w-[1024px] m-auto">
        {children}
      </div>

    </>
  )
}

export default Layout
