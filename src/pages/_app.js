import Layout from "@/components/Layout";

export default function App({Component, pageProps}) {
  return (
    <div>
      <Layout/>
      <Component {...pageProps}/>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  )
}