import axios from 'axios';
import { useEffect, useState } from 'react';
import Gap from '../component/Gap';
import JenisKamarCard from '../component/JenisKamarCard';
import Layout from '../component/Layout';
import './JenisKamar.css';

export default function JenisKamar() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJenisKamar() {
      try {
        const response = await axios.get('https://api-zakiahotel.herokuapp.com/jenisKamar');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchJenisKamar();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="contentJenisKamar">
        <img src="/images/zakiatel.png" className="contentJenisKamarImg" alt="rocket"></img>
        {isLoading ? (
          <p>Harap Tunggu..</p>
        ) : (
          data.map(function (item, index) {
            return (
              <div key={index}>
                <Gap height={15} />
                <JenisKamarCard jenis={item} />
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
}
