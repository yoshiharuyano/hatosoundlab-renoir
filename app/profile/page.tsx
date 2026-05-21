'use client';

import Image from 'next/image';
import { useState } from 'react';

type MemberKey = 'towako' | 'ren';

interface TimelineItem {
  year: string;
  event: string;
}

interface SkillItem {
  name: string;
  value: number;
}

interface FavoriteSet {
  scent: string;
  film: string;
  place: string;
}

interface Member {
  name: string;
  engName: string;
  role: string;
  color: string;
  quote: string;
  description: string;
  profile: string;
  birthDate: string;
  age: number;
  height: string;
  birthplace: string;
  musicStyles: string[];
  character: string[];
  history: TimelineItem[];
  skills: SkillItem[];
  favorite: FavoriteSet;
  symbol: string;
  symbolDesc: string;
  portrait: string;
  portraitAlt: string;
}

const membersData: Record<MemberKey, Member> = {
  towako: {
    name: '鳩宮 とわ子',
    engName: 'Towako HATOMIYA',
    role: 'Cello / Vocal / Lyric Direction',
    color: '#F5F5DC',
    quote: '「音で触れること。」',
    description: '弓の圧力と呼吸感を極端に重視し、体温が見えるような音を編み上げる。',
    profile:
      '柔らかな微笑みと静かな孤独を同時に抱えた表現者。チェロの発音は言葉よりも先に感情へ触れ、余白に滲む声は夕暮れの光のように温かく、かすかに切ない。HATO RENOIRの中で、とわ子は輪郭をやわらげながら聴き手の内側へそっと入り込む存在。',
    birthDate: '1999.11.18',
    age: 26,
    height: '168cm',
    birthplace: 'Kanagawa, Japan',
    musicStyles: ['Chamber Pop', 'Modern Classical', 'Ambient Folk', 'Cinematic Ballad', 'Organic Acoustic'],
    character: [
      '柔らかく滲ませるような音色で感情の温度を描く',
      '呼吸の揺れをそのままリズムへ変える',
      '空気感を壊さない繊細なアンサンブル感覚を持つ',
      '静かな所作の中に意志の強さを隠している',
    ],
    history: [
      { year: '2019', event: '表現活動の断片がSNSで拡散され、存在感が注目され始める' },
      { year: '2022', event: 'チェロ奏者としての活動を本格化し、声と言葉の演出も磨く' },
      { year: '2024', event: 'HATO RENOIRとして始動し、ユニットの感情的な中心軸を担う' },
      { year: 'NOW', event: 'ライブと作品制作の両輪で、体温を残す表現を更新し続けている' },
    ],
    skills: [
      { name: 'Warmth', value: 95 },
      { name: 'Sensitivity', value: 91 },
      { name: 'Composure', value: 84 },
      { name: 'Mystery', value: 74 },
    ],
    favorite: {
      scent: 'White Musk / Linen / Vanilla Tea',
      film: 'Before Sunset / Little Forest',
      place: '雨の日の喫茶店',
    },
    symbol: 'Warmth',
    symbolDesc: '冷えた感情の輪郭をやわらげ、沈黙の中に安心を灯すぬくもり。',
    portrait: '/members/towako_portrait.png',
    portraitAlt: 'Towako HATOMIYA — Cello / Vocal portrait',
  },
  ren: {
    name: '鳩咲 蓮',
    engName: 'Ren HATOSAKI',
    role: 'Piano / Composition / Sound Direction',
    color: '#C9A961',
    quote: '「空気の記録。」',
    description: '低音と残響設計を軸に、余白そのものを音楽の主役へ引き上げる。',
    profile:
      '感情を過剰に語らず、ひとつの残響で景色を変えるタイプ。ピアノは旋律を押し出すのではなく、視界に静かな層を重ねていくように響く。完成させすぎない美学と沈黙の扱いが、HATO RENOIR全体の陰影と奥行きを決定づけている。',
    birthDate: '2001.07.27',
    age: 24,
    height: '183cm',
    birthplace: 'Tokyo, Japan',
    musicStyles: ['Minimal Piano', 'Ambient Classical', 'Neo Soul', 'Cinematic Sound', 'Silence-based Arrangement'],
    character: [
      '最小限の音数で最大の感情変化を生む',
      '残響と沈黙を設計し、聴き手の想像力を動かす',
      '視線や間の取り方まで含めて物語を構築する',
      '完成を急がず、余白を美として残す判断ができる',
    ],
    history: [
      { year: '2018', event: '各地でライブ活動を重ね、静かな演奏美学を形成する' },
      { year: '2020', event: '作編曲とサウンドディレクションを本格化させる' },
      { year: '2024', event: 'HATO RENOIRとして始動し、音像全体の設計を担う' },
      { year: 'NOW', event: '制作と演奏を横断しながら、余白中心のサウンドを追求している' },
    ],
    skills: [
      { name: 'Silence', value: 95 },
      { name: 'Depth', value: 92 },
      { name: 'Mystery', value: 89 },
      { name: 'Precision', value: 81 },
    ],
    favorite: {
      scent: 'Black Tea / Leather / Rain',
      film: 'Wong Kar-wai / Past Lives',
      place: '閉館前のホテルラウンジ',
    },
    symbol: 'Echo',
    symbolDesc: '音が消えた後にも感情を留め、記憶の中で増幅し続ける残響。',
    portrait: '/members/ren_portrait.png',
    portraitAlt: 'Ren HATOSAKI — Piano / Composition portrait',
  },
};

const memberOrder: MemberKey[] = ['towako', 'ren'];

const infoLabels: Array<{ label: string; getValue: (member: Member) => string | number }> = [
  { label: 'Birthday', getValue: (member) => member.birthDate },
  { label: 'Age', getValue: (member) => member.age },
  { label: 'Height', getValue: (member) => member.height },
  { label: 'Birthplace', getValue: (member) => member.birthplace },
];

export default function ProfilePage() {
  const [activeMember, setActiveMember] = useState<MemberKey>('towako');
  const member = membersData[activeMember];

  return (
    <div className="bg-[#0a0a0a] text-white">
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(201,169,97,0.16)_0%,rgba(201,169,97,0.06)_34%,rgba(10,10,10,0.98)_72%),repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_28px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(245,245,220,0.14),transparent_58%)] opacity-80" />
        <div className="relative">
          <header className="border-b border-amber-900/30">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
              <p className="text-xs uppercase tracking-[0.48em] text-gray-500">profile</p>
              <h1
                className="mt-3 text-3xl font-light tracking-[0.28em] sm:text-4xl"
                style={{ color: '#C9A961' }}
              >
                MEMBERS
              </h1>
            </div>
          </header>

          <nav className="border-b border-amber-900/30" aria-label="Member profiles">
            <div className="mx-auto flex max-w-7xl flex-wrap gap-8 px-6 sm:px-8">
              {memberOrder.map((key) => {
                const item = membersData[key];
                const isActive = key === activeMember;

                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveMember(key)}
                    className="border-b-2 py-5 text-sm tracking-[0.2em] text-gray-500 transition-colors hover:text-gray-300 focus:outline-none"
                    style={{
                      borderColor: isActive ? item.color : 'transparent',
                      color: isActive ? item.color : undefined,
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </nav>

          <section className="border-b border-amber-900/30">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-8 md:grid-cols-[1.05fr_1fr] md:py-18">
              <div className="space-y-6">
                <div className="relative h-[28rem] overflow-hidden rounded-sm border border-amber-900/30 bg-[linear-gradient(160deg,rgba(245,245,220,0.08),rgba(10,10,10,0.96))] sm:h-[34rem]">
                  <Image
                    src={member.portrait}
                    alt={member.portraitAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0)_55%,rgba(10,10,10,0.85)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-6">
                    <div
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xs tracking-[0.34em]"
                      style={{ color: member.color, borderColor: member.color }}
                    >
                      {activeMember === 'towako' ? 'TW' : 'RN'}
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400">Portrait</p>
                      <p className="mt-1 text-sm leading-6 text-gray-200">{member.engName}</p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l border-amber-900/40 pl-5 text-lg leading-8 text-gray-200">
                  <span style={{ color: member.color }}>{member.quote}</span>
                </blockquote>
              </div>

              <div className="flex flex-col justify-between gap-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Profile</p>
                  <h2 className="mt-4 text-4xl font-light tracking-[0.12em] sm:text-5xl">{member.name}</h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.42em] text-gray-400">{member.engName}</p>
                  <p className="mt-6 text-base tracking-[0.18em]" style={{ color: member.color }}>
                    {member.role}
                  </p>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300">{member.description}</p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-sm border border-amber-900/30 bg-amber-900/20 sm:grid-cols-2">
                  {infoLabels.map((item) => (
                    <div key={item.label} className="bg-black/45 p-5">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500">{item.label}</p>
                      <p className="mt-2 text-sm text-gray-200">{item.getValue(member)}</p>
                    </div>
                  ))}
                </div>

                <p className="max-w-2xl text-sm leading-8 text-gray-400">{member.profile}</p>
              </div>
            </div>
          </section>

          <section className="border-b border-amber-900/30">
            <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
              <h3 className="text-xs uppercase tracking-[0.4em]" style={{ color: member.color }}>
                MUSIC STYLE
              </h3>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {member.musicStyles.map((styleName) => (
                  <article key={styleName} className="rounded-sm border border-amber-900/30 bg-amber-900/10 p-5">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-gray-500">Genre</p>
                    <p className="mt-3 text-lg font-light tracking-[0.08em] text-gray-100">{styleName}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-amber-900/30">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-8 md:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-[0.4em]" style={{ color: member.color }}>
                  CHARACTER
                </h3>
                <ul className="mt-8 space-y-4">
                  {member.character.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="mt-1 text-xs text-amber-600">●</span>
                      <span className="text-sm leading-7 text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.4em]" style={{ color: member.color }}>
                  HISTORY
                </h3>
                <div className="mt-8 space-y-5">
                  {member.history.map((item) => (
                    <div key={`${item.year}-${item.event}`} className="border-l-2 border-amber-900/50 pl-5">
                      <p className="text-xs uppercase tracking-[0.34em]" style={{ color: member.color }}>
                        {item.year}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-gray-300">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-amber-900/30">
            <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
              <h3 className="text-xs uppercase tracking-[0.4em]" style={{ color: member.color }}>
                PERSONAL DATA
              </h3>
              <div className="mt-8 space-y-6">
                {member.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm tracking-[0.18em] text-gray-200">{skill.name}</span>
                      <span className="text-xs uppercase tracking-[0.28em] text-gray-500">{skill.value}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full border border-amber-900/30 bg-amber-900/20">
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${skill.value}%`, backgroundColor: member.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-8 md:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-[0.4em]" style={{ color: member.color }}>
                  FAVORITE
                </h3>
                <div className="mt-8 space-y-5 rounded-sm border border-amber-900/30 bg-black/35 p-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">Scent</p>
                    <p className="mt-2 text-sm leading-7 text-gray-200">{member.favorite.scent}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">Film</p>
                    <p className="mt-2 text-sm leading-7 text-gray-200">{member.favorite.film}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">Place</p>
                    <p className="mt-2 text-sm leading-7 text-gray-200">{member.favorite.place}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.4em]" style={{ color: member.color }}>
                  SYMBOL
                </h3>
                <div className="mt-8 flex h-full min-h-64 flex-col justify-between rounded-sm border border-amber-900/30 bg-[linear-gradient(180deg,rgba(201,169,97,0.12),rgba(10,10,10,0.92))] p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">Member Motif</p>
                  <p className="text-4xl font-light tracking-[0.14em]" style={{ color: member.color }}>
                    {member.symbol}
                  </p>
                  <p className="max-w-md text-sm leading-8 text-gray-300">{member.symbolDesc}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
