

export default function MainLayout({ children }) {

  return (
    <div>
      <div className="w-full border border-b-light-gray pt-3 pb-3">
        <div className="w-[1440px] m-auto flex items-center">
          <a className="font-montserrat text-3xl text-dark-gray ml-10" href='/dashboard'> ACTION<span className="text-green-sheen">RSE</span></a>
          <a className="font-inter ml-auto hover:text-green-sheen mr-10" href="/api/auth/logout"> Se déconnecter</a>
        </div>
      </div>
      <div className="w-[1440px] m-auto flex">
          {children}
      </div>
    </div>
  )
}
