import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'でぶ手帳', page: '/' },
  { label: 'Contact', page: '/contact' },
  { label: 'Twitter', link: 'https://twitter.com/gorou12' },
  { label: '本家：ぽけ手帳', link: 'https://www.pokete.com/' },
]

const ogImageUrl = 'https://blog.pokete.dev/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} でぶ手帳</title>
        <meta
          name="description"
          content="思いついたり悩んだりしていることを吐き出すだけの場所。"
        />
        <meta name="og:title" content="でぶ手帳" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@gorou12" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
