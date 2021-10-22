import { IonButton, IonPage } from "@ionic/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import Safety from "../assets/img/Safety.svg"

interface Data {
    pertanyaan1: string,
    pertanyaan2: number | null,
    pertanyaan3: number | null,
    pertanyaan4: number | null,
    pertanyaan5: number | null,
    pertanyaan6: number | null,
    pertanyaan7: number | null,
    pertanyaan8: number | null,
    pertanyaan9: number | null,
    pertanyaan10: number | null,
    pertanyaan11: number | null,
}
interface props {
    setForm: React.Dispatch<React.SetStateAction<Data>>
    formData: Data
}
const Pertanyaan2: React.FC<props> = ({ setForm, formData }) => {

    const [active, setActive] = useState(0)
    const [nilai, setNilai] = useState<number | null>(null)

    function handleChange(e: any) {
        console.log(formData)
    }

    // console.log(nilai)

    return (
        <>
            <IonPage className="relative">
                <div className="bg-blue-400 h-1/3 text-center px-4">
                    <div className="flex pt-5">
                        <Link className="w-1/3 text-black text-xs text-left font-bold" to="/pertanyaan1">
                            <div>Kembali</div>
                        </Link>
                        <div className="w-1/3 text-black text-xs"><b>2</b> dari 11</div>
                        <div className="w-1/3"></div>
                    </div>
                    <div className="flex pt-12">
                        <div className="w-4/6">
                            <div className="text-left text-xl font-bold">Apakah Anda Merasakan Sakit Kepala Mendadak??</div>
                            <div className="text-left text-xs font-light pt-3">Silahkan isi pertanyaan dengan memilih <br /> Salah Satu Jawaban</div>
                        </div>
                        <div className="w-2/6">
                            <img style={{ maxWidth: "200%" }} src={Safety} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-white h-2/3 px-4">
                    <div className="pt-5 space-y-5">
                        <div onClick={() => { setActive(1); setNilai(1); setForm({ ...formData, pertanyaan2: 1 }) }} className={`relative rounded-md p-4 flex justify-between border ${active === 1 ? "border-green-700 bg-green-200" : "border-gray-300"} `}>
                            <label className="mr-3 cursor-pointer">
                                <span className="block text-base font-medium">Ya</span>
                            </label>
                            <div>
                                <input type="radio" value="1" onChange={handleChange} checked={active === 1} name="pertanyaan2" className="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300" />
                            </div>
                        </div>
                        <div onClick={() => { setActive(2); setNilai(2); setForm({ ...formData, pertanyaan2: 0 }) }} className={`relative rounded-md p-4 flex justify-between border ${active === 2 ? "border-red-700 bg-red-200" : "border-gray-300"} `}>
                            <label className="mr-3 cursor-pointer">
                                <span className="block text-base font-medium">Tidak</span>
                            </label>
                            <div>
                                <input type="radio" value="2" onChange={handleChange} checked={active === 2} name="pertanyaan2" className="focus:ring-red-500 h-4 w-4 text-red-600 cursor-pointer border-gray-300" />
                            </div>
                        </div>
                    </div>
                    <IonButton routerLink="/pertanyaan3" className="mb-2 absolute bottom-10 left-1/2 transform -translate-x-1/2" size="large"><div className="px-16 text-2xl">Selanjutnya</div></IonButton>
                </div>
            </IonPage>
        </>
    );
}

export default Pertanyaan2;