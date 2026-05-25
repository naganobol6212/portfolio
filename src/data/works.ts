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
    slug: 'ror-quiz',
    title: 'RoR Quiz',
    tagline: 'Ruby on Rails の技術力を高めるクイズ + ジャーナル',
    description:
      'Ruby on Rails の学習を継続するためのクイズと、振り返り用ジャーナル機能を備えた学習サイト。間違えた問題や気付きをジャーナルに残し、知識の定着サイクルを回せる構成。',
    stack: ['Ruby on Rails', 'TypeScript', 'Vercel'],
    role: '個人開発',
    repo: 'https://github.com/naganobol6212/ruby_on_rails_quiz',
    demo: 'https://ruby-on-rails-quiz-yu1v.vercel.app/',
  },
];
