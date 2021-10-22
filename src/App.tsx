import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import axios from "axios";


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Pertanyaan1 from './pages/Pertanyaan1';
import Pertanyaan2 from './pages/Pertanyaan2';
import Pertanyaan3 from './pages/Pertanyaan3';
import Pertanyaan4 from './pages/Pertanyaan4';
import Pertanyaan5 from './pages/Pertanyaan5';
import Pertanyaan6 from './pages/Pertanyaan6';
import Pertanyaan7 from './pages/Pertanyaan7';
import Pertanyaan8 from './pages/Pertanyaan8';
import Pertanyaan9 from './pages/Pertanyaan9';
import Pertanyaan10 from './pages/Pertanyaan10';
import Pertanyaan11 from './pages/Pertanyaan11';
import { useEffect, useState } from 'react';
import Hasil from './pages/Hasil';
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


const App: React.FC = () => {
  const [hasil, setHasil] = useState()

  const [formData, setForm] = useState<Data>(
    {
      pertanyaan1: "",
      pertanyaan2: null,
      pertanyaan3: null,
      pertanyaan4: null,
      pertanyaan5: null,
      pertanyaan6: null,
      pertanyaan7: null,
      pertanyaan8: null,
      pertanyaan9: null,
      pertanyaan10: null,
      pertanyaan11: null,
    }
  )

  let tambah = (e: any) => {
    e.preventDefault();
    let hasil = {
      opsi1: formData.pertanyaan2,
      opsi2: formData.pertanyaan3,
      opsi3: formData.pertanyaan4,
      opsi4: formData.pertanyaan5,
      opsi5: formData.pertanyaan6,
      opsi6: formData.pertanyaan7,
      opsi7: formData.pertanyaan8,
      opsi8: formData.pertanyaan9,
      opsi9: formData.pertanyaan10,
      opsi10: formData.pertanyaan11,
    }
    axios
      .post(`http://localhost:5000/rf`, hasil)
      .then((res) => {
        setHasil(res.data)
      })
  }

  console.log(formData)
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/hasil">
            <Hasil formData={formData} hasil={hasil} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan11">
            <Pertanyaan11 tambah={tambah} formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan10">
            <Pertanyaan10 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan9">
            <Pertanyaan9 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan8">
            <Pertanyaan8 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan7">
            <Pertanyaan7 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan6">
            <Pertanyaan6 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan5">
            <Pertanyaan5 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan4">
            <Pertanyaan4 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan3">
            <Pertanyaan3 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan2">
            <Pertanyaan2 formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/pertanyaan1">
            <Pertanyaan1 pertanyaan1={formData.pertanyaan1} formData={formData} setForm={setForm} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
