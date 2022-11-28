import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gap from '../component/Gap';
import Layout from '../component/Layout';
import RiwayatCard from '../component/RiwayatCard';
import './RiwayatPendaftaran.css';

export default function RiwayatPendaftaran() {
  const { id_user } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchRiwayatPendaftaran() {
      try {
        const response = await axios.get('https://api-zakiahotel.herokuapp.com/pendaftaran', {
          params: {
            id_user,
          },
        });
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchRiwayatPendaftaran();
      setIsLoading(false);
    }
    fetchData();
  }, [id_user]);

  return (
    <Layout>
      <div className="contentRiwayatPendaftaran">
        <img src="/images/zakia hotel.png" className="contentRiwayatPendaftaranImg" alt="rocket"></img>
        {isLoading ? (
          <p>Harap Tunggu..</p>
        ) : (
          data.map(function (item, index) {
            return (
              <div key={index}>
                <Gap height={15} />
                <RiwayatCard riwayat={item} />
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
}
