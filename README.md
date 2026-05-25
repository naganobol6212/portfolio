# masagin — Portfolio

[Astro](https://astro.build/) + Tailwind CSS v4 で構築したポートフォリオサイト。Cloudflare Pages の無料枠で運用します。

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 静的サイトを dist/ に出力
npm run preview  # ビルド結果のプレビュー
```

## ディレクトリ構成

```
src/
  components/    # 各セクション・UI 部品
  content/blog/  # Markdown 形式のブログ記事
  data/          # Works / Skills のデータ定義
  layouts/       # ベースレイアウト
  pages/         # ルーティング（/, /blog, /blog/[slug], rss.xml）
  styles/        # global.css (Tailwind v4)
  consts.ts      # サイト全体の定数（タイトル / メタ）
public/          # favicon, robots.txt など静的アセット
```

## ブログを書く

`src/content/blog/<slug>.md` を新規作成。frontmatter は以下のスキーマです。

```yaml
---
title: "記事タイトル"
description: "OGP やトップに出る説明文"
pubDate: 2026-05-25
updatedDate: 2026-06-01   # 省略可
tags: ["Astro", "Rails"]
draft: false              # true にすると非公開
---
```

## Works / Skills の更新

- 作品追加: `src/data/works.ts` の `WORKS` 配列に追記
- スキル更新: `src/data/skills.ts` の `SKILLS` 配列を編集

## Cloudflare Pages へのデプロイ

1. [Cloudflare Pages](https://pages.cloudflare.com/) で「Create a project」→ GitHub リポジトリを接続
2. ビルド設定
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. デプロイ後、`*.pages.dev` のサブドメインで公開されます

`astro.config.mjs` の `site` を独自ドメインに切り替えれば、SEO 用 canonical / sitemap / RSS が自動で追従します。
