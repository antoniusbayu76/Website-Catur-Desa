import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverCulture";
import Footer from "../components/Footer";

export default function Kesenian() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        {/* Header Section */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Kebudayaan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Kesenian Sakral dan Seni Hiburan
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
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-2">
          <h2 className="text-xl md:text-2xl font-bold">Kesenian Sakral dalam Upacara Adat</h2>
          <p className="font-normal">
             Krama Adat Dalem Tamblingan juga memiliki kesenian sakral atau yang dipersembahkan pada saat karya, yaitu:
          <ol className="mx-5 list-decimal font-semibold">
            <li><span className="font-semibold">Tari Sakral  </span></li>
              <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Rejang Dewa</span></li>
                <li><span className="font-normal">Pependetan</span></li>
                <li><span className="font-normal">Baris Gede</span></li>
              </ol>
            <li><span className="font-semibold">Gamelan Sakral  </span></li>
              <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Kekelentingan (Gong Duwe)</span></li>
                <li><span className="font-normal">Gong Semar Pegulingan</span></li>
                <li><span className="font-normal">Kembang Kirang</span></li>
                <li><span className="font-normal">Gambang (hanya dimainkan dalam upacara pengabenan)</span></li>
              </ol>

            <li><span className="font-semibold">Seni Suara Sakral  </span></li>
              <ol className="mx-5 list-disc space-y-2">
                <li><span className="font-normal">Kekawin</span></li>
                <li><span className="font-normal">Kidung</span></li>
              </ol>
 
        
          </ol>
          </p>

          
          <h2 className="text-xl md:text-2xl font-bold">Kesenian Tradisional yang Pernah Dimiliki</h2>
          <p className="font-normal">
             Kesenian lainnya yang pernah dimiliki Krama Adat Dalem Tamblingan di Catur Desa adalah Gandrung, yang konon berasal dari Jawa. Namun, saat ini kesenian tersebut telah punah. Gamelan yang digunakan sebagai musik pengiringnya adalah sebetang atau bilah besi. Hingga saat ini, kempul dan bilah besi pemukulnya masih tersimpan dengan baik.
          </p>
          <h2 className="text-xl md:text-2xl font-bold">Perjalanan dan Perkembangan Kesenian Tripittaka</h2>
          <ol className="mx-5 space-y-2 list-decimal font-semibold">
            <li><span className="font-semibold">Asal Mula Joged Muani  </span></li>
              <p className="font-normal">
              Salah satu kelompok kesenian yang ada di Desa Munduk adalah Tripittaka, didirikan oleh I Made Terip. Putu Togog, ayah I Made Terip, adalah seorang pejuang. Keluarganya sering menyingkir ke hutan. Karena tidak ada hiburan, Putu Togog membuat rindik dan menciptakan Joged Muani. Kelompok Joged Muani berkembang pada tahun 1951 hingga 1957. Alat musik dibuat dari bambu petung berukuran besar dan tinggi yang dimainkan dengan berdiri, dinamakan bem. Bem berjumlah tiga buah, masing-masing dimainkan oleh satu orang. Alat musik lainnya adalah:
              </p>
              <ol className="mx-10 list-disc space-y-2">
                <li><span className="font-normal">Tiga buah grantang</span></li>
                <li><span className="font-normal">Dua buah kantilan</span></li>
                <li><span className="font-normal">Kopyak (dimainkan tujuh orang)</span></li>
              </ol>

              
              
            <li><span className="font-semibold">Peralihan ke Gong Kebyar dan Gender Wayang </span></li>
              <p className="font-normal">
              Kemudian pada tahun 1957, Joged Muani digantikan dengan Gong Kebyar. Putu Togog bahkan berjalan jauh untuk mengajar gong, hingga ke Tulikup (Gianyar) dan Subamia (Tabanan). Tahun 1960, diciptakan megenderan wayang, dan pada tahun 1963 dibangun Kelompok Gender Wayang.

              </p>
              

            <li><span className="font-semibold">Joged Bungbung dan Kembali ke Alat Musik Bambu</span></li>
            <p className="font-normal">
              Pada tahun 1972, I Made Terip mendirikan Joged Bungbung menggunakan reong. Namun sejak tahun 1984, kembali digunakan alat musik dari bambu tanpa menggunakan perunggu, hingga saat ini. Alat musik bambu inilah yang menjadi ciri khas dan orisinalitas Tripittaka. Alat musik pelengkap yang digunakan hanya gong dan cengceng. Sanggar Tripittaka dan Regenerasi Seni Sanggar Tripittaka didirikan pada tahun 1997, dan saat ini memiliki 35 orang anggota, mulai dari siswa SD hingga SMA. Kelompok ini merupakan pengembangan baru yang dikembangkan dari jegog (gumbyung). Sejak tahun 1975 hingga sekarang, I Made Terip berperan sebagai Kelian Gong Adat Dalem Tamblingan di Catur Desa.

              </p>
              
          </ol>

          <h2 className="text-xl md:text-2xl font-bold">Pemilihan dan Perawatan Bambu sebagai Alat Musik</h2>
            <p className="font-normal">
            Tidak ada jenis bambu khusus yang digunakan sebagai alat musik, namun lebih baik jika menggunakan:
            <ol className="mx-10 list-disc space-y-2">
              <li><span className="font-normal">Bambu tall</span></li>
              <li><span className="font-normal">Bambu tamblang</span></li>
              <li><span className="font-normal">Bambu tabah</span></li>
              <li><span className="font-normal">Bambu hitam</span></li>
            </ol>
            Jenis-jenis bambu ini menghasilkan suara yang lebih bagus. Bambu dipilih dari tempat yang agak kering untuk menghasilkan suara tinggi. Untuk suara bas atau rendah, dipilih bambu yang tumbuh di tempat lembab. Bambu sebaiknya sudah tua dan kering di pohon agar tidak berbubuk.

          </p>
          <h2 className="text-xl md:text-2xl font-bold">Pantangan dan Waktu Ideal dalam Membuat Alat Musik Bambu</h2>
            <p className="font-normal">
            Ada beberapa hal yang harus diperhatikan ketika membuat alat musik bambu:
            <ol className="mx-10 list-disc space-y-2">
              <li><span className="font-normal">Tidak boleh dibuat pada hari Beser, karena suara yang dihasilkan kurang bagus, bambu cepat pecah, serta tidak keluar <i>taksu</i>-nya.</span></li>
              <li><span className="font-normal">Mencari dan memotong bambu sebaiknya tidak dilakukan pada hari Umanis, dan paling baik dilakukan pada hari Kliwon.</span></li>
              <li><span className="font-normal">Jika mencari bambu di musim hujan, bambu bisa dijemur terlebih dahulu, tapi jangan terlalu panas, dan pindahkan sesekali ke tempat teduh.</span></li>
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
