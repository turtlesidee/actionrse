import { getAccessToken, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import MainLayout from "../components/mainLayout/mainLayout";

export default function Dashboard({ user, accessToken }) {
  console.log(accessToken)

  return <MainLayout user={user}> test</MainLayout>
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const accessToken = await getAccessToken(ctx.req, ctx.res)
    console.log(accessToken)

    return {
      props: {
        accessToken
      }
    }
  }
});
