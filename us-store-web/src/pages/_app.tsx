import '@/app/globals.css'

type PageProps = {
    Component: any,
    pageProps: any
}
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: PageProps) {
    return <Component {...pageProps} />
}