import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import danau from "../assets/danau.png";
import Navbar from "../components/Navbar";

export default function AturanAdat() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#625b39] via-[#988c44] to-[#d1bb48] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Kebudayaan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Pegangan Hukum Adat Dalem Tamblingan
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By KKN Mekar Banjar</span>
            </div>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                12 min read
              </span>
              <span>Updated 08:11 AM WITA, Wed July 23, 2025</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={danau} alt="Danau Tamblingan" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
            <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-xl text-black/80">
              “Air suci dan hutan bukan sekadar elemen alam, melainkan bagian dari nadi adat yang tak terpisahkan.”
            </blockquote>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
            Krama Adat Dalem Tamblingan masih memegang teguh hukum/aturan yang diwariskan sejak seribu tahun yang lalu, terutama yang terkait dengan Alas Mertajati, salah satunya tercatat dalam babad Kandan Sang Hyang Mertajati lembar ke-83a,
          </p>
          <blockquote className="border-l-4 border-[#4d472a] pl-4 italic">
            "Engko Pasek Tamblingan, jani yan pejah engko, mai engko nunas wisnu engko."<br />
            (Kalian Pasek Tamblingan, jika kalian mati, kemarilah untuk memohon tirta.)
          </blockquote>
          <p className="indent-8">
            Pelaksanaan upacara panca yadnya (Dewa Yadnya, Rsi Yadnya, Pitra Yadnya, Manusa Yadnya, Bhuta Yadnya) krama Adat Dalem Tamblingan harus menggunakan sarana air suci (tirta) dalam setiap prosesnya. Oleh karena itu, krama Adat Dalem Tamblingan di Catur Desa sering disebut sebagai penganut Wisnu atau penganut Piagem Gama Tirta. Sebagai bentuk nyata pemuliaan air, aktivitas pemuliaan bukan hanya diwujudkan dengan cara memelihara serta merawat air dan sumber-sumbernya, melainkan juga dengan merawat dan menjaga hutan, Alas Mertajati.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">Prasasti Suradhipa dan Kutukan Pelanggar Piagam</h2>
          <p className="indent-8">
            Perlindungan pada krama Adat Dalem Tamblingan (karaman i Tamblingan atau disebut juga dengan karaman i Tambelingan) dan Alas Mertajati ditetapkan dalam prasasti Suradhipa berangka tahun 1014 Saka (1092 Masehi) pada masa pemerintahan Sri Suradhipa (1101–1119 Masehi) dan babad Indu Gobed lembar ke-11 A. Sebagai catatan, prasasti Suradipa disebut juga prasasti Gobleg, Pura Batur B karena ditemukan/disimpan di Pura Batur, Desa Gobleg. Bhisama bagi orang-orang yang berkelakuan jahat mempermainkan piagam anugerah Paduka Sri Maharaja kepada penduduk Desa Tamblingan sangatlah berat, seperti tercantum dalam prasasti tersebut:
          </p>
          <blockquote className="border-l-4 border-[#4d472a] pl-4 italic text-sm">
            "Harap kamu dengar kutuk perjanjian ini terhadapmu. Apabila ada salah seorang berkelakuan jahat mempermainkan piagam anugerah Paduka Sri Maharaja kepada penduduk Desa Tamblingan sewilayahnya, orang brahmana, kesatria, wesia, sudra, grahasta, biksu, laki-laki, perempuan, para pegawai, hamba raja, ser, nayaka, senapati, pendeta Ciwa atau Buda, hingga para caksu-nya sekalian, semogalah dibebani oleh Bhatara. Bila ia tiada terbunuh, terjanglah di mana ia berada. Putarlah kepalanya, tariklah ususnya, keluarkanlah isi perutnya, tariklah hatinya, makanlah dagingnya, patahkanlah tulangnya, habisilah jiwanya. Kalau ia pergi ke ladang supaya disambar petir, diparang raksasa, dimakan oleh harimau, dipatuk ular, diputar oleh Dewa-Dewa Manyu, segala kesusahan yang diderita. Wahai kamu sang Pancakusika: Korsika, Garga, Metri, Kurusya, Pretanjala, jatuhkanlah ia ke dalam samudra, tenggelamkanlah ke dalam kuala, agar diseret buaya dan tuwiran, dililit ular, agar kembali ke tempat neraka, dipalu oleh Sang Yama-Bala, dipukul oleh Sang Kingkara, tujuh kali ia menjelma supaya sakit sengsara hidupnya. Segala kutuk besar dijumpainya dan segala cacat manusia yang dideritanya, rusak tak seperti manusia biasa, semogalah terjadi"

          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Aturan Tidak Tertulis dalam Kehidupan Krama
          </h2>
          <ol className="space-y-4 text-justify">
            {[
              "Bagi masyarakat/krama Adat Dalem Tamblingan yang menebang pohon kayu di dalam kawasan Alas Mertajati akan terkena bhisama.",
              "Semua krama Adat Dalem Tamblingan berkontribusi aktif pada saat karya di pura-pura yang ada di wewidangan Adat Dalem Tamblingan, berupa banten, tenaga, atau uang pengganti banten.",
              "Bagi krama yang kawin keluar dari Adat Dalem Tamblingan diwajibkan mepamit di Pura Pemulungan Agung.",
              "Turus Lumbung (tonggak) untuk pelinggih Ida Bhatara Kemulan Sakti harus menggunakan kayu dadap tis. Juga, atap dibuat dari ijuk dan kerangka pelinggih dari bambu.",
              "Pada saat upacara puncak dewa yadnya seperti Ngenteg Linggih di pura umum, harus mendak taulan di Pura Tirta Mengening. Taulan ditempatkan di setiap pelinggih.",
              "Pelaksanaan peyadnyan menghindari hari Pepelan karena Sanghyang Aji Sakti sedang bermeditasi. Dianjurkan dilaksanakan saat dina Sudama atau Kandengan.",
              "Hanya Pengerajeg Dalem Tamblingan dan/atau keluarganya yang boleh nuhur tirta di Pura Siwa dalam pelaksanaan panca yadnya."
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="w-6 flex-shrink-0">{index + 1}.</span>
                <p className="ml-2">{text}</p>
              </li>
            ))}
          </ol>

          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Aturan Adat Khusus Terkait Danau Tamblingan
          </h2>
          <ul className="space-y-4 text-justify">
            {[
              "Jika ada yang meninggal di kawasan Danau Tamblingan, dilakukan upacara mrasista danu atau penyucian danau oleh keluarga korban. Hal ini merupakan salah satu alasan mengapa tidak boleh ada pemukiman di sekitar danau.",
              "Sarana transportasi di Danau Tamblingan hanya boleh menggunakan pedau tradisional tanpa mesin agar tidak terjadi pencemaran air danau.",
              "Bagi para pencari ikan, hanya boleh menggunakan jaring dengan ukuran tertentu dan jenis pancing tertentu, serta tidak boleh sama sekali menggunakan zat kimia beracun untuk menjaga keseimbangan populasi ikan.",
              "Bagi subak-subak yang airnya bersumber dari Danau Tamblingan, dilarang mengambil air di atas (hulu) dari Temuku Aya (pembagian air terbesar yang terletak di bagian paling hulu). Hal tersebut ditujukan untuk menjaga ketersediaan air dan ketertiban pendistribusian air."
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="w-4 flex-shrink-0 mt-1">•</span>
                <p className="ml-2">{text}</p>
              </li>
            ))}
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">Upacara Rutin dan Kepercayaan Lisan Masyarakat</h2>
          <p className="indent-8">
            Upacara yadnya Wana Kertih dan Danu Kertih untuk penyucian hutan dan danau dilakukan setiap dua tahun sekali. Upacara dilaksanakan ketika karya Pengerakih di pura yang ada di sekitar Danau Tamblingan, bertepatan dengan kembangin sasih kapat sesuai dengan dresta kuna Adat Dalem Tamblingan.
          </p>
          <p className="indent-8">
            Selain itu, ada juga mitos yang berkembang di masyarakat, yaitu ketika sedang berada di atas pedau di danau, sedang memancing, atau melakukan aktivitas lainnya di danau, tidak boleh berbicara tentang pantai atau laut karena dapat menyebabkan ombak danau membesar. Juga, saat masuk hutan untuk ngayah ke pura-pura atau untuk kebutuhan apa pun, tidak diperbolehkan berkata-kata kasar atau mengeluh lelah agar tidak tersesat di dalam hutan.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">Penjaga Tradisional Alas dan Danu</h2>
          <p className="indent-8">
            Setelah pindah dari Alas Mertajati ke Hunusan (Gobleg), Tengah-Mel (Munduk), dan Pangi (Gesing), kemudian juga ke Umejero pada akhir abad ke-14, selanjutnya penjagaan hutan dan danau diberikan kepada turunan Barak Tegeh Kori dan menega turunan Pasek Wancing:
          </p>
          <blockquote className="border-l-4 border-[#4d472a] pl-4 italic">
            "yang ditugaskan untuk menjaga Alas Mertajati adalah Barak Tegeh Kori, dan yang ditugaskan untuk menjaga danau adalah Pasek Wancing."
          </blockquote>
          <p className="indent-8">
            Dulu, sampai sekitar tahun 1980-an, para menega diizinkan membuat kubu atau pondok di pinggir danau, di dekat Pura Endek agar bisa mengawasi hutan secara langsung. Pondok menega tua tidak boleh dibuat permanen, hanya dibuat dari pupung (bambu danau). Pondok-pondok tersebut hanya ditempati ketika musim ikan, namun bagi mereka yang sudah tua atau sedang hamil tua tidak diperbolehkan tinggal.
          </p>
          <p className="indent-8">
            Pada masa kepemimpinan Dane Pengerajeg Istri, Gusti Ayu Rai pada tahun 1970-an, para menega diberi hak petak untuk berkebun di telajakan pura. Tiap keluarga bisa mengelola lahan selebar 10 meter ke arah danau dan panjang disesuaikan dengan pasang surut air danau. Tanaman yang biasa ditanam adalah singkong, jagung, kacang, dan sayur-sayuran, serta diperbolehkan juga memelihara sapi.
          </p>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
}
