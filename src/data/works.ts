export type Work = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  repo: string;
  demo?: string;
};

export const WORKS: Work[] = [
  {
    slug: 'mabatalk',
    title: 'MabaTalk',
    tagline: 'まばたきで意思を伝える、コミュニケーション支援アプリ',
    description:
      '発話や身体運動が困難な方が、まばたきによる Yes / No 入力で気持ちを伝えるための Web アプリ。階層化されたカテゴリで負担を抑えつつ、対話履歴を残し、Anthropic Claude による要約で介護者の振り返りを支援する。',
    stack: [
      'Ruby on Rails 7.2',
      'Hotwire',
      'Tailwind CSS',
      'PostgreSQL (Neon)',
      'Devise / OmniAuth',
      'Anthropic Claude',
      'Render',
    ],
    role: '個人開発（企画・設計・実装・運用）',
    repo: 'https://github.com/naganobol6212/Mabatalk',
    demo: 'https://mabatalk.com/',
  },
  {
    slug: 'vow-pact',
    title: 'Vow Pact',
    tagline: '目標と制約を「誓い」として刻む、中世風 SPA',
    description:
      '目標・制約・期限を組み合わせた「誓約」を結び、日々のチェックインで遵守率を積み上げる自律支援アプリ。50% 以上の達成でレアリティ付きの紋章を獲得できる、ゲーミフィケーション要素を持つ個人開発プロジェクト。',
    stack: [
      'Ruby 3.4 / Rails 8.1',
      'PostgreSQL 18',
      'React 19',
      'TanStack Query',
      'Tailwind CSS',
      'Framer Motion',
      'OpenAI API',
      'Render / Neon',
    ],
    role: '個人開発（企画・設計・実装・運用）',
    repo: 'https://github.com/naganobol6212/vow_pact',
    demo: 'https://vow-pact.onrender.com/',
  },
  {
    slug: 'space-logger',
    title: 'Space Logger',
    tagline: '学習ログを宇宙探索になぞらえて記録するアプリ',
    description:
      '学習時間・タグ・入出力比などを記録し、GitHub Contribution Graph に自動反映する学習ログアプリ。GitHub トークンは Edge Functions 側で扱い、PKCE による OAuth でブラウザ側にトークンを露出させない設計を採用している。',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase (Auth / Postgres / Edge Functions)',
      'Vercel',
    ],
    role: '個人開発（企画・設計・実装・運用）',
    repo: 'https://github.com/naganobol6212/space_logger',
    demo: 'https://space-logger.vercel.app/',
  },
  {
    slug: 'code-dojo',
    title: 'CodeDojo',
    tagline: '多言語・多分野のクイズ + 学習ジャーナル + フラッシュカード',
    description:
      'Ruby/Rails・JavaScript・TypeScript・React/Next.js・Python・SQL・Git・Linux・セキュリティ・AI 等を横断する 800 問超のクイズ、KPT / STAR / 5W1H / YWT / PREP / 日報の 6 種テンプレートを備えた学習ジャーナル、SM-2 アルゴリズムによる間隔反復フラッシュカードを統合した学習プラットフォーム。ブラウザ単体で完結する設計で、任意で Supabase 連携によるクラウド同期にも対応。',
    stack: [
      'Next.js 16 (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'Supabase (Auth / Postgres / RLS)',
      'Vercel',
    ],
    role: '個人開発（企画・設計・実装・運用）',
    repo: 'https://github.com/naganobol6212/code-dojo-app',
    demo: 'https://code-dojo-app.vercel.app/',
  },
];
