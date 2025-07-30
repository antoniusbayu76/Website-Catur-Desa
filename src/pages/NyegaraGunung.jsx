import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import bgImage from "../assets/danau.png";
import Navbar from "../components/Navbar";
import DiscoverCulture from "../components/DiscoverCulture";
import Footer from "../components/Footer";

export default function NyegaraGunung() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

   return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28 pb-15">
        {/* Header */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Kebudayaan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Nyegara Gunung – Konsepsi Masyarakat Adat Dalem Tamblingan dalam Melestarikan Alam
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By Ketut Santi Adnyana - Brasti</span>
            </div>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" /> 12 min read
              </span>
              <span>Updated July 2025</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={bgImage} alt="Nyegara Gunung" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 px-4 md:px-0 space-y-6 text-justify text-sm md:text-base leading-relaxed">
          <p className="indent-8">Masyarakat Adat Dalem Tamblingan adalah Masyarakat adat tua yang sudah ada sejak jaman Kerajaan Bali Kuno. Masyarakat adat Dalem Tamblingan mendiami sekitar kawasan danau Tamblingan yang berada di kawasan hutan yang di sebut Alas Mertajati. Nama Tamblingan sendiri diyakini berasal dari kata tamba dan eling, Tamba berarti obat dan Eling berarti sadar. Sehingga Tamblingan itu sendiri bermakna “obat penjaga kesadaran”. Sadar akan pentingnya alam dan sadar bahwa alam adalah sumber kehidupan.</p>

          <p className="indent-8">Sesuai dengan nama hutan disekitar danau Tamblingan yang disebut dengan Alas Mertajati yang berarti “Hutan Kehidupan”. Karena air yang digunakan oleh Masyarakat Tamblingan berasal dari danau Tamblingan dan Alas Mertajati. Bahkan tidak hanya bagi Masyarakat Tamblingan saja, tetapi juga di daerah-daerah yang berada di dua kabupaten yaitu Buleleng dan Tabanan.</p>

          <p className="indent-8">Wilayah Jatiluwih yang terkenal dengan hamparan sawahnya, meyakini bahwa air yang mengairi sawah mereka berasal dari Danau Tamblingan. Sehingga mereka rutin melakukan ritual persembahyangan yang disebut “Ngaturang Pekelem” di danau Tamblingan.</p>

          <p className="indent-8">Secara kesejarahan, prasasti-prasasti yang mencatat tentang keberadaan Masyarakat adat Dalem Tamblingan dikeluarkan oleh raja Ugrasena dan Raja Suradipa, yang merupakan raja Bali Kuno.</p>

          <p className="indent-8">Dalam prasasti tersebut disebutkan bahwa Masyarakat Adat Dalem Tamblingan sudah mendiami Kawasan danau Tamblingan pada abad ke 11. Seiring berjalannya waktu, peradaban semakin bertumbuh, Masyarakat bertambah banyak, sehingga sekitar abad ke 14, para leluhur kami memutuskan untuk meninggalkan kawasan danau Tamblingan dan pindah ke area dibawahnya dengan tujuan untuk menjaga kesucian danau Tamblingan dan Alas Mertajati.</p>

          <p className="indent-8">Para leluhur kami pindah ke wilayah yang saat ini disebut sebagai Desa Gobleg, dan menyebar ke tiga wilayah lain yaitu Munduk, Gesing dan Umejero, yang saat ini disebut sebagai catur desa yaitu desa Gobleg, Munduk, Gesing dan Umejero. Sedangkan masyarakat yang berada di catur desa ini disebut dengan “Panjak Pengulu”. Panjak berarti masyarakat, dan Pengulu dari kata Hulu yang berarti kepala atau atas. Sehingga bermakna masyarakat yang berasal dari hulu (atas).</p>

          <p className="indent-8">Bagi masyarakat kami sendiri kawasan danau Tamblingan dan Alas Mertajati adalah hulu (kepala) kami, sehingga kami harus tetap menjaga kesuciannya. Terdapat 17 tempat suci yang tersebar di seluruh kawasan Alas Mertajati dan danau Tamblingan, selain menjadi situs-situs bersejarah, keberadaan tempat – tempat suci ini juga menunjukkan bahwa bagi masyarakat Tamblingan, seluruh wilayah hutan itu adalah tempat suci yang harus dijaga kesucian dan kelestariannya.</p>

          <h2 className="text-xl md:text-2xl font-bold">Konsep Nyegara Gunung</h2>

          <p className="indent-8">Menjaga kelestarian alam adalah bagian dari keyakinan masyarakat adat Dalem Tamblingan. Masyarakat Adat Dalem Tamblingan menganut keyakinan yang disebut “Piagem Gama Tirta”, yang bisa diartikan sebagai agama air. Piagem Gama Tirta adalah keyakinan yang memuliakan air dan selalu menjaga harmoni dengan alam. Nilai – nilai dalam menjaga kelestarian alam ini banyak diwariskan oleh para leluhur kami dalam berbagai ritual yang ada di masyarakat adat dalem tamblingan. Salah satu ritual terbesar yang ada di masyarakat adat dalem Tamblingan adalah ritual Karya Alilitan.</p>

          <p className="indent-8">Pada ritual karya alilitan terkandung konsep Nyegara Gunung yang mengajarkan nilai nilai konservasi secara holistik, karena Nyegara Gunung adalah sebuah filosofi bahwa antara laut dan gunung adalah satu kesatuan yang tak terpisahkan.</p>

          <p className="indent-8">Ritual ini dilaksanakan setiap dua tahun sekali dan berlangsung selama 6 bulan, yang dimulai pada bulan pertama kalender Bali yang disebut sasih Kasa dan berakhir pada bulan kelima atau sasih kelima (biasanya mulai pada bulan Juli sampai bulan desember)</p>

          <p className="indent-8">Pada tiga bulan pertama, ritual diadakan di pura yang ada di desa. Dalam ritual ini diadakan pembersihan dan penyucian alam sekitar yang ditandai dengan ritual penyucian ke mata air-mata air suci yang ada di desa. Area desa yang menjadi wilayah pemukiman penduduk disebut “Madyaning Capah” atau wilayah Tengah.</p>

          <p className="indent-8">Setelah itu, pada bulan keempat, masyarakat akan melakukan perjalanan untuk melakukan ritual di wilayah hulu atau disebut Luhuring Capah.</p>

          <p className="indent-8">Ritual diselenggarakan di pura yang berada di dalam Alas Mertajati dengan melakukan persembahan kedalam danau Tamblingan. Ritual ini bertujuan untuk menyucikan kawasan hutan dan danau, yang kemudian memohon berkat kesejahteraan kepada Ida Betara Pengulu yang disimbolkan dalam bentuk tirta atau air suci.</p>

          <p className="indent-8">Setelah memperoleh berkat kesejahtraan masyarakat akan kembali ke desa untuk melakukan persiapan perjalanan menuju ke daerah pesisir atau disebut Soring Capah.</p>

          <p className="indent-8">Perjalanan ke pesisir dilakukan dari desa Gobleg yang diikuti oleh ribuan anggota masyarakat adat Dalem Tamblingan dengan berjalan kaki sejauh 21 kilometer. Ritual ini melambangkan bahwa kesejahtraan yang telah di anugerahi oleh tuhan harus disebarkan ke semua wilayah dari gunung hingga ke daerah pesisir pantai dan laut.</p>

          <p className="indent-8">Selama perjalanan ini, disepanjang jalan menuju pesisir, masyarakat yang kami lewati akan menyuguhkan makanan dan minuman yang diberikan pada masyarakat kami.</p>

          <p className="indent-8">Sesampainya di Pantai, kami melakukan ritual disana selama 3 hari. Dan selama 3 hari itu, setiap harinya setiap anggota subak atau kelompok tani tradisional yang berada di soring capah (wilayah hilir) akan menghaturkan makanan yang disebut dengan nasi klatkat yang berisikan nasi hasil dari sawah mereka beserta lauk pauknya.</p>

          <p className="indent-8">Puncak ritual di Pantai ini, ditandai dengan mempersembahkan persembahan ke laut. Setelah 3 hari beritual di Pantai, masyarakat kami melakukan perjalanan Kembali ke desa. Perjalanan pulang ini harus mengambil rute yang berbeda dari sebelumnya. Hal ini sebagai symbol bahwa berkat kesejahtraan harus menyebar ke semua wilayah.</p>

          <p className="indent-8">Kemudian pada bulan terakhir, rangkaian ritual diakhiri dengan melaksakan ritual di pura yang ada di desa sebagai symbol dari pengukuhan kesejahtraan agar masyarakat senantiasa berada dalam kesejahtraan selama waktu waktu kedepan.</p>

          <h2 className="text-xl md:text-2xl font-bold">Praktek dan Relevansi</h2>

          <p className="indent-8">Penyelenggaraan ritual ini, dalam prakteknya selain menjadi aktivitas spiritual bagi masyarakat adat dalem Tamblingan, juga dapat memperkuat ikatan dan hubungan antara masyarakat di pegunungan dan pesisir, terutama dalam semangat yang sama yaitu menjaga kelestarian alam.</p>

          <p className="indent-8">Dan melalui konsep nyegara gunung ini, dapat dilihat bahwa untuk menjaga kelestarian alam, kita tidak bisa melakukannya sendiri-sendiri secara terpisah-pisah. Karena antara gunung dan laut, hulu dan hilir memiliki hubungan yang tidak bisa dipisahkan. Dari pegunungan hingga laut merupakan satu kesatuan ekosistem yang saling menunjang.</p>

          <p className="indent-8">Konsep nyegara gunung ini adalah konsep konservasi yang holistic, menyeluruh. Konsep yang memperlihatkan hubungan antara manusia dengan sang pencipta, manusia dengan alam yang menjadi ruang hidupnya, dan manusia dengan sesamanya. Dengan konsep konservasi yang merupakan kearifan local ini, masih sangat relevan untuk diterapkan di daerah kita sendiri dan pada era modern ini.</p>

          <p className="indent-8">Akan kurang efektif apabila kita belajar ilmu konservasi jauh keluar negeri, dan membagi ekosistem berdasarkan blok -blok yang terpisah seperti yang banyak diterapkan saat ini seperti ada blok religi, blok pemukiman, blok pemanfaatan pertanian dan lain sebagainya.</p>

          <p className="indent-8">Dengan menyadari bahwa antara gunung dan laut adalah satu ekosistem yang tak terpisahkan, kita dapat menentukan metode – metode yang lebih tepat dalam mengelola wilayah ruang hidup kita sehingga dapat menjaga kelestarian alam dan lingkungan kita.</p>

          <p className="indent-8">Menyadari bahwa sumber-sumber air seperti mata air dan Sungai yang mengalir di seluruh wilayah adat Dalem Tamblingan bukan hanya milik kami sendiri, melainkan juga milik dari seluruh wilayah yang dilalui oleh aliran Sungai itu, sehingga bagi kami masyarakat hulu, menjaga dan melindungi sumber-sumber air tersebut adalah sebuah keharusan.</p>
        </div>
      </div>
      <DiscoverCulture />
      <Footer />
    </div>
  );
}
