import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"

type LayoutProps = {
  title?: string
  children?: React.ReactNode
}

const LayoutNoAuth: BlitzLayout<LayoutProps> = ({ title, children}) => {
  return (
    <>
      <Head>
        <title>{title || "Action RSE"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full bg-neutral-100 h-[100px] flex items-center border-b border-neutral-400">
        <div className=" w-[1024px] m-auto flex items-center justify-center">
          <a className="text-38 font-bold"> <span className="text-neutral-500">ACTION</span><span className="text-primary-main">RSE</span> </a>
        </div>

      </div>
      <div className="w-[1024px] m-auto">
        {children}
      </div>

    </>
  )
}

export default LayoutNoAuth
