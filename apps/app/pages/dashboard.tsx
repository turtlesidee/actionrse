import { getAccessToken, withPageAuthRequired } from "@auth0/nextjs-auth0";
import MainLayout from "../components/mainLayout/mainLayout";

export default function Dashboard({ accessToken }) {
  return <MainLayout>
    <a className="p-4 cursor-pointer hover:bg-dark-liver bg-green-sheen text-white rounded mt-8 m-auto" href="/missions"> Mise en place d'une politique RSE</a>
  </MainLayout>
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const accessToken = await getAccessToken(ctx.req, ctx.res)
    return {
      props: {
        accessToken
      }
    }
  }
});
