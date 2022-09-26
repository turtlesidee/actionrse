import { getServerSidePropsWrapper, getSession } from "@auth0/nextjs-auth0";

export default function Index() {

  return (
      <div className="h-full flex items-center justify-center">
          <div>
            <div className="font-montserrat text-5xl text-dark-gray animate-in slide-in-from-top-96 duration-1000 fade-in "> ACTION<span className="text-green-sheen">RSE</span></div>
            <a className="block font-montserrat text-center animate-in slide-in-from-bottom-96 duration-1000 mt-4  hover:cursor-pointer fade-in" href="/api/auth/login"> LAUNCH APP</a>
          </div>
      </div>

  );
}

export const getServerSideProps = getServerSidePropsWrapper(async (ctx) => {
  const session = getSession(ctx.req, ctx.res);

  if (session !== null) {
    const res = ctx.res;

    res.writeHead(301, {Location:'/dashboard' }).end()
    return {
      props: {}
    }
  } else {
    return {
      props: {}
    }
  }
})

