'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import photosData from '../data/photos.json';

const ACCENT = '#C9A961';

type Category = 'ren' | 'towako' | 'duo';
type Filter = 'all' | Category;

interface Photo {
  src: string;
  alt: string;
}

const CATEGORY_LABEL: Record<Category, string> = {
  ren: '鳩咲蓮',
  towako: '鳩宮とわ子',
  duo: 'デュオ',
};

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'ren', label: CATEGORY_LABEL.ren },
  { key: 'towako', label: CATEGORY_LABEL.towako },
  { key: 'duo', label: CATEGORY_LABEL.duo },
];

const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMzkyOTIwIi8+PC9zdmc+';

const allPhotos: (Photo & { category: Category })[] = (['ren', 'towako', 'duo'] as Category[])
  .flatMap((category) =>
    (photosData[category] as Photo[]).map((photo) => ({ ...photo, category })),
  );

export default function PhotoPage() {
  const [filter, setFilter] = useState<Filter>('all');

  const photos = useMemo(
    () => (filter === 'all' ? allPhotos : allPhotos.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="bg-[#0a0a0a] text-white">
      <section className="border-b border-amber-900/30 bg-[linear-gradient(180deg,rgba(201,169,97,0.10),rgba(10,10,10,0))]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.48em] text-gray-500">photo</p>
          <h1
            className="mt-4 text-4xl font-light tracking-[0.28em] sm:text-5xl"
            style={{ color: ACCENT }}
          >
            PHOTO
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300">
            光と影のあいだに残った時間の記録。<br />
            鳩咲蓮、鳩宮とわ子、ふたりの瞬間を集めた写真集。
          </p>
        </div>
      </section>

      <section className="border-b border-amber-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-amber-900/30 pb-6">
            <h2 className="text-xs uppercase tracking-[0.42em]" style={{ color: ACCENT }}>
              Gallery
            </h2>
            <p className="text-[11px] uppercase tracking-[0.32em] text-gray-500">
              {photos.length.toString().padStart(2, '0')} photos
            </p>
          </div>

          <div
            role="tablist"
            aria-label="フィルター"
            className="mt-8 flex flex-wrap gap-3"
          >
            {FILTERS.map((item) => {
              const isActive = filter === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(item.key)}
                  className="rounded-sm border px-5 py-2 text-[11px] uppercase tracking-[0.32em] transition-colors"
                  style={{
                    borderColor: isActive ? ACCENT : 'rgba(120,53,15,0.35)',
                    color: isActive ? ACCENT : '#cbd5e1',
                    backgroundColor: isActive ? 'rgba(201,169,97,0.08)' : 'transparent',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative mb-4 overflow-hidden rounded-sm border border-amber-900/30 break-inside-avoid transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-amber-900/30"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="h-auto w-full object-cover"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-[linear-gradient(180deg,rgba(10,10,10,0),rgba(10,10,10,0.85))] px-4 py-3 text-[11px] tracking-[0.18em] text-gray-200 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {CATEGORY_LABEL[photo.category]}
                </figcaption>
              </figure>
            ))}
          </div>

          {photos.length === 0 && (
            <div className="mt-12 rounded-sm border border-dashed border-amber-900/40 p-12 text-center">
              <p className="text-xs uppercase tracking-[0.42em] text-gray-500">No Photos</p>
              <p className="mt-4 text-sm text-gray-400">該当する写真が見つかりませんでした。</p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <p className="text-xs uppercase tracking-[0.42em]" style={{ color: ACCENT }}>
            Visual Direction
          </p>
          <h3 className="mt-5 text-2xl font-light tracking-[0.18em]">
            琥珀色の光、淡い体温
          </h3>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-gray-300">
            HATO RENOIR のヴィジュアルは、強い構図よりも光の温度を主役にする。
            琥珀色のスポット、長い影、ピアノとチェロが沈黙に触れる瞬間——
            写真もまた、ふたりが鳴らす音と同じリズムで設計されている。
          </p>
        </div>
      </section>
    </div>
  );
}
