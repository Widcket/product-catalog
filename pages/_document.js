import Document, { Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-starturl" content="/" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta charSet="utf-8" />

                    <link
                        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
                        rel="stylesheet"
                        type="text/css"
                    />

                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="manifest" href="static/manifest.webmanifest" />
                    <link rel="icon" href="static/icons/favicon.ico" />

                    <title>Product Catalog</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default AppDocument;
