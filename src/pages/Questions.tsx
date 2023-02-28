import {IonHeader,IonPage, IonTitle, IonToolbar } from "@ionic/react"
import Footer from '../components/Footer';
import {Results} from '../components/Results';
import { ListOfQuestion } from "../components/ListOfQuestion";

export const Questions = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>css</IonTitle>          
                </IonToolbar>
            </IonHeader>
            <ListOfQuestion/>
            <ListOfQuestion/>
            <ListOfQuestion/>
            <ListOfQuestion/>
            <ListOfQuestion/>
            <ListOfQuestion/>
            <Results/>
            <Footer/>
        </IonPage>
        
        
    )
}