import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition, FadeInUp } from "../components/PageTransition";

export default function Home() {
  const navigate = useNavigate();
  // State untuk kontrol munculnya tag Instagram
  const [showTags, setShowTags] = useState(false);

  const toggleTags = () => setShowTags(!showTags);

  return (
    <PageTransition>
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden bg-[#F3EFE0]">
        
        {/* ========================================= */}
        {/* LAPISAN FOTO DRAGGABLE (Posisi Mobile Fix)*/}
        {/* ========================================= */}
        
        {/* Foto 1 - Kiri Atas */}
        <motion.div
          drag
          onClick={toggleTags}
          initial={{ rotate: -8 }}
          animate={{ rotate: [-8, -5, -10, -8], y: [0, -5, 5, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-0 cursor-pointer p-2 md:p-4 border-2 border-black shadow-2xl bg-[#F3EFE0] 
                     w-[260px] top-[5%] -left-[10%] 
                     md:w-[700px] md:-top-[10%] md:-left-[5%]"
        >
          <img src="/bg.jpeg" alt="Foto Hima 1" className="w-full h-auto" />
          <InstagramTag show={showTags} />
        </motion.div>

        {/* Foto 2 - Kanan Tengah */}
        <motion.div
          drag
          onClick={toggleTags}
          initial={{ rotate: 10 }}
          animate={{ rotate: [10, 13, 7, 10], y: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute z-0 cursor-pointer p-2 md:p-4 border-2 border-black shadow-2xl bg-[#F3EFE0] 
                     w-[280px] top-[40%] -right-[15%] 
                     md:w-[650px] md:top-[20%] md:-right-[10%]"
        >
          <img src="/bg1.jpeg" alt="Foto Hima 2" className="w-full h-auto" />
          <InstagramTag show={showTags} />
        </motion.div>

        {/* Foto 3 - Bawah Kiri/Tengah */}
        <motion.div
          drag
          onClick={toggleTags}
          initial={{ rotate: -5 }}
          animate={{ rotate: [-5, -2, -8, -5], x: [0, 5, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute z-0 cursor-pointer p-2 md:p-4 border-2 border-black shadow-2xl bg-[#F3EFE0] 
                     w-[320px] bottom-[2%] left-[5%] 
                     md:w-[750px] md:-bottom-[15%] md:left-[15%]"
        >
          <img src="/bg2.jpeg" alt="Foto Hima 3" className="w-full h-auto" />
          <InstagramTag show={showTags} />
        </motion.div>


        {/* ========================================= */}
        {/* LAPISAN KONTEN TEKS                       */}
        {/* ========================================= */}
        
        {/* mt-[-5vh] di mobile biar teksnya agak naik, ngasih space buat foto bawah */}
        <div className="relative z-10 flex flex-col items-center pointer-events-none text-center mt-[-5vh] md:mt-0">
          <motion.button
            onClick={() => navigate("/info")}
            className="group cursor-pointer pointer-events-auto relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="relative inline-block"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <h1
                // Ukuran teks menyesuaikan layar: HP (text-5xl), Tablet (7xl), Laptop (180px)
                className="font-sturoc text-5xl sm:text-7xl md:text-9xl lg:text-[180px] tracking-wider"
                style={{
                  color: '#F3EFE0', 
                  // Stroke pakai "em" biar ketebalannya menyesuaikan ukuran font secara otomatis
                  WebkitTextStroke: '0.08em #F3EFE0', 
                  textShadow: '4px 4px 0px rgba(13, 65, 37, 0.4)', 
                }}
              >
                HALO, HIM!
              </h1>

              <h1
                className="font-sturoc text-5xl sm:text-7xl md:text-9xl lg:text-[180px] tracking-wider absolute top-0 left-0 w-full bg-gradient-to-b from-[#1A7A44] to-[#2EBD6E] bg-clip-text text-transparent"
              >
                HALO, HIM!
              </h1>
            </motion.div>
          </motion.button>

          <FadeInUp delay={0.2}>
            {/* Highlight Satu Baris Penuh dengan box-decoration-clone agar rapi pas turun baris */}
            <div className="mt-8 max-w-4xl px-2 pointer-events-auto leading-loose md:leading-[3]">
              <span className="bg-[#1A7A44]/50 text-white font-agrandir text-sm md:text-lg px-3 py-1.5 shadow-sm box-decoration-clone">
                Wadah komunikasi, pengaduan, dan penyaluran aspirasi mahasiswa D4 Keselamatan dan Kesehatan Kerja, Universitas Airlangga.
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <motion.p
              onClick={() => navigate("/info")}
              className="font-agrandir text-[#1A7A44] mt-8 text-sm font-bold cursor-pointer pointer-events-auto"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Klik "HALO, HIM!" untuk masuk
            </motion.p>
          </FadeInUp>
        </div>
        
      </section>
    </PageTransition>
  );
}

// Komponen Kecil untuk Tag Instagram
function InstagramTag({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://instagram.com/himak3unair"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute bottom-10 left-10 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-xs font-agrandir border border-white/20 pointer-events-auto shadow-xl"
          onClick={(e) => e.stopPropagation()} // Supaya tidak men-trigger toggleTags lagi
        >
          {/* Ikon Instagram Sederhana */}
          <div className="w-4 h-4 border-2 border-white rounded-sm flex items-center justify-center relative">
            <div className="w-1.5 h-1.5 border border-white rounded-full"></div>
          </div>
          <span>@himak3unair</span>
          {/* Segitiga panah bawah ala IG Tag */}
          <div className="absolute -bottom-1.5 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black/80"></div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}