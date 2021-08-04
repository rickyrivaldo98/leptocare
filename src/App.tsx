import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
interface Data {
  pertanyaan1: string
}

const App: React.FC = () => {
  const [formData, setForm] = useState<Data>({pertanyaan1:""})
  console.log(formData.pertanyaan1)
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/pertanyaan11">
            <Pertanyaan11/>
          </Route>
          <Route exact path="/pertanyaan10">
            <Pertanyaan10/>
          </Route>
          <Route exact path="/pertanyaan9">
            <Pertanyaan9/>
          </Route>
          <Route exact path="/pertanyaan8">
            <Pertanyaan8/>
          </Route>
          <Route exact path="/pertanyaan7">
            <Pertanyaan7/>
          </Route>
          <Route exact path="/pertanyaan6">
            <Pertanyaan6/>
          </Route>
          <Route exact path="/pertanyaan5">
            <Pertanyaan5/>
          </Route>
          <Route exact path="/pertanyaan4">
            <Pertanyaan4/>
          </Route>
          <Route exact path="/pertanyaan3">
            <Pertanyaan3/>
          </Route>
          <Route exact path="/pertanyaan2">
            <Pertanyaan2/>
          </Route>
          <Route exact path="/pertanyaan1">
            <Pertanyaan1 pertanyaan1={formData.pertanyaan1} setForm={setForm}/>
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
