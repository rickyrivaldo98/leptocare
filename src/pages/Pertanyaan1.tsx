import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react"
import { Link } from "react-router-dom";
import Mask from "../assets/img/Mask.svg"
const Pertanyaan1: React.FC = () => {
    return ( 
        <>
        <IonPage className="relative">
                <div className="bg-red-400 h-1/3 text-center px-4">
                    <div className="flex pt-5">
                        <Link className="w-1/3 text-black text-xs text-left font-bold" to="/home">
                            <div>Kembali</div>
                        </Link>
                        <div className="w-1/3 text-black text-xs"><b>1</b> dari 10</div>
                        <div className="w-1/3"></div>
                    </div>
                    <div className="flex pt-12">
                        <div className="w-4/6">
                            <div className="text-left text-4xl font-bold">Siapa Nama <br/>Anda?</div>
                            <div className="text-left text-xs font-light pt-3">Silahkan isi pertanyaan dengan <br/> mengetik nama anda </div>
                        </div>
                        <div className="w-2/6">
                            <img style={{maxWidth:"200%"}} src={Mask} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-white h-2/3 px-4">
                    <div className="pt-5">
                        <input type="text" placeholder="Tulis Nama Anda Disini" className="mt-1 py-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-base shadow-sm border-gray-300 rounded-md"/>
                    </div>
                    <IonButton className="mb-2 absolute bottom-10 left-1/2 transform -translate-x-1/2" size="large" routerLink="/pertanyaan2"><div className="px-16 text-2xl">Selanjutnya</div></IonButton>
                </div>
        </IonPage>
        </>
     );
}
 
export default Pertanyaan1;