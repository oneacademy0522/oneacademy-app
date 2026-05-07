'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

function DetailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams.get('url') || 'https://oneacademy.co.kr';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* 상단 뒤로가기 바 */}
      <div style={{
        background: '#1a237e',
        color: 'white',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexShrink: 0,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}>
        <button
          onClick={() => router.back()}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '0',
          }}
        >←</button>
        <span style={{ fontSize: '15px', fontWeight: '700' }}>매물 상세보기</span>
      </div>

      {/* 웹뷰 iframe */}
      <iframe
        src={url}
        style={{
          flex: 1,
          border: 'none',
          width: '100%',
        }}
        title="매물 상세"
      />
    </div>
  );
}

export default function DetailPage() {
  return (
    <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#1e5fa8' }}>로딩중...</div>}>
      <DetailContent />
    </Suspense>
  );
}
