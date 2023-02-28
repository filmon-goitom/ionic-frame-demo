import {IonItem,IonLabel, IonCard, IonCardHeader, IonCardSubtitle } from "@ionic/react"


export const ListOfQuestion = () => {
    return (
        <IonCard>
            <IonItem routerLink="/questions">
            <IonLabel >
                <IonCardHeader>
                    <IonCardSubtitle>Lorem ipsum dolor sit amet consectetur.</IonCardSubtitle>
                </IonCardHeader>
            </IonLabel>

                
            </IonItem>

            
        </IonCard>
    )
}