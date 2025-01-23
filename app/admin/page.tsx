'use client';

import dynamic from 'next/dynamic';

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

export default function AdminPage() {
  return <TinaCMS />;
}
