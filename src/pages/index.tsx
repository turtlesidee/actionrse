import React, { Suspense } from "react"

import { Routes, BlitzPage } from "@blitzjs/next"
import Layout from "../infrastructure/components/layouts/layout"
import ListMission from "./mission/components/list-mission"


const Home: BlitzPage = () => {
  return (
    <Layout>
      <ListMission />
    </Layout>
  )
}

export default Home
