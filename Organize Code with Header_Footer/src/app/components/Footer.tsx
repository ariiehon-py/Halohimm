// 1. Jangan lupa import Link di bagian paling atas file ini ya!
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="w-full bg-[#3a3a3a] text-white mt-auto border-t-4 border-brand-green">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 text-center font-agrandir">
        <p className="text-sm md:text-base text-white mb-1">
          © {new Date().getFullYear()} Departemen Media dan Informasi
        </p>
        <p className="text-xs md:text-sm text-white/80">
          Himpunan Mahasiswa D4 Keselamatan dan Kesehatan Kerja
        </p>
        <p className="text-xs md:text-sm text-white/80 mb-3">
          Kabinet Adyanala - Universitas Airlangga
        </p>
        
        {/* 2. Tag <a> diubah menjadi <Link> dan href diubah menjadi to */}
        <Link
          to="/admin/login"
          className="inline-block text-xs text-white/50 hover:text-white/80 transition-colors"
        >
          Admin Login
        </Link>
      </div>
    </footer>
  );
}