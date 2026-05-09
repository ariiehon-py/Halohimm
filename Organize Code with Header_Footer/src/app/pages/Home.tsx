import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { PageTransition, FadeInUp } from "../components/PageTransition";

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden bg-[#F3EFE0]">
        
        {/* ========================================= */}
        {/* LAPISAN FOTO DRAGGABLE                    */}
        {/* ========================================= */}
        
        <motion.div
          drag
          className="absolute z-0 cursor-grab active:cursor-grabbing w-[500px] md:w-[700px] p-4 border-2 border-black shadow-2xl bg-[#F3EFE0]"
          style={{ top: '-10%', left: '-5%', rotate: -8 }}
        >
          <img src="/bg.jpeg" alt="Foto Hima 1" className="w-full h-auto" />
        </motion.div>

        <motion.div
          drag
          className="absolute z-0 cursor-grab active:cursor-grabbing w-[450px] md:w-[650px] p-4 border-2 border-black shadow-2xl bg-[#F3EFE0]"
          style={{ top: '20%', right: '-10%', rotate: 10 }}
        >
          <img src="/bg1.jpeg" alt="Foto Hima 2" className="w-full h-auto" />
        </motion.div>

        <motion.div
          drag
          className="absolute z-0 cursor-grab active:cursor-grabbing w-[550px] md:w-[750px] p-4 border-2 border-black shadow-2xl bg-[#F3EFE0]"
          style={{ bottom: '-15%', left: '15%', rotate: -5 }}
        >
          <img src="/bg2.jpeg" alt="Foto Hima 3" className="w-full h-auto" />
        </motion.div>


        {/* ========================================= */}
        {/* LAPISAN KONTEN TEKS                       */}
        {/* ========================================= */}
        
        <div className="relative z-10 flex flex-col items-center pointer-events-none text-center">
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
              {/* TEKS 1 (LAPISAN BELAKANG): Stroke Warna Background + Shadow */}
              <h1
                className="font-sturoc text-8xl md:text-9xl lg:text-[180px] tracking-wider"
                style={{
                  color: '#F3EFE0', // Warna sama dengan background
                  WebkitTextStroke: '12px #F3EFE0', // Stroke tebal warna krem
                  textShadow: '4px 4px 0px rgba(13, 65, 37, 0.4)', 
                }}
              >
                HALO, HIM!
              </h1>

              {/* TEKS 2 (LAPISAN DEPAN): Gradient Fill (Hijau Tua ke Hijau Segar) */}
              <h1
                className="font-sturoc text-8xl md:text-9xl lg:text-[180px] tracking-wider absolute top-0 left-0 bg-gradient-to-b from-[#1A7A44] to-[#2EBD6E] bg-clip-text text-transparent"
              >
                HALO, HIM!
              </h1>
            </motion.div>
          </motion.button>

          <FadeInUp delay={0.2}>
            <p className="font-agrandir text-brand-blue/80 mt-6 max-w-xl">
              Wadah komunikasi, pengaduan, dan penyaluran aspirasi mahasiswa
              D4 Keselamatan dan Kesehatan Kerja, Universitas Airlangga.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <motion.p
              className="font-agrandir text-brand-blue/60 mt-4 text-sm font-bold"
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