import {IonItem,IonLabel, IonCard, IonCardHeader, IonCardTitle } from "@ionic/react"


export const Subject = () => {
    return (
        <IonCard>
            <IonItem routerLink="/questions">
                <IonLabel >
                    <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                    </IonCardHeader>
                </IonLabel>
            </IonItem>

            
        </IonCard>
    )
}