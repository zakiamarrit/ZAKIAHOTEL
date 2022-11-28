import { useNavigate } from 'react-router-dom';
import Layout from '../component/Layout';
import Input from '../component/Input';
import ButtonPrimary from '../component/ButtonPrimary';
import './Start.css';
import Gap from '../component/Gap';
import { useState } from 'react';
import axios from 'axios';

export default function Start() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleLogin = async () => {
    try {
      const response = await axios.get('https://api-zakiahotel.herokuapp.com/users', {
        //ngambil, filter
        params: {
          username: username,
          password: password,
        },
      });
      if (response.status === 200) {
        navigate('/pendaftaran/' + response.data[0].id_user);
      } else {
        console.log('username atau password salah');
      }
    } catch (err) {
      console.log('Terjadi kesalahan pada server');
    }
  };

  return (
    <Layout>
      <div className="contentStart">
        <img src="/images/zakia hotel.png" className="contentStartImg" alt="rocket"></img>
        <Input label="Username" placeholder="Masukkan username kamu" onChange={handleChangeUsername} />
        <Gap height={15} />
        <Input label="Password" placeholder="Password jangan lupa yaa" onChange={handleChangePassword} />
        <Gap height={30} />
        <ButtonPrimary text="Cek" onClick={handleLogin} />
      </div>
    </Layout>
  );
}
