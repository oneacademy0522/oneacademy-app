import Link from 'next/link';
import * as cheerio from 'cheerio';

const LIST_URL = 'https://oneacademy.co.kr/bbs/board.php?bo_table=table35';
const SHOW_COUNT = 5; // 앱에 보여줄 매물 개수

const PRIMARY = '#1a237e';
const PRIMARY_DARK = '#154a8a';
const ACCENT = '#e8502a';
const BG = '#f4f7fb';

type Listing = {
  id: string;
  region: string;
  type: string;
  deposit: string;
  rent: string;
  premium: string;
  students: string;
  area: string;
  date: string;
};

async function getListings(): Promise<Listing[]> {
  try {
    const res = await fetch(LIST_URL, {
      next: { revalidate: 300 }, // 5분마다 새로 불러오기
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return [];

    const html = await res.text();
    const $ = cheerio.load(html);
    const seen = new Set<string>();
    const items: Listing[] = [];

    $('tr').each((_, tr) => {
      const tds = $(tr).find('td');
      if (tds.length < 9) return;

      const cells = tds
        .map((_, td) => $(td).text().replace(/\s+/g, ' ').trim())
        .get();

      const id = cells[0];
      if (!/^\d+$/.test(id) || seen.has(id)) return;
      seen.add(id);

      items.push({
        id,
        region: cells[1],
        type: cells[2],
        deposit: cells[3],
        rent: cells[4],
        premium: cells[5],
        students: cells[6],
        area: cells[7],
        date: cells[8],
      });
    });

    return items.slice(0, SHOW_COUNT);
  } catch {
    return [];
  }
}

export default async function LatestListings() {
  const listings = await getListings();
  const allUrl = `/detail?url=${encodeURIComponent(LIST_URL)}`;

  return (
    <section style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#1a2e4a', marginBottom: '14px' }}>
        🆕 최신 매물
      </h2>

      {listings.length === 0 && (
        <div style={{
          background: 'white', borderRadius: '12px', padding: '24px 16px',
          textAlign: 'center', color: '#666', fontSize: '13px',
          border: '1px solid #dde8f5', marginBottom: '10px',
        }}>
          매물 정보를 불러오지 못했어요.<br />아래 버튼으로 전체 매물을 확인해 주세요.
        </div>
      )}

      {listings.map((item) => {
        // 등록일이 시간(예: 10:05) 형태면 오늘 등록된 매물
        const isNew = /^\d{1,2}:\d{2}$/.test(item.date);
        const detailUrl = `${LIST_URL}&wr_id=${item.id}`;

        return (
          <Link
            key={item.id}
            href={`/detail?url=${encodeURIComponent(detailUrl)}`}
            style={{
              display: 'block', background: 'white', borderRadius: '12px',
              padding: '16px', marginBottom: '10px', textDecoration: 'none',
              color: '#222', boxShadow: '0 2px 8px rgba(30,95,168,0.08)',
              border: '1px solid #dde8f5',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a' }}>{item.region}</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                  {item.type} · 매물번호 {item.id}
                </div>
              </div>
              {isNew && (
                <span style={{
                  background: ACCENT, color: 'white', fontSize: '11px',
                  padding: '3px 8px', borderRadius: '10px', fontWeight: '700',
                }}>NEW</span>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[
                { label: '보증금', value: item.deposit },
                { label: '임대료', value: item.rent },
                { label: '권리금', value: item.premium },
                { label: '원생수 / 면적', value: `${item.students} / ${item.area}` },
              ].map((info) => (
                <div key={info.label} style={{ background: BG, borderRadius: '6px', padding: '8px' }}>
                  <div style={{ fontSize: '10px', color: '#888', marginBottom: '2px' }}>{info.label}</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: PRIMARY_DARK }}>{info.value}</div>
                </div>
              ))}
            </div>
          </Link>
        );
      })}

      <Link href={allUrl} style={{
        display: 'block', textAlign: 'center', background: PRIMARY,
        color: 'white', padding: '14px', borderRadius: '10px',
        textDecoration: 'none', fontWeight: '700', fontSize: '15px', marginTop: '4px',
      }}>
        전체 매물 보기 →
      </Link>
    </section>
  );
}
