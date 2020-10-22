import Head from 'next/head'
import Link from 'next/link'

export default function Tafsir({}) {

  return (
    <div>
      <Head>
        <title>Baca Tafsir | My Quran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>My Quran / Tafsir</h1>
        <Link href='/'>
          <a>&crarr; kembali ke beranda</a>
        </Link>
      </header>

      <main>
        
      </main>

    </div>
  )
}