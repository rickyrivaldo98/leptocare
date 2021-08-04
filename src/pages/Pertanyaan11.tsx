import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import Mask from "../assets/img/Mask.svg"

const Pertanyaan11: React.FC = () => {


const [active, setActive] = useState(0)
const [nilai, setNilai] = useState(0)

function handleChange(e:any) {
setNilai(e.target.value)
}

console.log(nilai)

    return ( 
        <>
        <IonPage className="relative">
                <div className="bg-green-400 h-1/3 text-center px-4">
                    <div className="flex pt-5">
                        <Link className="w-1/3 text-black text-xs text-left font-bold" to="/pertanyaan10">
                            <div>Kembali</div>
                        </Link>
                        <div className="w-1/3 text-black text-xs"><b>11</b> dari 11</div>
                        <div className="w-1/3"></div>
                    </div>
                    <div className="flex pt-12">
                        <div className="w-4/6">
                            <div className="text-left text-xl font-bold">Bagaimana Hasil Lab Anda?</div>
                            <div className="text-left text-xs font-light pt-3">Silahkan isi pertanyaan dengan memilih <br/> Salah Satu Jawaban</div>
                        </div>
                        <div className="w-2/6">
                            <img style={{maxWidth:"200%"}} src={Mask} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-white h-2/3 px-4">
                    <div className="pt-5 space-y-5">
                        <div onClick={() => {setActive(1); setNilai(1)}} className={`relative rounded-md p-4 flex justify-between border ${active===1 ? "border-green-700 bg-green-200" : "border-gray-300"} `}>
                            <label className="mr-3 cursor-pointer">
                                <span className="block text-base font-medium">Ya</span>
                            </label>
                            <div>
                                <input type="radio" value="1" onChange={handleChange} checked={active===1} name="pertanyaan11" className="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300"/>
                            </div>
                        </div>
                        <div onClick={() => {setActive(2); setNilai(2)}} className={`relative rounded-md p-4 flex justify-between border ${active===2 ? "border-red-700 bg-red-200" : "border-gray-300"} `}>
                            <label className="mr-3 cursor-pointer">
                                <span className="block text-base font-medium">Tidak</span>
                            </label>
                            <div>
                                <input type="radio" value="2" onChange={handleChange} checked={active===2} name="pertanyaan11" className="focus:ring-red-500 h-4 w-4 text-red-600 cursor-pointer border-gray-300"/>
                            </div>
                        </div>
                    </div>
                    <IonButton className="mb-2 absolute bottom-10 left-1/2 transform -translate-x-1/2" size="large"><div className="px-16 text-2xl">Selanjutnya</div></IonButton>
                </div>
        </IonPage>
        </>
     );
}
 
export default Pertanyaan11;