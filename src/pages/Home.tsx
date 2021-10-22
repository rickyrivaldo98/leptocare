import { IonButton, IonPage } from '@ionic/react';
import './Home.css';
import LeptocareLogo from '../assets/img/leptocare-logo.svg'
import Doctor from '../assets/img/Doctor.svg'
import { useEffect } from 'react';

const Home: React.FC = () => {
  return (
    <IonPage className="relative">
      <div className="bg-white h-full text-center">
        <div className="relative h-3/4">
          <div className="text-black pt-2">Made With Ricky Rivaldo</div>
          <img className="absolute iphone5:top-12 iphone5:w-2/3 top-14 left-1/2 transform -translate-x-1/2" src={LeptocareLogo} alt="" />
          <img className="absolute galaxy5:w-3/4 iphone5:w-4/5 bottom-0 left-1/2 transform -translate-x-1/2" src={Doctor} alt="" />
        </div>
        <div className="bg-blue-400 w-full h-1/4 absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="pt-7 pb-4 text-black galaxy5:pb-2 iphone5:text-xs iphone5:pt-3 iphone5:pb-3">
            <b>Deteksi</b> Leptospirosis Anda <b>Sejak Dini</b> <br /> Hanya Dengan <b>Menjawab Pertanyaan</b>
          </div>
          <IonButton routerLink="/pertanyaan1" className="mb-2" size="large"><div className="px-24 text-3xl">Mulai</div></IonButton>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
