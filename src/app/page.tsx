import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">2cAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#vision" className="hover:text-gray-900 transition-colors">
            願景
          </a>
          <a href="#products" className="hover:text-gray-900 transition-colors">
            產品
          </a>
          <a href="#automation" className="hover:text-gray-900 transition-colors">
            自動化
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors">
            關於我們
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-[#1a1a2e] text-white rounded-full text-sm hover:bg-[#2a2a4e] transition-colors"
          >
            聯繫我們
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.03)_0%,_transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="animate-fade-in-up text-sm tracking-[0.3em] uppercase text-[#c9a84c] mb-6">
          Artificial Intelligence for Better Living
        </p>
        <h1 className="animate-fade-in-up-delay text-5xl md:text-7xl font-bold leading-tight mb-8">
          <span className="gradient-text">AI 賦能</span>
          <br />
          <span className="text-[#1a1a2e]">美好生活</span>
        </h1>
        <p className="animate-fade-in-up-delay-2 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          以人工智能技術驅動創新，構建共贏生態
          <br />
          <span className="text-gray-400 text-base">Via AI, Win-Win</span>
        </p>
        <div className="animate-fade-in-up-delay-2">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-full hover:bg-[#2a2a4e] transition-all hover:scale-105"
          >
            探索我們的產品
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="section-divider mb-20" />
        <p className="text-sm tracking-[0.2em] uppercase text-[#c9a84c] mb-4">Our Vision</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-8">
          以 AI 賦能美好生活
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
          我們相信人工智能不僅是技術革命，更是推動人類社會進步的核心力量。
          2cAI 致力於開發具有實際價值的 AI 產品，讓科技真正服務於每一個人的生活。
        </p>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#c9a84c] mb-4">Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            我們的產品
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Girlfriend - Featured */}
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#c9a84c]/30 transition-all hover:shadow-lg animate-pulse-glow">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/10 to-[#c9a84c]/5 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="inline-block px-3 py-1 bg-[#c9a84c]/10 text-[#c9a84c] text-xs rounded-full mb-4">
              已上線
            </div>
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">AI Girlfriend</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              革命性 AI 伴侶社交應用。以先進自然語言處理技術，打造有溫度、有深度的智能陪伴體驗。
              重新定義人機互動的邊界。
            </p>
            <a href="#contact" className="text-sm text-[#c9a84c] font-medium hover:underline">
              了解更多 →
            </a>
          </div>

          {/* AI Product 2 - Hidden/Teased */}
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full mb-4">
              研發中
            </div>
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">AI 智能職場方案</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              以 AI 技術賦能職場效率，為企業與個人提供智能化解決方案。詳情即將公佈。
            </p>
            <span className="text-sm text-gray-400">敬請期待</span>
          </div>

          {/* AI Product 3 - Hidden/Teased */}
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full mb-4">
              研發中
            </div>
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">AI 教育科技</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              融合 AI 與教育理念，打造下一代智能學習體驗。以科技助力人才培養。詳情即將公佈。
            </p>
            <span className="text-sm text-gray-400">敬請期待</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Automation() {
  return (
    <section id="automation" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#c9a84c] mb-4">
              Hong Kong Innovation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
              24小時自動化商業
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              以香港本地研發的科技發明，打造全天候自動化商業解決方案。
              結合 AI 與硬件創新，為香港商業生態注入新動力。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                </div>
                <span className="text-gray-600">香港本地研發 · HK Crafted Tech</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                </div>
                <span className="text-gray-600">全天候無人值守運營</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                </div>
                <span className="text-gray-600">AI 驅動智能決策系統</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#1a1a2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400 tracking-wide">INNOVATION LAB</p>
                <p className="text-xs text-gray-300 mt-1">Hong Kong</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[#c9a84c] mb-4">Mission</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-8">
          我們的使命
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          致力於開發人工智能產品，配合國家十四五規劃——加強高水平科技自立自強，
          發展新質生產力，聚焦人工智能、量子信息、生物醫藥等重點領域，
          推動國際科技創新中心建設。
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">願景</div>
            <p className="text-gray-500 text-sm">AI 賦能美好生活</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">價值</div>
            <p className="text-gray-500 text-sm">Via AI, Win-Win</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">使命</div>
            <p className="text-gray-500 text-sm">科技自立自強 · 新質生產力</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[#c9a84c] mb-4">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
          聯繫我們
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          無論您是尋求 AI 解決方案的企業，還是對我們產品感興趣的用戶，
          我們期待與您交流。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@2cai.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-full hover:bg-[#2a2a4e] transition-all hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@2cai.com
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-gray-700 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            商業合作洽談
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold gradient-text">2cAI</span>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-400">AI 賦能美好生活</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span>Hong Kong</span>
          <span className="text-gray-200">·</span>
          <span>© 2024 2cAI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Vision />
      <Products />
      <Automation />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
