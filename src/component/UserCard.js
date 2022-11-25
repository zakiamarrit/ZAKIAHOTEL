import "./UserCard.css"
import { Link } from "react-router-dom";

export default function UserCard({user}){
   return ( <div className="userCard">
        <table border="0">
             <tr>
                <td>Username</td>
                <td>:</td>
                <td>{user.username}</td>
            </tr>
            <tr>
                <td>Nama User</td>
                <td>:</td>
                <td>{user.nama_user}</td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td>{user.jenis_kelamin_user}</td>
            </tr>
        </table>
        <Link className="buttonUserCard" to={'/riwayat_pendaftaran/'+user.id_user}>Riwayat Pendaftaran</Link>
    </div>)
}