export default function PrivacyPage() {
  const PRIMARY = '#1a237e';
  const PRIMARY_DARK = '#154a8a';

  return (
    <main style={{ minHeight: '100vh', background: '#f4f7fb', fontFamily: "'Noto Sans KR', sans-serif" }}>
      {/* 헤더 */}
      <header style={{
        background: PRIMARY, color: 'white', padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: '12px',
        position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}>
        <a href="/" style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>←</a>
        <div style={{ fontSize: '16px', fontWeight: '800' }}>개인정보처리방침</div>
      </header>

      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>

          <h1 style={{ fontSize: '18px', fontWeight: '900', color: PRIMARY, marginBottom: '8px' }}>개인정보처리방침</h1>
          <p style={{ fontSize: '12px', color: '#888', marginBottom: '24px' }}>시행일: 2024년 1월 1일</p>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a', marginBottom: '10px' }}>1. 개인정보의 처리 목적</h2>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
              원아카데미(피아노홈)은 다음의 목적을 위하여 개인정보를 처리합니다.<br />
              - 학원 매매 상담 서비스 제공<br />
              - 매물 정보 안내 및 연락<br />
              - 고객 문의 응대
            </p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a', marginBottom: '10px' }}>2. 수집하는 개인정보 항목</h2>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
              - 상담 신청 시: 이름, 연락처, 지역, 상담 내용<br />
              - 자동 수집: 접속 IP, 앱 사용 기록
            </p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a', marginBottom: '10px' }}>3. 개인정보의 보유 및 이용 기간</h2>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
              상담 완료 후 3년간 보관 후 파기합니다.<br />
              단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
            </p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a', marginBottom: '10px' }}>4. 개인정보의 제3자 제공</h2>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
              원아카데미(피아노홈)은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.<br />
              단, 이용자의 동의가 있거나 법령의 규정에 의한 경우는 예외로 합니다.
            </p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a', marginBottom: '10px' }}>5. 개인정보 보호책임자</h2>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
              - 업체명: 피아노홈 (원아카데미)<br />
              - 대표자: 양원모<br />
              - 연락처: 02-575-7792<br />
              - 이메일: 문의는 전화 또는 카카오 상담으로 연락 바랍니다.
            </p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a', marginBottom: '10px' }}>6. 이용자의 권리</h2>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
              이용자는 언제든지 개인정보 열람, 수정, 삭제, 처리정지를 요청할 수 있습니다.<br />
              요청은 전화(02-575-7792) 또는 카카오 상담을 통해 가능합니다.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2e4a', marginBottom: '10px' }}>7. 개인정보처리방침 변경</h2>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.8' }}>
              본 방침은 법령 또는 서비스 변경사항을 반영하기 위해 수정될 수 있으며,<br />
              변경 시 앱 내 공지를 통해 안내드립니다.
            </p>
          </section>

        </div>

        <div style={{ textAlign: 'center', padding: '20px', fontSize: '11px', color: '#888' }}>
          원아카데미 (피아노홈) | 대표: 양원모 | Tel: 02-575-7792
        </div>
      </div>
    </main>
  );
}
