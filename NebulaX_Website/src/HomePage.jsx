import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-indigo-900 to-purple-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative text-center py-32 px-4 bg-[url('/images/galaxy-bg.jpg')] bg-cover bg-center shadow-inner">
        <div className="bg-black/70 p-10 rounded-xl max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 text-neon-blue drop-shadow-lg">NebulaX</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Geleceğin yapay zeka destekli DeFi ekosistemine katılın. Güvenli, hızlı ve erişilebilir finans burada başlıyor.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Whitepaper</button>
            <button className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600">Cüzdanı İndir</button>
            <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Token Satın Al</button>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="bg-gray-900 py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Token Dağılımı</h2>
        <div className="flex justify-center">
          <img src="/images/token-distribution.png" alt="Token Distribution" className="w-full max-w-xl rounded-lg shadow-lg" />
        </div>
        <ul className="mt-8 text-center text-gray-300 space-y-1">
          <li>%40 Topluluk • %20 Ekip • %15 Ödül • %15 Yatırımcı • %10 Rezerv</li>
        </ul>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 bg-[url('/images/stars-roadmap.jpg')] bg-cover bg-fixed bg-center">
        <div className="bg-black/60 p-10 rounded-3xl max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Yol Haritası</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-indigo-800/80 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Q1</h3>
              <p>Token lansmanı, web sitesi, whitepaper</p>
            </div>
            <div className="bg-indigo-700/80 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Q2</h3>
              <p>Borsa listelemeleri, staking başlatma</p>
            </div>
            <div className="bg-indigo-600/80 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Q3</h3>
              <p>AI entegrasyonu ve beta test</p>
            </div>
            <div className="bg-indigo-500/80 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Q4</h3>
              <p>DeFi platformu lansmanı ve DApp yayını</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center text-gray-500 py-10 text-sm border-t border-indigo-800">
        &copy; 2025 NebulaX • Tüm Hakları Saklıdır • info@nebulax.io
      </footer>
    </div>
  );
}
