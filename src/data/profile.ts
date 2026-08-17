/**
 * このファイルがサイトの唯一の情報源です。
 * 文言・年表・リンクを変えたいときは、ここだけ編集すれば全ページに反映されます。
 */

export type EntryKind = 'life' | 'edu' | 'work' | 'award';

export interface TimelineEntry {
  /** 表示用の西暦（例: 2019） */
  year: number;
  /** 任意。表示は「2019.10」のようになります */
  month?: number;
  kind: EntryKind;
  title: string;
  detail?: string;
  /** 出典やプレスリリースへのリンク（任意） */
  href?: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  /** Icon.astro が対応しているキー */
  icon: 'github' | 'x' | 'wantedly' | 'youtrust' | 'mail';
}

export const site = {
  url: 'https://1060ki.com',
  title: 'Tomoki Ichikawa',
  description:
    '市川智貴 (@1060ki) のホームページ。福岡を拠点に、Web サービスの開発とエンジニアリング組織づくりに取り組んでいます。',
  lang: 'ja',
  locale: 'ja_JP',
} as const;

/**
 * Cloudflare Web Analytics のビーコントークン。
 *
 * Cloudflare ダッシュボード → Analytics & Logs → Web Analytics → Add a site
 * で 1060ki.com を登録すると、JS スニペットのなかに 32 桁の token が出てきます。
 * その値をここに貼るだけで計測が始まります（ドメインを Cloudflare に
 * 向けている必要はありません）。
 *
 * 空のあいだは計測タグを一切出力しません。また、本番ビルドのときだけ
 * 出力するので、ローカルの astro dev はカウントされません。
 *
 * 公開ページの HTML に必ず露出する種類のトークンなので、
 * リポジトリに直接置いて問題ありません。
 */
export const analytics = {
  cloudflareToken: '',
} as const;

export const profile = {
  nameJa: '市川 智貴',
  nameEn: 'Tomoki Ichikawa',
  displayName: 'T.Ichikawa',
  handle: '@1060ki',
  location: 'Fukuoka, Japan',
  locationJa: '福岡',
  role: 'Software Engineer / Engineering Manager',
  /**
   * ヒーロー直下に出る一文。
   * 節ごとに配列で持たせ、狭い画面ではこの区切りでだけ改行させる
   * （日本語はどこでも折り返せてしまうので、語の途中で割れるのを防ぐ）。
   */
  tagline: ['Webサービスの開発と、', 'それをつくる組織づくりを。'],
  /** About セクション本文（段落ごとに配列） */
  bio: [
    '福岡を拠点に、Web サービスの開発とエンジニアリング組織づくりに取り組んでいます。サーバーサイドとインフラを軸に、プロダクトを立ち上げるところから、それを支えるチームを設計するところまでが守備範囲です。',
    'Ruby on Rails での開発を軸にキャリアを始め、いまは Fintech 領域で、0→1 の立ち上げと 1→10 のスケールの両方を、開発と組織の両面から見ています。',
    '「つくったものが現場で動く瞬間」がいちばん好きで、そのために必要なことなら実装でも採用でも組織設計でもやる、というスタンスでいます。',
  ],
} as const;

/**
 * 現在向き合っていること。About の下に並ぶ短いカード。
 */
export const focus: { label: string; body: string }[] = [
  {
    label: 'Product',
    body: 'Fintech 領域のプロダクト開発。決済まわりのサーバーサイドとインフラを中心に。',
  },
  {
    label: 'Organization',
    body: '開発組織づくりとマネジメント。採用、チーム設計、開発プロセスの整備。',
  },
  {
    label: 'Local',
    body: '地方拠点からの開発。福岡でエンジニアが働ける場を広げていくことにも関心があります。',
  },
];

/**
 * 年表。古い順に並べておけば、表示側で新しい順に反転します。
 */
export const timeline: TimelineEntry[] = [
  {
    year: 1995,
    kind: 'life',
    title: '福岡県で生まれる。',
  },
  {
    year: 2011,
    kind: 'edu',
    title: '久留米工業高等専門学校に入学。',
    detail: 'C 言語 / Java などを学ぶ。',
  },
  {
    year: 2016,
    kind: 'edu',
    title: '久留米高専を卒業し、九州工業大学に編入学。',
  },
  {
    year: 2018,
    kind: 'edu',
    title: '九州工業大学を卒業し、同大学院 情報工学府へ進学。',
  },
  {
    year: 2019,
    month: 9,
    kind: 'edu',
    title: '九州工業大学大学院を中途退学。',
  },
  {
    year: 2019,
    month: 10,
    kind: 'work',
    title: '株式会社マネーフォワードに新卒入社。',
    detail: '福岡拠点で『クラウド経費』の開発を担当。Ruby on Rails とインフラ周辺。',
  },
  {
    year: 2020,
    month: 7,
    kind: 'award',
    title: 'Culture Hero - Speed を受賞。',
    detail: '社内表彰。',
  },
  {
    year: 2020,
    month: 10,
    kind: 'work',
    title: '『マネーフォワード Pay for Business（現 マネーフォワード ビジネスカード）』の立ち上げに参画。',
    detail: 'サーバーサイドグループのリーダーとして、サーバーサイドとインフラの構築を担当。',
  },
  {
    year: 2021,
    month: 9,
    kind: 'work',
    title: '「マネーフォワード ビジネスカード」提供開始。',
  },
  {
    year: 2021,
    month: 12,
    kind: 'award',
    title: '半期 事業横断 MVP を受賞。',
  },
  {
    year: 2022,
    month: 8,
    kind: 'work',
    title: 'Pay 事業本部 プロダクト開発部 副部長に就任。',
  },
  {
    year: 2022,
    month: 11,
    kind: 'award',
    title:
      '『マネーフォワード Pay for Business（現 マネーフォワード ビジネスカード）』が Ruby biz グランプリ 2022 特別賞を受賞。',
    href: 'https://prtimes.jp/main/html/rd/p/000000942.000008962.html',
  },
  {
    year: 2023,
    month: 2,
    kind: 'work',
    title: 'Pay 事業本部 プロダクト開発部 部長に就任。',
  },
  {
    year: 2023,
    month: 6,
    kind: 'work',
    title: 'Pay 事業本部 副本部長に就任。',
    detail: '『マネーフォワード ビジネスカード』の開発責任者に。',
  },
  {
    year: 2024,
    month: 12,
    kind: 'work',
    title: 'マネーフォワードケッサイ株式会社 開発本部 副本部長に就任。',
    detail: 'Fintech 関連事業の承継にともない、同社へ。',
  },
];

export const links: SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@1060ki',
    href: 'https://github.com/1060ki',
    icon: 'github',
  },
  {
    label: 'X',
    handle: '@1060ki',
    href: 'https://x.com/1060ki',
    icon: 'x',
  },
  {
    label: 'Wantedly',
    handle: '@t1060ki',
    href: 'https://www.wantedly.com/id/t1060ki',
    icon: 'wantedly',
  },
  {
    label: 'YOUTRUST',
    handle: '@1060ki',
    href: 'https://youtrust.jp/users/1060ki',
    icon: 'youtrust',
  },
];

export const sections = [
  { id: 'about', index: '01', label: 'About' },
  { id: 'career', index: '02', label: 'Career' },
  { id: 'links', index: '03', label: 'Links' },
] as const;
