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

import Saude from '../../src/assets/saude.png';

import './Tab1.css';

export default class Tab3 extends Component {
  
  calcula2(altura: number, peso: number) {
    console.log(altura)
    let res = peso/(altura * altura);
    res = parseFloat(res.toFixed(2));
    document.querySelectorAll('input')[2].value = res.toString();
  }

  pegaAlturaPeso() {
    let peso = parseFloat(document.querySelectorAll('input')[0].value);
    let altura = parseFloat(document.querySelectorAll('input')[1].value);
    this.calcula2(altura, peso);
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Cálculo de IMC</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <IonGrid>
            <IonRow>
              <IonCol className="centerAvatar" size="12">
                <IonAvatar>
                  <img className="imgAvatar" src={Saude} />
                </IonAvatar>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="floating">Digite seu peso(kg)</IonLabel>
                  <IonInput id="valor1" value="" type="number"/>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="floating">Digite sua altura(m)</IonLabel>
                  <IonInput id="valor1" value="" type="number"/>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonButton onClick={() => this.pegaAlturaPeso()} expand="block">Calcular</IonButton>
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

