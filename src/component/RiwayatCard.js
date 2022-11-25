import "./RiwayatCard.css"
import { Link } from "react-router-dom";

export default function RiwayatCard({riwayat}){
   return ( <div className="riwayatCard">
        <table border="0">
             <tr>
                <td>Tanggal Pesan</td>
                <td>:</td>
                <td>{riwayat.tglPesan}</td>
            </tr>
            <tr>
                <td>Jenis Kamar</td>
                <td>:</td>
                <td>{riwayat.jenisKamar}</td>
            </tr>
            <tr>
                <td>Jadwal Kamar</td>
                <td>:</td>
                <td>{riwayat.jadwalKamar}</td>
            </tr>
        </table>
        <Link className="buttonRiwayatCard" to={'/finish/'+riwayat.id}>Lihat Bukti</Link>
    </div>)
}