import React, { Component } from 'react';

import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton
} from '@ionic/react';

import Female from '../../src/assets/female.png';

import './Tab1.css';

export default class Tab2 extends Component {
  
  calculaMulher(altura: number) {
    let res = (altura - 100) * 0.85 ;
    document.querySelectorAll('input')[1].value = res.toString();
  }

  pegaAlturaFemale() {
    let altura = parseInt(document.querySelectorAll('input')[0].value);
    this.calculaMulher(altura);
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle><h1>Peso p/ Mulher</h1></IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <IonGrid>
            <IonRow>
              <IonCol className="centerAvatar" size="12">
                <IonAvatar>
                  <img className="imgAvatar" src={Female} />
                </IonAvatar>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="floating">Digite sua altura(cm)</IonLabel>
                  <IonInput id="valor1" value="" type="number"/>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonButton onClick={() => this.pegaAlturaFemale()} expand="block">Calcular</IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput placeholder="resultado" readonly type="number"/>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
}

