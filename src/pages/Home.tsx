import {IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/Footer';
import {Subject} from '../components/Subject';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>H Y F</IonTitle>          
        </IonToolbar>
      </IonHeader>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Footer/>
    </IonPage>
  );
};

export default Home;
