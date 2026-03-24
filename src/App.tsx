import './index.css';

function App() {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" data-testid="background-elements">
        <div className="absolute rounded-full blur-[80px] opacity-50 animate-[float_20s_infinite_ease-in-out_alternate] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-[#00ffaa] to-[#0088ff] -top-[50px] -left-[50px] sm:-top-[100px] sm:-left-[100px]"></div>
        <div className="absolute rounded-full blur-[80px] opacity-50 animate-[float_20s_infinite_ease-in-out_alternate] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-[#ff007b] to-[#8400ff] -bottom-[25px] -right-[25px] sm:-bottom-[50px] sm:-right-[50px]" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute rounded-full blur-[80px] opacity-50 animate-[float_20s_infinite_ease-in-out_alternate] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-gradient-to-br from-[#ffea00] to-[#ff8c00] top-[30%] sm:top-1/2 left-[30%] sm:left-[40%]" style={{ animationDelay: '-10s' }}></div>
      </div>

      <main className="relative z-10 w-[90%] max-w-[1000px] p-6 sm:p-10 rounded-[24px] bg-[#0f111a99] backdrop-blur-[20px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] my-auto transition-all duration-300">
        <header className="text-center mb-8 sm:mb-[50px]">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-extrabold mb-[10px] bg-gradient-to-r from-[#00ffaa] to-[#0088ff] bg-clip-text text-transparent leading-tight">
            Sergio's Projects
          </h1>
          <p className="text-[1rem] sm:text-[1.2rem] font-light opacity-80 mt-2">Welcome to the root directory of my works</p>
        </header>

        <h2 className="text-[1.5rem] sm:text-[1.8rem] font-semibold my-6 sm:my-10 opacity-90 flex items-center gap-2">✨ Featured</h2>
        <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 sm:gap-[30px]" data-testid="featured-projects">
          <a href="/esteganografia" className="group relative block no-underline text-inherit bg-[#1a1c2966] border border-white/10 rounded-[16px] p-6 sm:p-[30px] transition-all duration-[400ms] overflow-hidden hover:-translate-y-2 hover:border-[#00ffaa80] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(0,255,170,0.2)]">
            <div className="absolute top-5 right-5 bg-gradient-to-br from-[#00ffaa] to-[#0088ff] text-[#0f111a] tracking-widest text-[0.7rem] font-extrabold px-3 py-1 rounded-lg uppercase z-20">Featured</div>
            <div className="relative z-10">
              <h2 className="text-[1.8rem] font-semibold mb-4 transition-colors duration-300 group-hover:text-[#00ffaa]">Esteganografia</h2>
              <p className="text-base font-light leading-relaxed opacity-70 mb-5">A web-based tool for hiding secret messages within images using steganography.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">React</span>
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">TypeScript</span>
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">Canvas API</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#00ffaa66] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-[400ms] blur-[40px] z-0 group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100"></div>
          </a>
        </section>

        <h2 className="text-[1.5rem] sm:text-[1.8rem] font-semibold my-6 sm:my-10 opacity-90 flex items-center gap-2">📁 All Projects</h2>
        <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 sm:gap-[30px]" data-testid="all-projects">
          <a href="/neojackpot" className="group relative block no-underline text-inherit bg-[#1a1c2966] border border-white/10 rounded-[16px] p-6 sm:p-[30px] transition-all duration-[400ms] overflow-hidden hover:-translate-y-2 hover:border-[#00ffaa80] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(0,255,170,0.2)]">
            <div className="relative z-10">
              <h2 className="text-[1.8rem] font-semibold mb-4 transition-colors duration-300 group-hover:text-[#00ffaa]">NeoJackpot</h2>
              <p className="text-base font-light leading-relaxed opacity-70 mb-5">A slot machine web application.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">Neo</span>
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">TypeScript</span>
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">React</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#00ffaa66] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-[400ms] blur-[40px] z-0 group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100"></div>
          </a>

          <a href="/vlogs" className="group relative block no-underline text-inherit bg-[#1a1c2966] border border-white/10 rounded-[16px] p-6 sm:p-[30px] transition-all duration-[400ms] overflow-hidden hover:-translate-y-2 hover:border-[#00ffaa80] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(0,255,170,0.2)]">
            <div className="relative z-10">
              <h2 className="text-[1.8rem] font-semibold mb-4 transition-colors duration-300 group-hover:text-[#00ffaa]">Vlogs</h2>
              <p className="text-base font-light leading-relaxed opacity-70 mb-5">A modern platform for sharing video logs and stories.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">React</span>
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">TypeScript</span>
                <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full opacity-80 transition-all duration-300 group-hover:border-[#00ffaa4d] group-hover:bg-[#00ffaa0d] group-hover:opacity-100">SCSS</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#00ffaa66] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-[400ms] blur-[40px] z-0 group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100"></div>
          </a>
        </section>
      </main>
    </>
  )
}

export default App
