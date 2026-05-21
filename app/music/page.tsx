const ACCENT = '#C9A961';

interface Release {
  title: string;
  engTitle?: string;
  releaseDate: string;
  format: string;
  tracks?: string[];
  description?: string;
  links?: { label: string; href: string }[];
  coverLabel?: string;
}

const releases: Release[] = [];

export default function MusicPage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <section className="border-b border-amber-900/30 bg-[linear-gradient(180deg,rgba(201,169,97,0.10),rgba(10,10,10,0))]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.48em] text-gray-500">music</p>
          <h1
            className="mt-4 text-4xl font-light tracking-[0.28em] sm:text-5xl"
            style={{ color: ACCENT }}
          >
            DISCOGRAPHY
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300">
            チェロとピアノが描く、淡い体温と長い残響のアーカイブ。<br />
            ひとつひとつの作品は、光と影のあいだに残った、名前のつかない時間の記録。
          </p>
        </div>
      </section>

      <section className="border-b border-amber-900/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <div className="flex items-baseline justify-between gap-6 border-b border-amber-900/30 pb-6">
            <h2 className="text-xs uppercase tracking-[0.42em]" style={{ color: ACCENT }}>
              Releases
            </h2>
            <p className="text-[11px] uppercase tracking-[0.32em] text-gray-500">
              {releases.length.toString().padStart(2, '0')} works
            </p>
          </div>

          {releases.length === 0 ? (
            <div className="mt-12 rounded-sm border border-dashed border-amber-900/40 bg-[linear-gradient(160deg,rgba(245,245,220,0.04),rgba(10,10,10,0.92))] p-12 text-center">
              <p className="text-xs uppercase tracking-[0.42em] text-gray-500">Coming Soon</p>
              <p
                className="mt-5 text-2xl font-light tracking-[0.18em]"
                style={{ color: ACCENT }}
              >
                沈黙のあとに、最初の音を。
              </p>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400">
                HATO RENOIR のディスコグラフィは現在準備中です。<br />
                チェロとピアノが触れあう最初の作品を、まもなく公開予定。
              </p>
            </div>
          ) : (
            <ul className="mt-12 space-y-10">
              {releases.map((release) => (
                <li
                  key={`${release.releaseDate}-${release.title}`}
                  className="grid gap-8 rounded-sm border border-amber-900/30 bg-black/35 p-8 md:grid-cols-[1fr_2fr]"
                >
                  <div className="flex aspect-square items-center justify-center rounded-sm border border-amber-900/40 bg-[linear-gradient(160deg,rgba(245,245,220,0.10),rgba(10,10,10,0.94))] p-6 text-center">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.34em] text-gray-500">Artwork</p>
                      <p
                        className="mt-3 text-base font-light tracking-[0.2em]"
                        style={{ color: ACCENT }}
                      >
                        {release.coverLabel ?? release.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.34em] text-gray-500">
                        {release.releaseDate} · {release.format}
                      </p>
                      <h3 className="mt-3 text-3xl font-light tracking-[0.16em]">{release.title}</h3>
                      {release.engTitle && (
                        <p className="mt-2 text-xs uppercase tracking-[0.4em] text-gray-400">
                          {release.engTitle}
                        </p>
                      )}
                    </div>

                    {release.description && (
                      <p className="text-sm leading-7 text-gray-300">{release.description}</p>
                    )}

                    {release.tracks && release.tracks.length > 0 && (
                      <ol className="space-y-2 border-t border-amber-900/30 pt-5">
                        {release.tracks.map((track, index) => (
                          <li key={track} className="flex gap-4 text-sm text-gray-300">
                            <span className="w-6 text-right text-gray-500">
                              {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <span>{track}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {release.links && release.links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-3">
                        {release.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="rounded-sm border border-amber-900/40 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-gray-300 transition-colors hover:border-amber-600 hover:text-white"
                          >
                            {link.label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <p className="text-xs uppercase tracking-[0.42em]" style={{ color: ACCENT }}>
            Sound Direction
          </p>
          <h3 className="mt-5 text-2xl font-light tracking-[0.18em]">
            余白と残響、ふたりだけの設計
          </h3>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-gray-300">
            HATO RENOIR の楽曲は、旋律よりも先に「空気」を設計する。
            チェロの呼吸と、ピアノの消えゆく残響。沈黙を音楽の一部として扱い、
            聴き手の内側にだけ広がる景色を、ひとつずつ刻んでいく。
          </p>
        </div>
      </section>
    </div>
  );
}
