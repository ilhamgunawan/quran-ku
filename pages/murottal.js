import Head from 'next/head'
import Link from 'next/link'

export default function Murottal({}) {

  return (
    <div>
      <Head>
        <title>Murottal | Quran Ku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Quran Ku / Murottal</h1>
        <Link href='/'>
          <a>&crarr; kembali ke beranda</a>
        </Link>
      </header>

      <main>
        
      </main>

    </div>
  )
}