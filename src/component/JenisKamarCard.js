import "./JenisKamarCard.css"
import { Link } from "react-router-dom";

export default function JenisKamarCard({jenis}){
   return ( <div className="jenisKamarCard">
        <table border="0">
             <tr>
                <td>Nama Jenis Kamar</td>
                <td>:</td>
                <td>{jenis.nama}</td>
            </tr>
        </table>
        <Link className="buttonJenisKamarCard" to={'/detail_jenis_kamar/'+jenis.id}>Detail Jenis Kamar</Link>
    </div>)
}