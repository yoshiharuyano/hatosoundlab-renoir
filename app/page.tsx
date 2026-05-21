import Image from 'next/image';
import Link from 'next/link';

const ACCENT = '#C9A961';

export default function TopPage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[78vh] min-h-[560px] w-full">
          <Image
            src="/hero.png"
            alt="HATO RENOIR — Hero Visual"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.45)_0%,rgba(10,10,10,0.15)_38%,rgba(10,10,10,0.92)_100%)]" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20">
              <p className="text-[11px] uppercase tracking-[0.5em] text-gray-300/80">
                echoes of emotion
              </p>
              <h1
                className="mt-4 text-5xl font-light tracking-[0.3em] sm:text-6xl md:text-7xl"
                style={{ color: ACCENT }}
              >
                HATO RENOIR
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-9 tracking-[0.12em] text-gray-100 sm:text-xl">
                光と影、そのあいだ。
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300/90">
                チェロとピアノ、声と沈黙。二つの音が触れあう瞬間に残る、淡い体温と長い残響。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-900/30 bg-[linear-gradient(180deg,rgba(201,169,97,0.06),rgba(10,10,10,0))]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 md:grid-cols-[1fr_1.2fr] md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.42em]" style={{ color: ACCENT }}>
              Concept
            </p>
            <h2 className="mt-5 text-3xl font-light tracking-[0.18em] sm:text-4xl">
              光と影、そのあいだ。
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-gray-300">
            <p>
              HATO RENOIR は、鳩宮 とわ子（Cello / Vocal）と 鳩咲 蓮（Piano / Composition）による二人組ユニット。
            </p>
            <p>
              強い旋律で言葉を押し出すのではなく、呼吸の揺れと余白を編み込みながら、感情の輪郭をやわらかく描いていく。
              チェロの体温、ピアノの残響、そして沈黙——その重なりが、聴き手の内側にひとつの景色を立ち上げる。
            </p>
            <p>
              わたしたちが鳴らしたいのは、光と影のどちらかではない。<br />
              そのあいだに揺れる、名前のつかない時間の音。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-900/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.42em]" style={{ color: ACCENT }}>
            Explore
          </p>
          <h3 className="mt-5 text-2xl font-light tracking-[0.18em] sm:text-3xl">
            ユニットを知る
          </h3>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/profile"
              className="group block rounded-sm border border-amber-900/30 bg-[linear-gradient(160deg,rgba(245,245,220,0.08),rgba(10,10,10,0.9))] p-8 transition-colors hover:border-amber-700/60"
            >
              <p className="text-[11px] uppercase tracking-[0.36em] text-gray-500">01 — Profile</p>
              <p
                className="mt-4 text-2xl font-light tracking-[0.22em] transition-colors group-hover:text-white"
                style={{ color: ACCENT }}
              >
                PROFILE
              </p>
              <p className="mt-5 text-sm leading-7 text-gray-300">
                鳩宮 とわ子・鳩咲 蓮、ふたりのポートレートと音楽スタイル、性格やシンボルを辿る。
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.32em] text-gray-500 transition-colors group-hover:text-amber-500">
                Read more →
              </p>
            </Link>

            <Link
              href="/music"
              className="group block rounded-sm border border-amber-900/30 bg-[linear-gradient(160deg,rgba(201,169,97,0.10),rgba(10,10,10,0.9))] p-8 transition-colors hover:border-amber-700/60"
            >
              <p className="text-[11px] uppercase tracking-[0.36em] text-gray-500">02 — Music</p>
              <p
                className="mt-4 text-2xl font-light tracking-[0.22em] transition-colors group-hover:text-white"
                style={{ color: ACCENT }}
              >
                MUSIC
              </p>
              <p className="mt-5 text-sm leading-7 text-gray-300">
                ディスコグラフィと、楽曲に込めた風景。チェロとピアノが描く、淡い残響のアーカイブ。
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.32em] text-gray-500 transition-colors group-hover:text-amber-500">
                Listen →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
