# 1060ki.com

市川智貴 (@1060ki) のホームページ。<https://1060ki.com>

## 技術構成

| | |
| --- | --- |
| フレームワーク | [Astro](https://astro.build) 5（静的生成・JS ほぼゼロ） |
| スタイル | [Tailwind CSS](https://tailwindcss.com) v4（`@theme inline` によるトークン定義） |
| 型 | TypeScript（`astro check` を build 時に実行） |
| ホスティング | GitHub Pages（GitHub Actions からデプロイ） |
| Node | `.tool-versions` に定義（asdf） |

## 開発

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check → dist/ に静的生成
npm run preview  # dist/ をローカル配信
npm run og       # public/og.png を再生成（macOS のシステムフォントを使用）
```

## 内容の更新

サイトに出る文言・年表・リンクは **`src/data/profile.ts` の 1 ファイルに集約**しています。
コンポーネントを触らずに、ここだけ編集すれば反映されます。

| エクスポート | 内容 |
| --- | --- |
| `site` | タイトル・説明・URL などのメタ情報 |
| `profile` | 氏名、ハンドル、肩書き、タグライン、About の本文 |
| `focus` | About 右側に並ぶ「いま向き合っていること」 |
| `timeline` | Career の年表。古い順に書けば表示側で新しい順に並び替えます |
| `links` | Links セクションと JSON-LD の `sameAs` |
| `sections` | セクションの通し番号とナビゲーションのラベル |

年表に出典リンクを付けたいときは、エントリに `href` を足してください。

## デザイン

「校正刷り（proof sheet）」がモチーフです。旧サイトから受け継いだトンボと CMYK
カラーバーを、`TrimMarks.astro` / `ColorBar.astro` にインライン SVG として再実装しています。

配色は `src/styles/global.css` の CSS 変数で定義し、
`:root` → `@media (prefers-color-scheme: dark)` → `:root[data-theme='dark']` の順に
上書きすることで、OS 設定への追従と手動切り替えの両方に対応しています。

アニメーションはすべて `prefers-reduced-motion: reduce` で無効化されます。

## デプロイ

`master` への push で `.github/workflows/deploy.yml` が走り、`dist/` が GitHub Pages
に公開されます。

> [!IMPORTANT]
> リポジトリの **Settings → Pages → Build and deployment → Source** を
> **GitHub Actions** に設定してください（旧構成のブランチ配信のままだと反映されません）。

独自ドメインは `public/CNAME` で `1060ki.com` を指定しています。
