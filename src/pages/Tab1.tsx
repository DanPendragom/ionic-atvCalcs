import React, { Component } from 'react';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonChip,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton
} from '@ionic/react';

import { book, build, colorFill, grid } from 'ionicons/icons';

import Male from '../../src/assets/male.png';

import './Tab1.css';

export default class Tab1 extends Component {
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

