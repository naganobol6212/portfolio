export const SITE = {
  title: 'masagin — Portfolio',
  description:
    '課題の本質を掘り当て、技術で解決する橋渡しエンジニア masagin のポートフォリオ。Ruby on Rails を軸に、Nuxt / Next.js / Python へ広げるフルスタック志向。',
  author: 'masagin',
  url: 'https://masagin.pages.dev',
  ogImage: '/og.png',
  locale: 'ja_JP',
} as const;

export const NAV = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#works', label: 'Works' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const SOCIAL = {
  github: 'https://github.com/naganobol6212',
} as const;
