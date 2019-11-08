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


import Male from '../../src/assets/male.png';

import './Tab1.css';

export default class Tab1 extends Component {

  calcula(altura: number) {
    let res = (altura - 100) * 0.9 ;
    
    document.querySelectorAll('input')[1].value = res.toString();
  }

  pegaValores() {
    let altura = parseInt(document.querySelectorAll('input')[0].value);
    this.calcula(altura);
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Peso p/ Homem</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <IonGrid>
            <IonRow>
              <IonCol className="centerAvatar" size="12">
                <IonAvatar>
                  <img className="imgAvatar" src={Male} />
                </IonAvatar>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="floating">Digite sua altura(cm)</IonLabel>
                  <IonInput id="valor1" value="" type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonButton onClick={() => this.pegaValores()} expand="block">Calcular</IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput placeholder="resultado" readonly type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
}

