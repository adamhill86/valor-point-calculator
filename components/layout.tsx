/* eslint-disable jsx-a11y/anchor-is-valid -- NextJS Workaround */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.scss';
import styles from './layout.module.scss';

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home = false }: { children: React.ReactNode; home?: boolean; }): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <link
          href='/favicon.ico'
          rel='icon' />
        <meta
          content='Learn how to build a personal website using Next.js'
          name='description' />
        <meta
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          property='og:image' />
        <meta
          content={siteTitle}
          name='og:title' />
        <meta
          content='summary_large_image'
          name='twitter:card' />
      </Head>
      <header className={styles.header}>
        {home
          ? (
            <>
              <Image
                alt={name}
                className={utilStyles.borderCircle}
                height={144}
                priority={true}
                src='/images/profile.jpg'
                width={144} />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          )
          : (
            <>
              <Link href='/'>
                <a>
                  <Image
                    alt={name}
                    className={utilStyles.borderCircle}
                    height={108}
                    priority={true}
                    src='/images/profile.jpg'
                    width={108} />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href='/'>
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>{'← Back to home'}</a>
          </Link>
        </div>
      )}
    </div>
  );
}
/* eslint-enable jsx-a11y/anchor-is-valid */
