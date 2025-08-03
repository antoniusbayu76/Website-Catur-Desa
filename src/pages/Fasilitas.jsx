import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import wilayahImg from "../assets/danau.png"; // ganti sesuai gambar peta atau danau jika ada
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverSocial";
import Footer from "../components/Footer";

export default function Fasilitas() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        {/* Header Section */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#3d4c2a] via-[#4d5d2f] to-[#5f6f35] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Sosial
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Fasilitas Umum dan Fasilitas Sosial
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By KKN Mekar Banjar</span>
            </div>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                10 min read
              </span>
              <span>Updated 09:45 AM WITA, Sat July 26, 2025</span>
            </div>
          </div>
        </div>


        {/* Konten Artikel */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p >
            Fasilitas umum merujuk kepada sarana atau prasarana atau perlengkapan atau alat-alat yang disediakan oleh pemerintah, baik pusat maupun desa, atau oleh kelompok masyarakat yang dapat digunakan untuk kepentingan bersama oleh masyarakat dalam melaksanakan kegiatan sehari-hari.
          </p>
         

          <h2 className="text-xl md:text-2xl font-bold">I. Kantor dan Ruang Publik</h2>
            <table class="min-w-full table-auto border border-gray-300">
            <thead class="bg-gray-100">
                <tr>
                <th class="border border-gray-300 px-4 py-2 text-center">GOBLEG</th>
                <th class="border border-gray-300 px-4 py-2 text-center">MUNDUK</th>
                <th class="border border-gray-300 px-4 py-2 text-center">GESING</th>
                <th class="border border-gray-300 px-4 py-2 text-center">UMEJERO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border border-gray-300 px-4 py-2">Kantor Desa Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">Kantor Perbekel Munduk</td>
                <td class="border border-gray-300 px-4 py-2">Kantor Desa Gesing</td>
                <td class="border border-gray-300 px-4 py-2">Kantor Desa Umejero</td>
                </tr>
                <tr>
                <td class="border border-gray-300 px-4 py-2">Arena Desa Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">Gedung Serbaguna Desa Munduk</td>
                <td class="border border-gray-300 px-4 py-2">Arena Desa Gesing</td>
                <td class="border border-gray-300 px-4 py-2">Arena Desa Umejero</td>
                </tr>
                <tr>
                <td class="border border-gray-300 px-4 py-2">Arena Asah Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">Kantor Kelian Banjar Dinas Munduk</td>
                <td class="border border-gray-300 px-4 py-2">Bale Desa Gesing</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                </tr>
                <tr>
                <td class="border border-gray-300 px-4 py-2">Kantor Kelian Banjar Tengah</td>
                <td class="border border-gray-300 px-4 py-2">Pasar Munduk</td>
                <td class="border border-gray-300 px-4 py-2">LPD Desa Pakraman Gesing</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                </tr>
            </tbody>
            </table>

          
          <h2 className="text-xl md:text-2xl font-bold">II. Fasilitas Pendidikan ( Sekolah )</h2>
            <table class="min-w-full table-auto border border-gray-300">
            <thead class="bg-gray-100">
                <tr>
                <th class="border border-gray-300 px-4 py-2 text-center">GOBLEG</th>
                <th class="border border-gray-300 px-4 py-2 text-center">MUNDUK</th>
                <th class="border border-gray-300 px-4 py-2 text-center">GESING</th>
                <th class="border border-gray-300 px-4 py-2 text-center">UMEJERO</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                <td class="border border-gray-300 px-4 py-2">SDN 1 Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">TK Kumara Stana</td>
                <td class="border border-gray-300 px-4 py-2">TK Widya Kumara</td>
                <td class="border border-gray-300 px-4 py-2">TK Bina Kumara</td>
                </tr>
                
                <tr>
                <td class="border border-gray-300 px-4 py-2">SDN 2 Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">SDN 1 Munduk</td>
                <td class="border border-gray-300 px-4 py-2">SDN 1 Gesing</td>
                <td class="border border-gray-300 px-4 py-2">SDN 1 Umejero</td>
                </tr>
                
                <tr>
                <td class="border border-gray-300 px-4 py-2">SDN 3 Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">SDN 2 Munduk</td>
                <td class="border border-gray-300 px-4 py-2">SDN 2 Gesing</td>
                <td class="border border-gray-300 px-4 py-2">SDN 2 Umejero</td>
                </tr>
                
                <tr>
                <td class="border border-gray-300 px-4 py-2">SDN 4 Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">SDN 3 Munduk</td>
                <td class="border border-gray-300 px-4 py-2">SDN 3 Gesing</td>
                <td class="border border-gray-300 px-4 py-2">SDN 3 Umejero</td>
                </tr>
                
                <tr>
                <td class="border border-gray-300 px-4 py-2">SDN 5 dan SMPN 1 Atap</td>
                <td class="border border-gray-300 px-4 py-2">SDN 4 Munduk</td>
                <td class="border border-gray-300 px-4 py-2">SDN 5 Gesing</td>
                <td class="border border-gray-300 px-4 py-2">SMP Dharma Sastra Umejero</td>
                </tr>
                
                <tr>
                <td class="border border-gray-300 px-4 py-2">SDN 6 Gobleg Bawah</td>
                <td class="border border-gray-300 px-4 py-2">SDN 5 Munduk</td>
                <td class="border border-gray-300 px-4 py-2">SMP Satu Atap 3 Banjar</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                </tr>
                
                <tr>
                <td class="border border-gray-300 px-4 py-2">SDN 6 Gobleg Atas</td>
                <td class="border border-gray-300 px-4 py-2">SDN 6 Munduk</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                </tr>
            </tbody>
            </table>


          
          <h2 className="text-xl md:text-2xl font-bold">III. Fasilitas Kesehatan</h2>
            <table class="min-w-full table-auto border border-gray-300 mt-4">
            <thead class="bg-gray-100">
                <tr>
                <th class="border border-gray-300 px-4 py-2 text-center">GOBLEG</th>
                <th class="border border-gray-300 px-4 py-2 text-center">MUNDUK</th>
                <th class="border border-gray-300 px-4 py-2 text-center">GESING</th>
                <th class="border border-gray-300 px-4 py-2 text-center">UMEJERO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border border-gray-300 px-4 py-2">Puskesmas Asah Gobleg</td>
                <td class="border border-gray-300 px-4 py-2">Puskesmas Pembantu Desa Munduk</td>
                <td class="border border-gray-300 px-4 py-2">Poskeskes Gesing</td>
                <td class="border border-gray-300 px-4 py-2">Puskesmas Pembantu Desa Umejero</td>
                </tr>
            </tbody>
            </table>


          <h2 className="text-xl md:text-2xl font-bold">IV. Balai Adat dan Dinas</h2>
          <p >
          <ol className="mx-5 space-y-4 list-decimal font-semibold">
            <li><span className="font-semibold">Balai Adat dan Dinas di Desa Gobleg</span>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Balai Banjar Dinas Unusan</span></li>
                <li><span className="font-normal">Balai Banjar Jembong</span></li>
                <li><span className="font-normal">Balai Tempek Silemadeg (Babakan)</span></li>
                <li><span className="font-normal">Balai Tempek Bina Karya (Asah Kelod)</span></li>
                <li><span className="font-normal">Balai Tempek Merta Wisuda (Bebengan Cenik)</span></li>
                <li><span className="font-normal">Balai Tempek Tunas Muda (Lapang Kelod)</span></li>
                <li><span className="font-normal">Balai Tempek Mekarsari (Lapang Kaja)</span></li>
                <li><span className="font-normal">Balai Tempek Dharma Karya (Sukajati Kauh)</span></li>
                <li><span className="font-normal">Balai Tempek Dharma Susila (Unusan)</span></li>
                <li><span className="font-normal">Balai Tempek Swadarma (Tugu)</span></li>
                <li><span className="font-normal">Balai Tempek Widya Merta (Pasan Ulus)</span></li>
                <li><span className="font-normal">Balai Tempek Merta Yadnya (Canggah Urip)</span></li>
                <li><span className="font-normal">Balai Tempek Kemoning</span></li>
                <li><span className="font-normal">Balai Subak Jembong</span></li>
                <li><span className="font-normal">Balai Tempek Dharma Sawitra (Melanting)</span></li>
                <li><span className="font-normal">Balai Tempek Darma Kanti (Munduk Moding)</span></li>
                </ol>
            </li>


              
            <li><span className="font-semibold">Balai Adat dan Dinas di Desa Munduk</span>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Balai Banjar Petaluh</span></li>
                <li><span className="font-normal">Balai Banjar Dinas Bulakan</span></li>
                <li><span className="font-normal">Balai Banjar Dinas Tamblingan / Balai Subak Abian Wija Sari</span></li>
                <li><span className="font-normal">Balai Tempek Suka Duka B.D. Tamblingan, Munduk</span></li>
                <li><span className="font-normal">Balai Tempek Satya Karya</span></li>
                <li><span className="font-normal">Balai Subak Abian Palasari B.D. Beji</span></li>
                </ol>
            </li>


              
            <li><span className="font-semibold">Balai Adat dan Dinas di Desa Gesing</span>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Wantilan Desa Gesing</span></li>
                <li><span className="font-normal">Balai Banjar Gesing</span></li>
                <li><span className="font-normal">Balai Tempek Lingkungan 6 / Subak Kering</span></li>
                </ol>
            </li>


              
            <li><span className="font-semibold">Balai Adat dan Dinas di Desa Umejero</span>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Balai Banjar Cemara</span></li>
                <li><span className="font-normal">Balai Banjar Lebah</span></li>
                <li><span className="font-normal">Balai Banjar Waru</span></li>
                <li><span className="font-normal">Balai Kul-Kul</span></li>
                <li><span className="font-normal">Balai Kelompok 3 Desa Umejero</span></li>
                <li><span className="font-normal">Balai Suka Duka Dirgayusa Banjar Cemara</span></li>
                <li><span className="font-normal">Balai Suka Duka Banjar Dauh Pangkung</span></li>
                </ol>

            </li>


          </ol>
          </p>          
          
        </div>
      </div>

      <div className="h-20" />
      <Discover/>
      <Footer/>
    </div>
  );
}
