import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import headerImg from "../assets/danau.png";
import Navbar from "../components/Navbar";

export default function MenjalaIngatan() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="pt-28">
        {/* Header */}
        <div className="w-full px-4 md:px-20 py-10 bg-gradient-to-r from-[#44342F] to-[#AA5C46] text-white">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-sm text-white/80">
              <span className="underline">Topics</span> / Kebudayaan
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Menjala Ingatan atas Alas Mertajati, Tamblingan
            </h1>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span>By Ketut Santi Adnyana - Brasti</span>
            </div>
            <div className="text-sm text-white/90 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                12 min read
              </span>
              <span>Updated 14:18 WITA, Mon July 29, 2025</span>
            </div>
          </div>
        </div>

        {/* Image & Quote */}
        <div className="max-w-2xl mx-auto mt-6 px-4 md:px-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img src={headerImg} alt="Alas Mertajati" className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <blockquote className="border-l-4 border-[#4d472a] pl-4 italic font-semibold text-sm md:text-xl text-black/80 mt-6">
            “kita lupa ‘tuk menyayanginya,<br/>
            kita hanya ingat menikmatinya,<br/>
            kita lupa ‘tuk memeliharanya,<br/>
            dan kita lupa ia sahabat kita”<br/>
            — <i>(Nosstress, Semoga Hanya Lupa)</i>
          </blockquote>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto mt-12 px-4 md:px-0 text-sm md:text-base leading-relaxed text-justify space-y-6">
          <p className="indent-8">
            Kabut menutupi jajaran pohon yang mengitari danau, embun bergelayut di pucuk rumput, burung kokokan bertengger di atas perahu dayung, menunggu mentari di ufuk timur. Seperti itulah suasana Danau Tamblingan di pagi hari, satu dari empat danau yang ada di Bali, yang masih tetap berusaha menjaga keelokannya dari jamahan kerakusan manusia. Hanya perahu dayung tradisional yang boleh melintas di atas danau. Budidaya ikan dengan keramba, wisata air seperti perahu bermotor dan sepeda air, tidak diperbolehkan di Danau Tamblingan. Sementara itu, di tiga danau lainnya (Danau Buyan, Danau Beratan, dan Danau Batur), suara perahu mesin bermotor terdengar bising. Budidaya ikan dan berbagai macam wisata air merupakan hal yang biasa kita lihat di sekitar ketiga danau tersebut.
          </p>

          <p className="indent-8">
            Danau Tamblingan terletak di Kabupaten Buleleng, Bali. Danau ini merupakan bagian dari kawasan hutan seluas sekitar 1.300 hektar yang disebut Alas Mertajati (Hutan Mertajati), kawasan tertinggi untuk daerah-daerah di bawahnya. Alas Mertajati ditopang oleh empat desa yang berada di bawahnya, yaitu Desa Gobleg, Desa Munduk, Desa Gesing, dan Desa Umejero. Secara turun-temurun, masyarakat keempat desa ini menganggap Alas Mertajati sebagai hulu (kepala) yang disakralkan dan dijaga kesuciannya. Empat desa ini disebut Catur Desa sebagai sebuah kesatuan komunitas adat yang disebut masyarakat Adat Dalem Tamblingan (ADT).
          </p>

          <p className="indent-8">
            Bagi masyarakat ADT, Alas Mertajati merupakan sebuah kawasan utuh yang diwariskan oleh para leluhur sejak ribuan tahun lalu. Dulu, masyarakat ADT yang dikenal dengan sebutan karaman I Tambelingan bermukim di sekitar kawasan Danau Tamblingan, seperti tertulis dalam Babad Hindu Gobed. Hal tersebut dikuatkan oleh adanya 19 situs-situs suci peninggalan masa megalitik, seperti linggayoni dan bebaturan berupa menhir yang tersebar di dalam kawasan Alas Mertajati, juga catatan sejarah berupa prasasti masa Kerajaan Bali Kuno pada abad ke-10. Dalam perkembangan berikutnya, pada akhir abad ke-14, atas alasan menjaga kesucian air danau dan mempertahankan kelestarian Alas Mertajati, karaman I Tambelingan pindah ke wilayah di bawahnya yang kemudian menjadi Desa Gobleg. Selanjutnya, desa tersebut berkembang membentuk tiga desa lainnya, yaitu Desa Munduk, Desa Gesing, dan Desa Umejero.
          </p>

          <p className="indent-8">
            Kedekatan historis dan nilai-nilai sakral ini memberikan tanggung jawab sekaligus hak bagi masyarakat ADT dalam menjaga dan melindungi Alas Mertajati, termasuk Danau Tamblingan di dalamnya. Masyarakat ADT di Catur Desa juga menyadari bahwa air yang menjadi sumber kehidupan mereka dan desa-desa di bawahnya berasal dari Alas Mertajati. Hal inilah yang kemudian mengharuskan mereka menjaga kelestarian Alas Mertajati, Sang Sumber Kehidupan. Wujud dari keyakinan tersebut tertuang dalam keimanan yang telah dianut secara turun-temurun, yaitu Piagem Gama Tirta, bahwa mereka hidup untuk memuliakan air dan menjaga harmoni dengan alam. Rangkaian ritual dilaksanakan dua tahun sekali dalam kurun waktu enam bulan, ditujukan untuk membersihkan alam dan manusia yang hidup di dalamnya, serta berbagi kesejahteraan kepada sesama, agar keseimbangan dan kelestarian alam tetap terjaga.
          </p>

          <p className="indent-8">
            Namun saat ini, sejalan dengan kehidupan bernegara Bangsa Indonesia, kawasan Alas Mertajati kemudian ditetapkan dan berada dalam tiga status kawasan hutan pemerintah yang berbeda, yaitu kawasan Taman Wisata Alam, Cagar Alam, dan Hutan Lindung. Status tersebut berdampak pada kecepatan perubahan Alas Mertajati, memberikan tantangan serius bagi masyarakat ADT. Tiga status kawasan hutan yang berbeda tersebut mengharuskan masyarakat ADT berhadapan dengan otoritas pemerintahan yang berbeda , menjadikan posisi dan kontrol masyarakat adat atas hutan kian melemah.
          </p>

          <p className="indent-8">
            Hutan mengalami degradasi, kerapatan hutan semakin berkurang akibat pembalakan liar, beberapa spesies flora dan fauna menjadi langka, bahkan mengalami kepunahan. Hal ini bukan hanya menurunkan kualitas Alas Mertajati, melainkan juga lingkungan di bawahnya, terutama yang terkait dengan ketersediaan air bersih. Debit air sungai dan beberapa mata air mengalami penurunan, bahkan menjadi kering. Status Danau Tamblingan sebagai Taman Wisata Alam dengan aktivitas pariwisata berkempingnya yang tidak bisa dikontrol oleh adat, semakin menurunkan kualitas dan kesucian Alas Mertajati. Masyarakat ADT juga mengalami permasalahan serius, yaitu rasa memiliki dan rasa peduli terhadap Alas Mertajati semakin menipis, bahkan sebagian sudah melupakan bahwa Alas Mertajati berfungsi penting sebagai sumber kehidupan yang memberikan tanah subur serta air dan udara bersih.
          </p>

          <p className="indent-8">
            Banyaknya tantangan dan permasalahan tersebut mendorong dan mengharuskan Masyarakat ADT untuk mulai berbenah secara serius. Dengan dasar dan alasan kuat menjaga kelestarian Alas Mertajati, masyarakat ADT berupaya mengajukan permohonan menjadikan Alas Mertajati sebagai Hutan Adat. Pemetaan spasial wilayah, riset sosial budaya, serta inventarisasi vegetasi dan fauna secara partisipatif dilakukan untuk mengumpulkan data dasar. Saat ini, diketahui ada sekitar 90 jenis pohon dan 50 jenis vegetasi bawah yang tumbuh di dalam Alas Mertajati, serta puluhan jenis fauna yang hidup di dalamnya. Selain itu diketahui juga ada 54 titik mata air tersebar di kawasan Catur Desa, di mana beberapa di antaranya mengalami penurunan debit air, bahkan sudah ada yang mengering atau hanya mengalir saat musim hujan.
          </p>

          <p className="indent-8">
            Aktivitas tersebut dilakukan oleh generasi muda Adat Dalem Tamblingan sebagai generasi penerus, termasuk saya di dalamnya. Kami melibatkan berbagai kelompok masyarakat, termasuk para perempuan dan pembuat banten dalam aktivitas tersebut. Banten sebagai sarana ritual menggunakan berbagai jenis keanekaragaman hayati Catur Desa, juga yang ada di dalam  Alas Mertajati. Beberapa di antaranya adalah bija ratus dari segala jenis biji-bijian hasil pertanian, kidang (kijang) sebagai satwa asli Hutan Tamblingan, dan kuyuh (ikan gabus) sebagai ikan endemik Danau Tamblingan. Saat ini, beberapa sarana ritual tersebut semakin sulit didapat karena sudah langka, bahkan ada yang sudah punah.
          </p>

          <p className="indent-8">
            Salah satu teman saya, Willy mengatakan, “Penyebab menurunnya kualitas Alas Mertajati adalah kurangnya rasa memiliki masyarakat, terutama para pendatang . Rasa memiliki bisa muncul ketika kita sudah memahami, serta merasakan manfaat dari keberadaan hutan dan danau. Selain air dan udara bersih, saya mendapatkan keuntungan ekonomi dari Alas Mertajati sebagai pemandu treking. Saya bisa menceritakan pemahaman serta pengetahuan saya tentang hutan dan danau kepada tamu saya. Sambil berjalan, biasanya saya mengajak para tamu untuk mengambil sampah di jalur yang kami lalui, juga memantau pembalakan liar yang terjadi.”
          </p>

          <p className="indent-8">
            Teman saya yang lain, Wahyu si Saudagar Cengkeh menambahkan, “Tak kenal maka tak sayang. Ketika kita sudah mengenal dan memahami hutan, maka kita akan menyayanginya dan muncul rasa bangga karena masih memiliki hutan dan danau yang asri. Hal itu akan mendorong kita untuk selalu menjaga kelestariannya. Saya mengenal Alas Mertajati melalui berbagai kegiatan yang kita lakukan sejak 2018.” Maka, salah satu hal yang dapat kami lakukan untuk memunculkan rasa memiliki atas Alas Mertajati adalah dengan mengenalkan dan memberi pemahaman yang lebih mendalam melalui buku dan video yang sudah kami buat. Kami juga membuat Bale Melajah Alas Mertajati, sebuah bangunan sederhana di sekitar danau, tempat kami, para pemuda Adat Dalem Tamblingan berkumpul serta mulai beraktivitas di sekitar danau dan hutan .
          </p>

          <p className="indent-8">
            Werdi, ketua kelompok kami mengingatkan, “Saat ini kita tidak bisa lagi menjaga hutan hanya melalui mitos seperti dulu, misalnya kalau menebang pohon akan terkena musibah. Bersama para tetua, kita harus menggali lagi aturan-aturan pengelolaan hutan masa lalu, juga membuat aturan baru perlindungan hutan dan sanksi tegas jika ada yang melanggar.” Seingat para tetua, dulu ada aturan waktu penangkapan ikan di danau, tidak setiap saat boleh menangkap ikan. Itu pun tidak sembarang orang bisa mengambil ikan dari Danau Tamblingan, hanya mereka yang berprofesi sebagai menega (penjaga danau secara adat) yang boleh melakukannya. Itu sebabnya, tidak ada yang boleh tinggal di sekitar Danau Tamblingan, termasuk para menega.
          </p>

          <p className="indent-8">
            Kami, sebagai generasi muda, bersama para tetua Adat Dalem Tamblingan memiliki tugas dan kewajiban menjaga Alas Mertajati, agar kehidupan kami dapat terus berlanjut. Kami, dan keturunan kami nanti, akan terus tinggal dan hidup bersama Alas Mertajati di kawasan Catur Desa. Kami akan tetap berupaya menjala ingatan akan kearifan para leluhur, karaman I Tambelingan, dalam menjaga sumber kehidupan untuk diwariskan kembali ke generasi kami selanjutnya. Berbeda dengan mereka yang hanya mencari dan mendapat keuntungan ekonomi dari Alas Mertajati, maka kami tidak bisa pergi ke tempat lain jika kerusakan terjadi dalam ruang kehidupan kami. Semoga semua pihak bisa memahami rasa, pikiran, dan tekad kami untuk terus menjaga Alas Mertajati, Sumber Kehidupan kami.
          </p>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}
