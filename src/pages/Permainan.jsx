import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Discover from "../components/DiscoverCulture";
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
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Kebudayaan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Permainan Tradisional
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
          <h2 className="text-xl md:text-2xl font-bold">Permainan yang Melatih Motorik Anak</h2>
          <p >
            Masyarakat Adat Dalem Tamblingan pernah mengenal dan memainkan beberapa permainan tradisional yang membutuhkan keterampilan dan melatih motorik anak. Sayangnya saat ini sudah tidak lagi dimainkan, tergantikan oleh permainan dalam ponsel atau gawai lainnya.
          </p>
         
          <ol className="mx-5 text-xl list-decimal font-semibold">
            <li><span className="text-xl font-semibold"> Megemblong  </span></li>
              <p className="pt-1 pb-2 text-base font-normal">
              Permainan ini membutuhkan biji kemiri, dimainkan oleh sedikitnya tiga orang pemain. Setiap pemain membutuhkan dua biji kemiri, salah satu biji kemiri dari setiap pemain dijejer di atas <i>semprong</i> (potongan bambu pendek untuk meniup api di dapur kayu) yang direbahkan di tanah. Biji kemiri lainnya akan digunakan untuk melempar biji kemiri yang dijejer di atas semprong. Permainan dimulai dengan menentukan pelempar pertama. Masing-masing peserta melempar biji kemirinya dari titik jejeran kemiri sejauh mungkin. Pemain dengan lemparan terjauh akan mendapat kesempatan melempar paling awal. Jika lemparan berhasil mengenai sasaran, maka pelempar bisa memiliki kemiri yang jatuh dari atas semprong. Jika tidak ada yang mengenai sasaran, permainan bisa diulang kembali dengan cara yang sama. Pada putaran kedua, salah satu pemain boleh tidak ikut melempar kemirinya, memilih <i>nengge</i>, menunggu saja pemain yang lain menyelesaikan lemparan. Jika tidak ada satu pun pemain yang dapat mengenai sasaran atau masih ada sisa kemiri, maka secara langsung kemiri yang tersisa akan menjadi milik pemain yang <i>nengge</i>.

              </p>
            <li><span className="text-xl font-semibold"> Metungsah  </span></li>
              <p className="pt-1 pb-2 text-base font-normal">
              Permainan menggunakan biji kemiri, dengan jumlah pemain dua orang atau lebih. Setiap pemain melempar biji kemiri ke tembok yang memiliki lantai datar, sehingga biji kemiri akan memantul dari tembok ke arah lantai. Pemain yang pantulannya paling jauh akan mendapat giliran pertama. Pemain dengan pantulan jarak terjauh mendapatkan kesempatan untuk melempar kemiri lawan yang berada paling dekat dengan kemirinya sendiri. Jika mengenai kemiri lawan, maka kemiri akan dimiliki oleh pemain tersebut. Jika lemparan tidak mengenai sasaran, maka akan dilanjutkan oleh peserta yang memiliki jarak pantulan terjauh selanjutnya. Demikian seterusnya sampai kemiri pemain habis dalam satu kali permainan.

              </p>
            <li><span className="text-xl font-semibold"> Meteles  </span></li>
              <p className="pt-1 pb-2 text-base font-normal">
              Permainan menggunakan uang kepeng, bisa diikuti oleh lima orang. Satu orang metandang atau memimpin permainan dengan mengumpulkan tumpukan uang kepeng dari peserta yang memasang uang. Uang kepeng kemudian disembunyikan pada genggaman si pemimpin. Pemain lainnya harus menebak jumlah sisa uang kepeng setelah dibagi empat. Hasil akhir hitungan adalah:
                <ol className="mx-10 list-decimal space-y-2">
                <li><span className="font-normal">Memasang di <i>kelod</i> (selatan)</span></li>
                <li><span className="font-normal">Memasang di <i>kauh</i> (barat)</span></li>
                <li><span className="font-normal">Memasang di <i>kaja</i> (utara)</span></li>
                <li><span className="font-normal">Memasang di <i>kangin</i> (timur)</span></li>
                </ol>
                Jadi jika sisa uang kepeng adalah satu, maka pemenangnya adalah pemain yang memasang di <i>kelod</i> (selatan). Jika sisa empat, pemenangnya yang memasang di <i>kangin</i> (timur).

              </p>
            <li><span className="text-xl font-semibold"> Megotrek  </span></li>
              <p className="pt-1 pb-2 text-base font-normal">
              Dimainkan oleh dua orang atau lebih, menggunakan batu agak pipih selebar telapak tangan. Setiap peserta harus memiliki dua buah batu dalam sekali permainan. Satu batu digunakan sebagai <i>embung</i> atau batu yang dijadikan taruhan dan satu batu lagi digunakan untuk melempar. <i>Embung</i> dipasang berjejer oleh semua pemain di atas garis lurus di atas tanah. Jika pemainnya lima orang, maka akan ada lima <i>embung</i> yang berjejer. Hampir sama dengan megemblong. Setiap pemain akan melempar batu dari jejeran <i>embung</i> sejauh mungkin dengan tangan. Pelempar dengan jarak terjauh akan mendapatkan kesempatan pertama untuk melempar ke arah jejeran <i>embung</i>. Jika batunya tidak mengenai sasaran, dilanjutkan oleh pemain berikutnya. Namun jika berhasil membuat <i>embung</i> keluar dari garis jejeran, maka <i>embung</i> yang terlempar menjadi milik pelempar batu. Batu taruhan atau <i>embung</i> harus bergeser ke arah belakang garis jejeran. Jika batunya ke depan garis jejeran maka lemparan tersebut dianggap gagal dan <i>embung</i> tidak bisa dimiliki oleh pelempar batu. Permainan dilanjutkan dengan lemparan <i>gotrekan</i>, menggunakan batu yang diletakkan di atas jari kaki. Pemain harus melemparkan batu ke arah <i>embung</i> sampai bisa mengenai sasaran. Jika tidak mengenai sasaran, dilanjutkan dengan cara yang sama oleh pemain lainnya hingga <i>embung</i> habis.

              </p>
            <li><span className="text-xl font-semibold"> Paku Tato  </span></li>
              <p className="pt-1 pb-2 text-base font-normal">
              Daun paku (pakis) merupakan salah satu alat permainan anak-anak. Paku jenis tertentu memiliki serbuk berwarna putih di bagian belakang daunnya, dan paku ini tidak dapat dimakan. Serbuk tersebut adalah kumpulan spora yang merupakan alat reproduksi paku. Petik daun paku yang mengandung serbuk putih, kemudian tempelkan bagian belakang daun yang mengandung spora di tangan atau bagian tubuh lainnya selama beberapa detik. Serbuk putih akan menempel di kulit, menyerupai tato berbentuk daun paku.

              </p>
            <li><span className="text-xl font-semibold"> Gasing  </span></li>
              <p className="pt-1 pb-2 text-base font-normal">
              Gasing merupakan salah satu permainan di Catur Desa sebagai masyarakat agraris. Gasing Bali berbentuk piring terbang, harus dibuat dengan sangat proporsional untuk menciptakan keseimbangan geraknya. Gasing dimainkan saat senggang, pada jeda musim bertani. Biasanya dimainkan oleh laki-laki, bukan hanya anak-anak, melainkan lintas usia. Ukurannya juga berbeda-beda, disesuaikan dengan usia dan keinginan pemain. Bahan utama gasing adalah kayu, dan kayu terbaik yang biasa digunakan adalah kayu limau atau kayu jeruk. Hal tersebut dikarenakan faktor kerapatan serat, fleksibilitas terhadap cuaca, dan berat kayu yang ideal. Namun kemudian, berkembang juga gasing yang dibuat dari kayu kesambi, kemuning, sawo, kelengkeng, atau sonokeling. Gasing bukan sekadar permainan, namun juga harus diperhatikan kesakralannya. Bahan harus dipilih pada hari-hari tertentu, warna pilihan, juga harus melakukan persembahyangan sebelum memainkannya.

              </p>
              
          </ol>

          </div>
      </div>

      <div className="h-20" />
      <Discover/>
      <Footer/>
    </div>
  );
}
