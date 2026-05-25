export type SkillGroup = {
  heading: string;
  items: string;
};

export const SKILLS: SkillGroup[] = [
  {
    heading: 'BACKEND',
    items: 'Ruby on Rails 8 / Ruby 3.4 / PostgreSQL / Solid Queue',
  },
  {
    heading: 'FRONTEND',
    items: 'TypeScript / React 19 / Vite / Tailwind CSS / Hotwire',
  },
  {
    heading: 'AI',
    items: 'Anthropic Claude / OpenAI',
  },
  {
    heading: 'INFRA',
    items: 'Docker / Render / Vercel / Supabase / Neon / Cloudflare Pages',
  },
  {
    heading: 'AUTH',
    items: 'Devise / Rails 8 標準認証 / OAuth (PKCE) / Supabase RLS',
  },
  {
    heading: 'TEST / TOOLS',
    items: 'RSpec / Vitest / Testing Library / Git / GitHub / Figma / Claude Code',
  },
];

export const FUTURE_STACK: string[] = ['Nuxt', 'Next.js', 'Python', 'Ruby on Rails (実務)'];
