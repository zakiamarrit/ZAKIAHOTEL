import LinkPrimary from '../component/LinkPrimary';
import LinkSecondary from '../component/LinkSecondary';
import Layout from '../component/Layout';
import Gap from '../component/Gap';

import './Welcome.css';

export default function Welcome() {
  return (
    <Layout>
      <div className="contentWelcome">
        <img src="/images/zakia hotel.png" className="contentWelcomeImg" alt="rocket"></img>
        <h2 className="contentWelcomeTitle">Reservasi Hotel Yuk</h2>
        <p className="contentWelcomeBody">Bersama zakia hotel reservasi secara digital hotel semakin mudah kapanpun dimanapun .</p>
        <Gap height={25} />
        <LinkPrimary url="start" text="Mulai" />
        <Gap height={10} />
        <LinkSecondary url="/jenis_kamar" text="Jenis Kamar" />
      </div>
    </Layout>
  );
}
