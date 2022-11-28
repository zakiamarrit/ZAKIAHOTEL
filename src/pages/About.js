import Layout from '../component/Layout';
import './About.css';

export default function About() {
  return (
    <Layout>
      <div className="contentAbout">
        <img src="/images/zakia hotel.png" className="contentAboutImg" alt="rocket"></img>
        <h2 className="contentAboutTitle">Tentang zakia hotel</h2>
        <p className="contentAboutBody">Aplikasi buatan Zakia.</p>
        <p className="contentAboutBody">21120120120024</p>
      </div>
    </Layout>
  );
}
