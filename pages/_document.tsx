import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=rMBgAw3GlJ"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=rMBgAw3GlJ"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=rMBgAw3GlJ"
          />
          <link rel="manifest" href="/site.webmanifest?v=rMBgAw3GlJ" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=rMBgAw3GlJ"
            color="#4fd1c5"
          />
          <link rel="shortcut icon" href="/favicon.ico?v=rMBgAw3GlJ" />
          <meta name="apple-mobile-web-app-title" content="Qur'anKu" />
          <meta name="application-name" content="Qur'anKu" />
          <meta name="msapplication-TileColor" content="#4fd1c5" />
          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Qur'anKu adalah aplikasi Al-Qur'an berbasis web yang dioptimalkan untuk digunakan pada perangkat mobile maupun desktop."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
