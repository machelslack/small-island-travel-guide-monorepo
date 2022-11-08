import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to small-island-travel-guide!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

///https://enqueuezero.com/airbnb-architecture.html#data-tier
//https://medium.com/@narengowda/netflix-system-design-dbec30fede8d
//https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/scaling_aws/README.md
//https://netflixtechblog.com/open-sourcing-zuul-2-82ea476cb2b3
//https://cloud.google.com/blog/topics/developers-practitioners/implementing-leader-election-google-cloud-storage
//https://levelup.gitconnected.com/9-projects-you-can-do-to-become-a-front-end-master-in-2023-a4389153148c
//https://medium.com/@wastecleaner/frontend-system-design-framework-5ba6e075b3b2
//https://medium.com/tech-career/l8-explains-career-of-software-engineers-5969a8ae0351
