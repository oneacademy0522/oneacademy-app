import Link from 'next/link';

export default function Home() {
  const listings = [
    { id: 2687, region: '인천 서구', type: '미술-관인', deposit: '3,000만원', rent: '186만원', premium: '2,000만원', students: 70, area: 47, badge: '급매물' },
    { id: 2686, region: '경기 광명시', type: '피아노-관인', deposit: '3,000만원', rent: '195만원', premium: '3,000만원', students: 33, area: 24, badge: '추천' },
    { id: 2681, region: '경기 고양시', type: '피아노-관인', deposit: '4,000만원', rent: '100만원', premium: '1,800만원', students: 26, area: 30, badge: '급매물' },
  ];

  const PRIMARY = '#1a237e';
  const PRIMARY_DARK = '#1a237e';
  const ACCENT = '#e8502a';
  const BG = '#f4f7fb';

  return (
    <main style={{ minHeight: '100vh', background: BG, fontFamily: "'Noto Sans KR', sans-serif" }}>
      {/* 헤더 */}
      <header style={{
        background: PRIMARY, color: 'white', padding: '14px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}>
        <div>
          <div style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>원아카데미</div>
          <div style={{ fontSize: '11px', color: '#b8d4f0', marginTop: '1px' }}>학원 매매 전문 플랫폼</div>
        </div>
        <a href="tel:02-575-7792" style={{
          background: 'white', color: PRIMARY, padding: '8px 16px',
          borderRadius: '20px', textDecoration: 'none', fontSize: '13px', fontWeight: '700',
        }}>📞 전화상담</a>
      </header>

      {/* 히어로 배너 */}
      <section style={{
        background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 100%)`,
        color: 'white', padding: '40px 20px', textAlign: 'center',
      }}>
        <div style={{ fontSize: '12px', color: '#b8d4f0', marginBottom: '8px', letterSpacing: '2px' }}>ONE ACADEMY </div>
        <h1 style={{ fontSize: '26px', fontWeight: '900', lineHeight: '1.3', margin: '0 0 12px' }}>
          좋은 학원,<br />제대로 찾아드립니다
        </h1>
        <p style={{ fontSize: '14px', color: '#d0e4f7', marginBottom: '24px' }}>매도수수료 무료 · 전국 매물 · 전문 상담</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <Link href={`/detail?url=${encodeURIComponent('https://oneacademy.co.kr/bbs/board.php?bo_table=table35')}`} style={{
            background: 'white', color: PRIMARY, padding: '12px 24px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px',
          }}>매물 보기</Link>
          <Link href={`/detail?url=${encodeURIComponent('https://oneacademy.co.kr/bbs/write.php?bo_table=table37')}`} style={{
            background: 'rgba(255,255,255,0.15)', color: 'white', padding: '12px 24px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px',
            border: '1px solid rgba(255,255,255,0.4)',
          }}>상담 신청</Link>
        </div>
      </section>

      {/* 카테고리 */}
      <section style={{ padding: '24px 20px 8px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#1a2e4a', marginBottom: '14px' }}>카테고리별 매물</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          {[
            { emoji: '📚', name: '보습학원', url: 'https://oneacademy.co.kr/bbs/board.php?bo_table=table35&ca_name=보습-전체' },
            { emoji: '🎹', name: '피아노', url: 'https://oneacademy.co.kr/bbs/board.php?bo_table=table35&ca_name=피아노-전체' },
            { emoji: '🎨', name: '미술학원', url: 'https://oneacademy.co.kr/bbs/board.php?bo_table=table35&ca_name=미술-전체' },
          ].map((cat) => (
            <Link key={cat.name} href={`/detail?url=${encodeURIComponent(cat.url)}`} style={{
              background: 'white', borderRadius: '12px', padding: '16px 8px',
              textAlign: 'center', textDecoration: 'none', color: '#1a2e4a',
              boxShadow: '0 2px 8px rgba(30,95,168,0.08)', display: 'block',
              border: `1px solid #dde8f5`,
            }}>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>{cat.emoji}</div>
              <div style={{ fontSize: '12px', fontWeight: '700' }}>{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 추천 매물 */}
      <section style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#1a2e4a', marginBottom: '14px' }}>🏆 추천 매물</h2>
        {listings.map((item) => (
          <Link key={item.id} href={`/detail?url=${encodeURIComponent(`https://oneacademy.co.kr/bbs/board.php?bo_table=table35&wr_id=${item.id}`)}`} style={{
            display: 'block', background: 'white', borderRadius: '12px',
            padding: '16px', marginBottom: '10px', textDecoration: 'none',
            color: '#222', boxShadow: '0 2px 8px rgba(30,95,168,0.08)',
            border: '1px solid #dde8f5',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a' }}>{item.region}</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{item.type}</div>
              </div>
              <span style={{
                background: item.badge === '급매물' ? ACCENT : PRIMARY,
                color: 'white', fontSize: '11px', padding: '3px 8px',
                borderRadius: '10px', fontWeight: '700',
              }}>{item.badge}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[
                { label: '보증금', value: item.deposit },
                { label: '임대료', value: item.rent },
                { label: '권리금', value: item.premium },
                { label: '원생수', value: `${item.students}명 / ${item.area}평` },
              ].map((info) => (
                <div key={info.label} style={{ background: BG, borderRadius: '6px', padding: '8px' }}>
                  <div style={{ fontSize: '10px', color: '#888', marginBottom: '2px' }}>{info.label}</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: PRIMARY_DARK }}>{info.value}</div>
                </div>
              ))}
            </div>
          </Link>
        ))}
        <Link href={`/detail?url=${encodeURIComponent('https://oneacademy.co.kr/bbs/board.php?bo_table=table35')}`} style={{
          display: 'block', textAlign: 'center', background: PRIMARY,
          color: 'white', padding: '14px', borderRadius: '10px',
          textDecoration: 'none', fontWeight: '700', fontSize: '15px', marginTop: '4px',
        }}>전체 매물 보기 →</Link>
      </section>

      {/* 지역별 담당자 */}
      <section style={{ padding: '0 20px 20px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#1a2e4a', marginBottom: '14px' }}>📍 지역별 담당자</h2>
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(30,95,168,0.08)', border: '1px solid #dde8f5' }}>
          {[
            { region: '서울 / 김포 일산 파주 / 수원 성남 안양', tel: '010-8966-7792' },
            { region: '부산 / 창원', tel: '010-3327-1206' },
            { region: '대구 / 구미', tel: '010-3032-3467' },
            { region: '인천', tel: '010-7726-5201' },
            { region: '의정부 / 양주 / 남양주', tel: '010-7656-8970' },
            { region: '부천 / 광명', tel: '010-2254-6081' },
            { region: '용인', tel: '010-8301-8993' },
            { region: '광주', tel: '010-4641-6166' },
          ].map((item, i, arr) => (
            <a key={i} href={`tel:${item.tel}`} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', borderBottom: i < arr.length - 1 ? '1px solid #eef3fa' : 'none',
              textDecoration: 'none', color: '#222',
            }}>
              <div style={{ fontSize: '13px', color: '#444' }}>{item.region}</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: PRIMARY }}>{item.tel}</div>
            </a>
          ))}
        </div>
      </section>

      {/* 하단 여백 */}
      <div style={{ height: '80px' }} />

      {/* 하단 고정 버튼 */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: 'white', borderTop: '1px solid #dde8f5',
        padding: '12px 20px', display: 'flex', gap: '10px',
      }}>
        <a href="tel:02-575-7792" style={{
          flex: 1, background: PRIMARY_DARK, color: 'white', padding: '14px',
          borderRadius: '10px', textAlign: 'center', textDecoration: 'none',
          fontWeight: '700', fontSize: '15px',
        }}>📞 02-575-7792</a>
        <Link href={`/detail?url=${encodeURIComponent('https://oneacademy.co.kr/bbs/write.php?bo_table=table37')}`} style={{
          flex: 1, background: PRIMARY, color: 'white', padding: '14px',
          borderRadius: '10px', textAlign: 'center', textDecoration: 'none',
          fontWeight: '700', fontSize: '15px',
        }}>✉️ 상담 신청</Link>
      </div>

      {/* 푸터 */}
      <footer style={{
        background: PRIMARY_DARK, color: '#b8d4f0', padding: '20px',
        fontSize: '11px', textAlign: 'center', lineHeight: '1.8',
      }}>
        <div style={{ color: 'white', fontWeight: '700', marginBottom: '8px' }}>원아카데미</div>
        <div>대표: 양원모 | 사업자번호: 211-86-78946</div>
        <div>서울특별시 서초구 마방로 2길 82 3층</div>
        <div>Tel: 02-575-7792</div>
        <div style={{ marginTop: '8px', color: '#7aaad4' }}>ⓒ 원아카데미 All rights reserved.</div>
      </footer>
    </main>
  );
}
