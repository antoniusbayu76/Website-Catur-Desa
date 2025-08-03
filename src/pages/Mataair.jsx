import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverEnvi";
import Footer from "../components/Footer";

export default function Mataair() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        {/* Header Section */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#625b39] via-[#988c44] to-[#d1bb48] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Lingkungan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Mata Air dan Pemeliharaan Air
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
          <h2 className="text-xl md:text-2xl font-bold">Keberadaan dan Sebaran Mata Air</h2>
          <p >
            Selain Danau Tamblingan, kawasan Adat Dalem Tamblingan (ADT) memiliki banyak sumber air berupa <i>klebutan</i> (mata air) dan air terjun. Tercatat ada sekitar 50 mata air yang tersebar di seluruh kawasan ADT, dengan rata-rata 12 mata air di tiap desa. Masing-masing mata air memiliki fungsi yang berbeda-beda sesuai dengan kebutuhan masyarakat dan adat setempat.

          </p>
         

          <h2 className="text-xl md:text-2xl font-bold">Mata Air sebagai Sumber Air Suci (Tirta)</h2>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Mata Air Bulakan dan Suwukan (Siwa Muka)  </span></li>
              <p className="font-normal">
              Digunakan sebagai air suci untuk seluruh upacara ADT. Air ini hanya boleh dimohonkan oleh Ngurah Mancawarna selaku pemucuk adat.
              </p>
              
              
            <li><span className="font-semibold">Mata Air Mendaum </span></li>
              <p className="font-normal">
              Dimanfaatkan untuk menyucikan arca Lokita (pusaka), hasil bumi untuk sarana upacara, bangunan, dan juga untuk memohon kelancaran proses melahirkan.
              </p>
              

            <li><span className="font-semibold">Mata Air Cangkup (Tukad Sridaka)</span></li>
            <p className="font-normal">
              Terdiri dari tiga sumber: Toya Ling, Sudamanik, dan Toya Masem. Berfungsi untuk <i>nyiraman</i> arca Lokita, <i>nunas pengelukatan</i>, dan <i>mesiram</i> dalam ritual pernikahan.
              </p>
          </ol>

          
          <h2 className="text-xl md:text-2xl font-bold">Mata Air sebagai Tempat Pemandian dan Pengobatan</h2>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Mata Air Nangka  </span></li>
              <p className="font-normal">
              Telah dibuatkan penampungan sebagai tempat mandi. Diyakini dapat menyembuhkan penyakit seperti meriang, cacar, dan gatal-gatal jika mandi antara pukul 04.00–08.00 pagi.
              </p>
              
              
            <li><span className="font-semibold">Mata Air Belulang </span></li>
              <p className="font-normal">
              Tempat pemandian warga dan alternatif untuk upacara <i>mebiakawonan</i> dalam perkawinan jika Mata Air Mendaum terlalu jauh.
              </p>
              

            <li><span className="font-semibold">Mata Air Batu Tompeh</span></li>
            <p className="font-normal">
              Meskipun debitnya kecil, mata air ini tidak pernah kering dan digunakan sebagai tempat pemandian oleh masyarakat sekitar.
              </p>
              

            <li><span className="font-semibold">Mata Air Munduk Moding</span></li>
            <p className="font-normal">
              Debitnya kecil namun tetap digunakan oleh masyarakat untuk kebutuhan air bersih.
              </p>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold">Mata Air sebagai Sumber Pengairan Subak dan Kebutuhan Air Bersih</h2>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Mata Air Bebengan  </span></li>
              <p className="font-normal">
              Dimanfaatkan untuk kebutuhan air keluarga oleh masyarakat.
              </p>
              
              
            <li><span className="font-semibold">Mata Air Margalangu </span></li>
              <p className="font-normal">
              Memiliki tiga sumber air yang dimanfaatkan oleh subak di Desa Gobleg, Munduk, dan Kayu Putih untuk irigasi sawah, serta sebagai sumber air bersih pedesaan.
              </p>
              

            <li><span className="font-semibold">Mata Air Belong</span></li>
            <p className="font-normal">
              Alirannya menyatu dengan Mata Air Mendaum membentuk Sungai Mendaum, yang mengairi subak di Gobleg, Munduk, Kayu Putih, bahkan hingga subak-subak di Kecamatan Seririt dan Banjar.
              </p>
              
          </ol>


          <h2 className="text-xl md:text-2xl font-bold">Air Terjun sebagai Objek Wisata</h2>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Air Terjun Labuan Kebo, Gobleg  </span></li>
              <p className="font-normal">
              Dikelola oleh Koperasi Jasa Pariwisata Amerta Tamba Eling di Banjar Dinas Jembong, Desa Gobleg.
              </p>
              
              
            <li><span className="font-semibold">Air Terjun Melanting, Gobleg </span></li>
              <p className="font-normal">
              Juga berada di bawah pengelolaan Koperasi Jasa Pariwisata Amerta Tamba Eling.
              </p>
              

            <li><span className="font-semibold">Air Terjun Melanting, Munduk</span></li>
            <p className="font-normal">
              Dikenal juga sebagai Red Coral, dikelola oleh Desa Munduk.
              </p>

            <li><span className="font-semibold">Air Terjun Lebah, Umejero</span></li>
            <p className="font-normal">
              Belum dikelola secara optimal
              </p>
              
          </ol>


          <h2 className="text-xl md:text-2xl font-bold">Sebaran Mata Air di Tiap Desa</h2>
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Desa Gobleg</span></li>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Medulur</span></li>
                <li><span className="font-normal">Pasanulus</span></li>
                <li><span className="font-normal">Pesiraman Batumadeg</span></li>
                <li><span className="font-normal">Lapang</span></li>
                <li><span className="font-normal">Bantas</span></li>
                </ol>
  
            <li><span className="font-semibold">Desa Munduk</span></li>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Batu Mejajah</span></li>
                <li><span className="font-normal">Apit Yeh 1–2</span></li>
                <li><span className="font-normal">Limpah</span></li>
                <li><span className="font-normal">Yeh Panes</span></li>
                <li><span className="font-normal">Munduk Nungkak</span></li>
                <li><span className="font-normal">Yeh Gedong</span></li>
                <li><span className="font-normal">Lebah Tapong 1–2–3</span></li>
                <li><span className="font-normal">Tamblang 1–2</span></li>
                <li><span className="font-normal">Tutub</span></li>
                </ol>


            <li><span className="font-semibold">Desa Gesing</span></li>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Beji Dalem</span></li>
                <li><span className="font-normal">Yeh Panes</span></li>
                <li><span className="font-normal">Kelebutan Tunjung</span></li>
                <li><span className="font-normal">Kelebutan We Sipa</span></li>
                <li><span className="font-normal">Yeh Pengaringan</span></li>
                <li><span className="font-normal">Bunut</span></li>
                <li><span className="font-normal">Kelebutan Air Terjun</span></li>
                <li><span className="font-normal">Kelebutan Puseh</span></li>
                <li><span className="font-normal">Beji Impres</span></li>
                <li><span className="font-normal">Kelebutan Tiing Tali</span></li>
                <li><span className="font-normal">Yeh Pangi</span></li>
                <li><span className="font-normal">Yeh Benyah</span></li>
                <li><span className="font-normal">Yeh Cangkup</span></li>
                </ol>

            <li><span className="font-semibold">Desa Umejero</span></li>
                <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Telaga Waja</span></li>
                <li><span className="font-normal">Yeh Pegat</span></li>
                <li><span className="font-normal">Amiro</span></li>
                <li><span className="font-normal">Pesucian Cemara</span></li>
                <li><span className="font-normal">Toya Ning</span></li>
                <li><span className="font-normal">Pangkung Sanggah</span></li>
                <li><span className="font-normal">Pancoran Batu</span></li>
                <li><span className="font-normal">Air Subak Lebah I dan II</span></li>
                <li><span className="font-normal">PAM Umejero</span></li>
                </ol>
          <p className="font-normal">
            Dua mata air dari Umejero, yaitu Amiro dan Toya Ning, saat ini dikelola oleh perusahaan air minum dalam kemasan swasta sebagai sumber air mineral.
          </p>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold">Kondisi Terkini dan Upaya Pelestarian Mata Air</h2>
            <p className="font-normal">
            Beberapa mata air kini telah mengecil atau bahkan mengering, terutama yang berada di kali-kali kecil di tengah-tengah pemukiman. Sejak sekitar tahun 1970, mata air mulai mengalami penurunan debit air secara bertahap, hingga saat ini ada yang kering total, bahkan di musim hujan. Hal ini disebabkan oleh:
            <ol className="mx-10 list-disc space-y-2">
            <li>
                <span className="font-normal">
                Perubahan musim yang tidak menentu
                </span>
            </li>
            <li>
                <span className="font-normal">
                Kerusakan hutan Alas Mertajati, baik karena penebangan maupun pohon tua yang tumbang tanpa adanya penanaman kembali
                </span>
            </li>
            </ol>
          </p>

          <h2 className="text-xl md:text-2xl font-bold">Upaya Pelestarian yang Bisa Dilakukan</h2>
            <p className="font-normal">
                <ol className="mx-10 list-disc space-y-2">
                <li>
                    <span className="font-normal">
                    Menjaga kebersihan di sekitar mata air
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Memelihara pohon-pohon sekitar
                    </span>
                </li>
                <li>
                    <span className="font-normal">
                    Melakukan penanaman kembali pohon di areal sekitar mata air
                    </span>
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
