import { ReactElement } from "react"


type MenuLinkProps = {
  url: string
  name: string
  icon: ReactElement
}
export default function MenuLink({ name, url, icon}: MenuLinkProps) {
  return ( 
    <div className="mb-6 ">
      <a className="font-inter text-lg pl-10 hover:animate-in text-dark-gray group" href={url}>
        <span className="mr-3 group-hover:text-green-sheen">
        {icon}
        </span>
      {name} 
    </a>
    </div>
  )
}
