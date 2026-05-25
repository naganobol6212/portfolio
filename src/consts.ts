export const SITE = {
  title: 'MASAGIN — Portfolio',
  description:
    '課題の本質を掘り当て、技術で解決する橋渡しエンジニア MASAGIN のポートフォリオ。Ruby on Rails を軸に、Nuxt / Next.js / Python へ広げるフルスタック志向。',
  author: 'MASAGIN',
  url: 'https://masagin.pages.dev',
  ogImage: '/og.png',
  locale: 'ja_JP',
} as const;

export const NAV = [
  { href: '/#about', number: '01', label: '自己紹介' },
  { href: '/#experience', number: '02', label: '経歴' },
  { href: '/#works', number: '03', label: '制作物' },
  { href: '/#skills', number: '04', label: 'スキル' },
  { href: '/blog', number: '05', label: 'ブログ' },
  { href: '/#contact', number: '06', label: '連絡先' },
] as const;

export const SOCIAL = {
  github: 'https://github.com/naganobol6212',
} as const;
