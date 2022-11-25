import "./Layout.css"

export default function Layout({children}){
    return <div className="main">
        <div className="header">
                <h1 className="header-brand">ZAKIATEL</h1>
        </div>   
        {children}
    </div>
}