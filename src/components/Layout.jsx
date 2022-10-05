import Footer from "./Footer";
import Nav from "./Nav";
import Classes from "./styles/Layout.module.css";
export default function Layout({children}){
    return(
        <>
            <Nav/>
            <main className={ Classes.main}>
                <div className={Classes.container}>
                {children}
                </div>
            </main>
            <Footer/>
        </>
    );
}