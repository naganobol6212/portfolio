export type SkillGroup = {
  heading: string;
  note?: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    heading: '個人開発で使用',
    note: '実務経験はこれから。個人開発を通じて手を動かしてきた領域です。',
    items: [
      'Ruby / Ruby on Rails',
      'TypeScript / React',
      'Hotwire (Turbo / Stimulus)',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    heading: 'これから業務で扱う技術',
    note: '入社後、フルスタックに広げていく予定の技術スタック。',
    items: ['Nuxt', 'Next.js', 'Python', 'Ruby on Rails'],
  },
  {
    heading: 'ツール / インフラ',
    items: ['Git / GitHub', 'Render', 'Vercel', 'Cloudflare Pages', 'Neon'],
  },
];
