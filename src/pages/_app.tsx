import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import "src/infrastructure/style/index.css"
import { globalStyles } from "src/infrastructure/style"
import React, { Suspense } from "react"
import { withBlitz } from "src/infrastructure/blitz/blitz-client"
import { RecoilRoot} from "recoil"
import DefaultLoader from "../infrastructure/components/default-loader"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
  <RecoilRoot>
    <Suspense fallback={<DefaultLoader />}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {globalStyles}
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </Suspense>
  </RecoilRoot>
  )
}

export default withBlitz(MyApp)
