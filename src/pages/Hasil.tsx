import { IonButton, IonPage } from '@ionic/react';
import './Home.css';
import Pusing from '../assets/img/pusing.svg'

// import LeptocareLogo from '../assets/img/leptocare-logo.svg'
// import Doctor from '../assets/img/Doctor.svg'
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
    hasil: number | null | undefined
    formData: Data
}
const Hasil: React.FC<props> = ({ hasil, formData, setForm }) => {
    return (
        <IonPage className="relative">
            <div className="bg-pink-400 h-full text-center">
                <div className="relative h-3/4">
                    <div className="text-black pt-2">Made With Ricky Rivaldo</div>
                    <div className="flex justify-center mt-10 ">
                        <div className="bg-white w-5/6 rounded-lg h-96">
                            <div className="text-left text-2xl font-bold pl-5 pt-10">Halo {formData.pertanyaan1}</div>
                            <div className="text-left text-lg pl-5">Menurut Proses Kami, Anda</div>
                            <div className="flex pt-7 pb-4 pl-3 ">
                                <img src={Pusing} className="w-72" alt="" />
                                <div className="text-center flex flex-wrap content-center font-semibold galaxy5:pb-2 iphone5:text-xs iphone5:pt-3 iphone5:pb-3">
                                    {hasil == 1 ?
                                        <div className="text-base">Tidak Terjangkit Penyakit Leptospirosis</div>
                                        : hasil == 2 ?
                                            <div className="text-base">Probable Terjangkit Penyakit Leptospirosis</div>
                                            : hasil == 3 ?
                                                <div className="text-base">Terjangkit Penyakit Leptospirosis</div>
                                                : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="bg-white w-5/6 rounded-lg h-52">
                            <div className="text-left text-2xl font-bold pl-5 pt-2">Saran Dari Kami</div>
                            <div className="text-left text-base px-5 pt-2">Jika sudah Probable Terjangkit, saran kami anda segera memeriksakan diri ke rumah sakit terdekat. <br />
                                Lakukan Prokes kesehatan yang berlaku, agar lingkungan anda tidak tertular.</div>
                        </div>
                    </div>
                    <IonButton onClick={() => { window.location.href = "/home" }} className="mb-2 mt-6" size="large"><div className="px-8 text-3xl">Kembali Ke Awal</div></IonButton>
                    {/* <img className="absolute iphone5:top-12 iphone5:w-2/3 top-14 left-1/2 transform -translate-x-1/2" src={LeptocareLogo} alt="" /> */}
                    {/* <img className="absolute galaxy5:w-3/4 iphone5:w-4/5 bottom-0 left-1/2 transform -translate-x-1/2" src={Doctor} alt="" /> */}
                </div>
                {/* <div className="w-full h-1/4 absolute bottom-0 left-1/2 transform -translate-x-1/2">


                </div> */}
            </div>
        </IonPage>
    );
};

export default Hasil;
