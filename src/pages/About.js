import Layout from '../component/Layout';
import './About.css';

export default function About() {
  return (
    <Layout>
      <div className="contentAbout">
        <img src="/images/zakia hotel.png" className="contentAboutImg" alt="rocket"></img>
        <h2 className="contentAboutTitle">Tentang zakia hotel</h2>
        <p className="contentAboutBody">Aplikasi ini dikembangkan oleh Zakia Marrit Mahasiswa Universitas Diponegoro Jurusan Teknik Komputer Angkatan 2020, dengan tujuan memenuhi tugas akhir praktikum pemrograman perangkat bergerak</p>
      </div>
    </Layout>
  );
}
