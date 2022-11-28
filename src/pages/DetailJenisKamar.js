import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../component/Layout';
import './DetailJenisKamar.css';

export default function DetailJenisKamar() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetailJenisKamar() {
      try {
        const response = await axios.get('https://api-zakiahotel.herokuapp.com/jenisKamar', {
          params: {
            id,
          },
        });
        if (response.status === 200) {
          setData(response.data[0]);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchDetailJenisKamar();
      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <Layout>
      <div className="contentDetailJenisKamar">
        <img src="/images/zakia hotel.png" className="contentDetailJenisKamarImg" alt="rocket"></img>
        {isLoading ? (
          <p>Harap Tunggu..</p>
        ) : (
          <>
            <h1>Detail Jenis Kamar</h1>
            <div className="cardDetailJenisKamar">
              <table border="0" width="100%">
                <tr>
                  <td>ID Jenis Kamar</td>
                  <td>:</td>
                  <td>{data.id}</td>
                </tr>
                <tr>
                  <td>Nama Jenis Kamar</td>
                  <td>:</td>
                  <td>{data.nama}</td>
                </tr>
              </table>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
