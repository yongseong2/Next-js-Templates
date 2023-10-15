'use client';
import { useRouter } from 'next/navigation';

export default function TestButton() {
  const router = useRouter();
  return (
    <div className="flex-none">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        type="button"
        onClick={() => router.push('/')}
      >
        테스트 버튼입니다.(클라이언트 컴포넌트)
      </button>
    </div>
  );
}
