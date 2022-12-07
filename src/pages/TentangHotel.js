import Layout from '../component/Layout';
import './TentangHotel.css';

export default function TentangHotel() {
  return (
    <Layout>
      <div className="contentTentangHotel">
        <img src="/images/zakia hotel.png" className="contentTentangHotelImg" alt="person"></img>
        <h2 className="contentTentangHotelTitle">Tentang hotel</h2>
        <p className="contentTentangHotelBody">Aplikasi buatan Zakia.</p>
        <p className="contentTentangHotelBody">21120120120024</p>
      </div>
    </Layout>
  );
}
