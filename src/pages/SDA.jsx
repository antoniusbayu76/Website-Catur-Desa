import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import sdaImg from "../assets/danau.png"; // Ganti sesuai gambar artikel SDA jika ada
import Discover from "../components/DiscoverEnvi";
import Footer from "../components/Footer";

export default function SDA() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        {/* Header */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#625b39] via-[#988c44] to-[#d1bb48] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Lingkungan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">Sumber Daya Alam</h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By KKN Mekar Banjar</span>
            </div>
            <div className="text-sm text-white/90 flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                12 min read
              </span>
              <span>Updated 09:45 AM WITA, Sat July 26, 2025</span>
            </div>
          </div>
        </div>

        {/* Gambar */}
        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={sdaImg} alt="Sumber Daya Alam" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Konten */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-4">

          <h2 className="text-xl md:text-2xl font-bold">1. PADI ( SAWAH )</h2>
          <h2 className="text-xl md:text-xl font-bold">Komoditas Tradisional Catur Desa</h2>
          <p className="indent-8">
           Dahulu, komoditas utama Catur Desa adalah beras dan bawang putih (<i>kesuna bali</i>). Ada tiga jenis beras unggulan, yaitu:
          </p>
          <ol className="mx-10 list-disc">
            <li><span className="font-normal">Ketan (beras putih)</span></li>
            <li><span className="font-normal">Beras merah</span></li>
            <li><span className="font-normal">Injin (beras hitam)</span></li>
          </ol>
          <p className="indent-8">
            Ketiga jenis padi penghasil beras tersebut hanya dapat panen sekali atau dua kali dalam setahun. Biasanya pada enam bulan pertama para petani menanam padi, dan setelah panen, lahan ditanami dengan <i>kesuna bali</i>.
          </p>

          <h2 className="text-xl md:text-xl font-bold">Perubahan Komoditas Akibat Kebijakan Pemerintah</h2>
          <p className="indent-8">
           Saat ini, komoditas utama tersebut telah tergantikan. Hal ini terkait erat dengan kebijakan dan program pemerintah pusat di masa Orde Baru, yaitu:
          </p>
          <ol className="mx-10 list-disc">
            <li><span className="font-normal">Penyeragaman agama melalui PHDI dengan membuat <i>Kahyangan Tiga</i></span></li>
            <li><span className="font-normal">Program ekstensifikasi pertanian melalui pengenalan varietas padi bibit unggul yang dapat panen tiga kali dalam setahun</span></li>
          </ol>

          <h2 className="text-xl md:text-xl font-bold">Ketimpangan antara Padi Lokal dan Padi Bibit Unggul</h2>
          <p className="indent-8">
           Varietas padi baru ini tidak dapat hidup berdampingan dengan varietas padi lokal (ketan, beras merah, injin), karena varietas padi baru tidak dapat hidup dengan perlakuan organik dan harus diberi pupuk serta pestisida kimia. Namun saat ini juga sudah ada padi beras merah yang diperlakukan tidak organik, seperti di Umejero. Padi beras merah asli sangat harum seperti harum cendana, sehingga sering disebut juga padi/beras cendana.

          </p>

          <h2 className="text-xl md:text-xl font-bold">Dampak Perubahan Pola Tanam terhadap Ekosistem Sawah</h2>
          <p className="indent-8">
           Dengan adanya perubahan varietas, pola tanam, dan perlakuan tanam, banyak biota sawah yang tidak dapat hidup dan menjadi sangat langka. Misalnya:
          </p>
          <ol className="mx-10 list-disc">
            <li><span className="font-normal">Belut</span></li>
            <li><span className="font-normal">Katak</span></li>
          </ol>
        <p className="indent-8">
          Padahal, katak digunakan untuk kelengkapan <i>banten</i>, sehingga harus dibeli atau dicari dalam waktu lama karena sudah tidak mudah ditemukan lagi di sawah.
        </p>

          <h2 className="text-xl md:text-xl font-bold">Sawah Organik sebagai Sumber Pangan Lokal</h2>
          <p className="indent-8">
           Sawah yang mendapat perlakuan organik pada dasarnya merupakan sumber pangan harian masyarakat. Ada banyak sumber protein yang bisa ditemukan di sawah, seperti:
          </p>
          <ol className="mx-10 list-disc">
            <li><span className="font-normal">Lindung</span></li>
            <li><span className="font-normal">Kakul</span></li>
            <li><span className="font-normal">Pici-pici</span></li>
            <li><span className="font-normal">Kelipes</span></li>
            <li><span className="font-normal">Belalang</span></li>
        </ol>

        <p className="indent-8">
          Namun pada sawah yang menggunakan pupuk dan pestisida kimia, biota tersebut sulit ditemukan karena tanah menjadi padat dan keras. Selain itu, saat ini sawah tidak lagi dibajak dengan sapi, melainkan dengan traktor, sehingga olahan tanahnya tidak dalam.
        </p>

          <h2 className="text-xl md:text-xl font-bold">Keunggulan Beras Merah</h2>
          <p className="indent-8">
           Jika dibandingkan dengan nasi dari beras putih (bibit unggul), makan nasi dari beras merah sebetulnya lebih irit. Rasa kenyang yang dihasilkan dari satu piring nasi merah sebanding dengan 1,5 - 2 piring nasi putih. Dulu, beras merah dimasak dengan gula merah untuk memberikan rasa kenyang yang lebih lama dan energi yang lebih besar.Sebelum menjadi nasi, ketika masih dalam bentuk nasi <i>aron</i>, gula merah ditambahkan dan dicampur dengan nasi merah.

          </p>
          
          
          <h2 className="text-xl md:text-xl font-bold">Keberlangsungan Padi Beras Merah dan Alih Fungsi Lahan</h2>
          <p className="indent-8 pb-10">
           Saat ini padi beras merah masih mudah ditemukan, ditanam berselang-seling waktunya dengan padi bibit unggul. Namun, khusus di Desa Gobleg, lahan sawah sudah menghilang, digantikan dengan kebun/pohon cengkeh atau pohon buah.
          </p>
          
            <h2 className="text-xl md:text-2xl font-bold">2. TANAMAN PANGAN</h2>
            <h2 className="text-xl md:text-xl font-bold">Kebun dan Pekarangan sebagai Sumber Pangan</h2>
            <p className="indent-8">
            Selain sawah, kebun dan pekarangan rumah adalah ruang sumber pangan masyarakat Adat Dalem Tamblingan (ADT). Seperti disebutkan sebelumnya, sumber karbohidrat telah didapatkan dari umbi-umbian, yaitu:
          </p>
          <ol className="mx-10 list-disc">
            <li><span className="font-normal">Singkong / sela kayu</span></li>
            <li><span className="font-normal">Ubi jalar</span></li>
            <li><span className="font-normal">Ubi aung</span></li>
            <li><span className="font-normal">Suweg</span></li>
            <li><span className="font-normal">Keladi (tabah, togog, biasa, kebo)</span></li>
            <li><span className="font-normal">Sekapa</span></li>
            <li><span className="font-normal">Gadung</span></li>
            </ol>
            <p className="indent-8">
            Namun saat ini, ada beberapa di antaranya yang sudah jarang dikonsumsi, seperti <i>sekapa</i> dan <i>gadung</i>, tergantikan oleh nasi. Jumlahnya juga sudah berkurang karena umbi-umbian sulit tumbuh di antara pohon cengkeh.
          </p>


            <h2 className="text-xl md:text-xl font-bold">Sayuran Lokal sebagai Sumber Nutrisi</h2>
            <p >
            Sumber pangan lainnya adalah aneka jenis sayuran, seperti:
          </p>
            <ol className="mx-10 list-disc">
            <li><span className="font-normal">Paku / pakis</span></li>
            <li><span className="font-normal">Daun anti</span></li>
            <li><span className="font-normal">Daun kelor</span></li>
            <li><span className="font-normal">Jelengot</span></li>
            <li><span className="font-normal">Jepen-jepen</span></li>
            <li><span className="font-normal">Kecipir</span></li>
            <li><span className="font-normal">Papah keladi</span></li>
            <li><span className="font-normal">Aneka jenis jamur yang bisa dimakan</span></li>
            </ol>

            <p >
            Sayuran lainnya yang umum dikonsumsi adalah rebung atau tunas bambu, terutama dari jenis bambu tabah dan bambu petung.
          </p>


            <h2 className="text-xl md:text-xl font-bold">Rempah dan Bumbu Dapur dari Pekarangan</h2>
            <p >
            Bumbu untuk memasak juga tersedia di kebun atau pekarangan. Di antaranya:
          </p>
            <ol className="mx-10 list-disc">
            <li><span className="font-normal">Kunyit</span></li>
            <li><span className="font-normal">Jahe (termasuk jahe merah)</span></li>
            <li><span className="font-normal">Lengkuas</span></li>
            <li><span className="font-normal">Bangle</span></li>
            <li><span className="font-normal">Sereh</span></li>
            <li><span className="font-normal">Bongkot</span></li>
            <li><span className="font-normal">Aneka jenis cabai seperti cabai kerinyi dan cabai rawit</span></li>
            </ol>


            <p className="pb-10">
            Beberapa pohon pala juga tumbuh di kebun-kebun yang ada di Catur Desa.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">3. TANAMAN KOMODITAS - KOPI</h2>
            <h2 className="text-xl md:text-xl font-bold">Kondisi Lahan Sebelum Kedatangan Belanda</h2>
            <p className="indent-8">
            Sebelum kedatangan Belanda, sebagian besar lahan di Catur Desa didominasi oleh sawah dan tegalan yang berisi aneka jenis tanaman, terutama umbi dan buah-buahan.
          </p>
          
            <h2 className="text-xl md:text-xl font-bold">Masuknya Kopi Arabika oleh Belanda</h2>
            <p className="indent-8">
            Pada tahun 1800-an, Belanda memperkenalkan kopi arabika yang dirasa lebih menjanjikan secara ekonomi, hingga akhirnya sebagian lahan sawah berubah menjadi perkebunan kopi. Kopi inilah yang kemudian dikenal dengan nama kopi bali. Ukuran pohonnya besar dan tinggi, demikian juga dengan ukuran bijinya—lebih besar dibanding biji kopi saat ini. Karena ukurannya yang besar dan tinggi, pohon kopi bali menciptakan cuaca yang dingin. Ketika itu, cuaca di Catur Desa jauh lebih dingin dibanding cuaca saat ini.

          </p>

            <h2 className="text-xl md:text-xl font-bold">Serangan Hama dan Pecaruan (1966)</h2>
            <p className="indent-8">
            Pada sekitar tahun 1966, setelah peristiwa G30S/PKI, terjadi serangan hama ulat. Ulat menyerang hampir semua pohon kopi yang ada, sehingga dinamakan geeng gestok. Salah satu upaya yang dilakukan untuk mengusirnya adalah dengan melakukan pecaruan, yaitu upacara yang ditujukan untuk mengembalikan keseimbangan alam.

          </p>

            <h2 className="text-xl md:text-xl font-bold">Peran Pemerintah dan Munculnya Kopi Baru</h2>
            <p className="indent-8">
           Kemudian mulai ada pembinaan dari pemerintah, mengarahkan petani agar tidak merabas kopi ketika panen. Pemerintah juga mulai memperkenalkan pupuk kimia dan mencarikan kredit di bank untuk biaya peremajaan tanaman. Pada saat bersamaan, muncul jenis kopi berukuran pendek, dan hasilnya dianggap lebih bagus dibanding kopi bali. Pada sekitar tahun 1974, kopi bali mulai hilang, digantikan dengan pohon kopi berukuran pendek dan pohon cengkeh.

          </p>

            <h2 className="text-xl md:text-xl font-bold">Desa Munduk sebagai Sentra Kopi</h2>
            <p className="indent-8">
            Pada tahun 1900-an, Desa Munduk dikenal sebagai sentra penghasil kopi terbesar di Bali. Ketika itu, saat panen raya banyak warga dari luar desa datang, seperti dari Gianyar, Karangasem, Seririt, bahkan Jawa. Desa menjadi sangat ramai, banyak tenda para pemanen kopi didirikan di pinggir jalan.

          </p>

            <h2 className="text-xl md:text-xl font-bold">Nilai Konservasi Kopi dan Jenis yang Ditanam</h2>
            <p className="indent-8">
            Pohon kopi pada dasarnya memiliki nilai konservasi tinggi. Sayangnya, komoditas ini sudah jarang dilirik karena harganya yang lebih rendah dibandingkan cengkeh. Ada dua jenis kopi yang dikembangkan di Catur Desa, yaitu:

          </p>
            <ol className="mx-10 list-disc">
            <li><span className="font-normal">Arabika</span></li>
            <li><span className="font-normal">Robusta</span></li>
            </ol>
            <p className="indent-8">
            Kopi memiliki nilai konservasi alam karena sifat tumbuhnya yang harus hidup berdampingan dengan aneka jenis pohon lainnya. Pohon kopi membutuhkan penaung. Jenis pohon yang sering digunakan sebagai penaung adalah:

          </p>
            <ol className="mx-10 list-disc pb-10">
            <li><span className="font-normal">Pohon dadap</span></li>
            <li><span className="font-normal">Pohon lamtoro</span></li>
            </ol>

            <h2 className="text-xl md:text-2xl font-bold">4. TANAMAN KOMODITAS - CENGKEH</h2>
            <h2 className="text-xl md:text-xl font-bold">Sejarah Masuknya Cengkeh ke Catur Desa</h2>
            <p className="indent-8">
            Selain kopi, cengkeh juga merupakan tanaman komoditas atau perdagangan utama di Catur Desa. Cengkeh mulai ditanam pada tahun 1970-an dan mengalami <i>booming</i> pada sekitar tahun 1975. Bibit pertama didatangkan dari Negara.
          </p>        
            
            <h2 className="text-xl md:text-xl font-bold">Nilai Ekonomis Cengkeh Dibandingkan Kopi dan Beras</h2>
            <p className="indent-8">
            Cengkeh dianggap memiliki nilai ekonomis lebih tinggi dibandingkan kopi dan beras. Perbandingannya adalah:

          </p>        
            <ol className="mx-10 list-disc">
            <li><span className="font-normal">1 kilogram cengkeh setara dengan 5 kilogram beras</span></li>
            <li><span className="font-normal">1 kilogram kopi hanya setara dengan 2 kilogram beras</span></li>
            </ol>
            <p className="indent-8">
            Harga cengkeh pada tahun 1970-an hingga 1980-an sangat baik. Maka kemudian, sebagian besar lahan persawahan dan perkebunan kopi beralih fungsi menjadi kebun cengkeh.
          </p>      

          <h2 className="text-xl md:text-xl font-bold">Krisis Harga Akibat Monopoli BPPC</h2>
            <p className="indent-8">
            Namun kemudian, harga cengkeh mengalami penurunan drastis pada tahun 1990-an, ketika BPPC (Badan Penyangga dan Pemasaran Cengkeh) yang dipimpin Tommy Soeharto memonopoli pembelian cengkeh. Saat itu, semua cengkeh harus dijual ke KUD (Koperasi Unit Desa), dan selanjutnya KUD akan menyetor ke BPPC. Harga cengkeh yang awalnya berkisar Rp 15.000, pada era BPPC hanya dihargai Rp 1.500 - Rp 2.000 per kilogram. Ketika itu, karena rasa marah dan kecewa, ada banyak pohon cengkeh yang ditebang dan dibakar.

          </p>    

          <h2 className="text-xl md:text-xl font-bold">Kebangkitan Harga Setelah Reformasi</h2>
            <p className="indent-8">
            Harga cengkeh kembali naik pada masa pemerintahan Gus Dur, setelah Soeharto tumbang dan BPPC dibubarkan, bahkan mencapai Rp 120.000 per kilogram.
          </p>    

          <h2 className="text-xl md:text-xl font-bold">Teknik Panen Cengkeh Tradisional</h2>
            <p className="indent-8">
            Panen cengkeh dilakukan menggunakan bantuan tangga dari bambu yang disebut banggul. Butuh keseimbangan tinggi untuk bisa memanjat banggul dan memetik bunga-bunga cengkeh yang ada di pucuk-pucuk ranting pohon. Juga, dibutuhkan keahlian khusus dalam membuat palit untuk pijakan kaki pada banggul.

          </p>    

          <h2 className="text-xl md:text-xl font-bold">Dampak Lingkungan dari Perkebunan Cengkeh</h2>
            <p className="indent-8">
            Pohon cengkeh adalah jenis tanaman monokultur, tidak bisa hidup berdampingan dengan tanaman atau tumbuhan lainnya. Akar pohon cengkeh juga tidak kuat memegang tanah, sehingga mulai banyak terjadi longsor pada lahan-lahan perkebunan cengkeh. Setelah pohon cengkeh banyak menggantikan pohon kopi dan tanaman penaungnya, terjadi juga penurunan debit air pada beberapa mata air.

          </p>    

        </div>
      </div>

      <div className="h-20" />
      <Discover/>
      <Footer/>
    </div>
  );
}
