import Head from "next/head"

export default function Seo({title}){
  return(
    <div>
      <Head>
        <title>{title} | Hello Next</title>
      </Head>
    </div>
  )
}