import "./BuktiCard.css"

export default function BuktiCard({data}){
   return ( <div className="buktiCard">
        <table border="0" width="100%">
            <tr>
                <td>{data.id}</td>
                <td rowSpan={5} className="qrCode"><img alt="qrCode" src={`https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=150x150&chl=${data.id}`}></img></td>
            </tr>
            <tr>
                <td>{data.nama_user}</td>
                <td></td>
            </tr>
            <tr>
                <td>{data.jenis_kamar}</td>
                <td></td>
            </tr>
            <tr>
                <td>{data.tglPesan}</td>
                <td></td>
            </tr>
            <tr>
                <td>{data.jadwalKamar}</td>
                <td></td>
            </tr>
        </table>
    </div>)
}