import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Layout from '../component/Layout';
import UserCard from '../component/UserCard';
import Select from '../component/Select';
import Input from '../component/Input';
import Gap from '../component/Gap';
import ButtonPrimary from '../component/ButtonPrimary';
import './Pendaftaran.css';
import axios from 'axios';

export default function Pendaftaran() {
  const { id_user } = useParams();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(null);
  const [dataJenisKamar, setDataJenisKamar] = useState(null);
  const [dataJadwalKamar, setDataJadwalKamar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // form
  const [jenisKamar, setJenisKamar] = useState('');
  const [tglPesan, setTglPesan] = useState('');
  const [jadwalKamar, setJadwalKamar] = useState('');

  const handleChangeJenisKamar = (e) => setJenisKamar(e.target.value);
  const handleChangeTglPesan = async (e) => {
    const tglPesanVal = e.target.value;
    setTglPesan(tglPesanVal);
    const sqlDateFormat = tglPesanVal.split('-').reverse().join('-');
    if (sqlDateFormat.length === 10 && jenisKamar) {
      const dateNum = new Date(sqlDateFormat).getDay();
      await fetchJadwalKamar(jenisKamar, dateNum);
    }
  };
  const handleChangeJadwalKamar = (e) => setJadwalKamar(e.target.value);
  const handleDaftar = async () => {
    const id = nanoid();
    const nama_user = dataUser.nama_user;
    try {
      const response = await axios.post('https://api-zakiahotel.herokuapp.com/pendaftaran', {
        id,
        id_user,
        nama_user,
        jenisKamar,
        tglPesan,
        jadwalKamar,
      });
      if (response.status === 201) {
        console.log('status pendaftaran', response.data);
        navigate('/finish/' + id);
      }
    } catch (err) {
      console.log('err', err.response.data);
    }
  };

  const fetchJadwalKamar = async (nama_jenis_kamar, id_hari) => {
    try {
      const response = await axios.get('https://api-zakiahotel.herokuapp.com/jadwalKamar', {
        params: {
          nama_jenis_kamar,
          id_hari,
        },
      });
      if (response.status === 200) {
        setDataJadwalKamar(response.data);
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get('https://api-zakiahotel.herokuapp.com/users', {
          params: {
            id_user,
          },
        });
        if (response.status === 200) {
          setDataUser(response.data[0]);
        }
      } catch (err) {
        console.log('err', err);
      }
    }

    async function fetchJenisKamar() {
      try {
        const response = await axios.get('https://api-zakiahotel.herokuapp.com/jenisKamar');
        if (response.status === 200) {
          setDataJenisKamar(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }

    async function fetchData() {
      setIsLoading(true);
      await fetchUser();
      await fetchJenisKamar();
      setIsLoading(false);
    }
    fetchData();
  }, [id_user]);

  return (
    <Layout>
      <div className="contentPendaftaran">
        <img src="/images/zakia hotel.png" className="contentPendaftaranImg" alt="rocket"></img>
        {isLoading ? (
          <p>Harap Tunggu..</p>
        ) : (
          <>
            <UserCard user={dataUser} />
            <Gap height={25} />
            <Select label="Jenis Kamar" option={dataJenisKamar} onChange={handleChangeJenisKamar} />
            <Gap height={15} />
            <Input label="Tanggal Pesan" onChange={handleChangeTglPesan} />
            <Gap height={15} />
            <Select label="Jadwal Kamar" option={dataJadwalKamar} onChange={handleChangeJadwalKamar} />
            <Gap height={15} />
            <ButtonPrimary text="Daftar" onClick={handleDaftar} />
            <Gap height={50} />
          </>
        )}
      </div>
    </Layout>
  );
}
