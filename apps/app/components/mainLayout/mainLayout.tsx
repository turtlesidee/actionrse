import { faBuilding, faGauge, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MenuLink from ".//menuLink"

export default function MainLayout({user, children }) {

  return (
    <div>
      <div className="w-full border border-b-light-gray pt-3 pb-3">
        <div className="w-[1440px] m-auto flex items-center">
          <div className="font-montserrat text-3xl text-dark-gray ml-10"> ACTION<span className="text-green-sheen">RSE</span></div>
          <a className="font-inter ml-auto hover:text-green-sheen mr-10" href="/api/auth/logout"> Se déconnecter</a>
        </div>
      </div>
      <div className="w-[1440px] m-auto flex">
        <div className="w-[250px] border-r pt-14  pb-8">
          <MenuLink name="Tableau de bord" url="/dashboard" icon={<FontAwesomeIcon icon={faGauge} fontSize="20" />} />
          <MenuLink name="TPE/PME" url="/companies" icon={<FontAwesomeIcon icon={faBuilding} fontSize="20" />} />
          <MenuLink name="Utilisateurs" url="/users" icon={<FontAwesomeIcon icon={faUser} fontSize="20" />} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
