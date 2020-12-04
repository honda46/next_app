import React from 'react';
import { useQRCode } from 'react-hook-qrcode';
import { useState } from 'react';
import firebase from "firebase";
import "firebase/storage";
import QRCode from "qrcode.react";

const Sample = () => {
  let Result = "a";

  async function getFireData(){
    const db = firebase.firestore();
    const doc = await db.collection('users').doc('001').get();
    Result = JSON.stringify(doc.data());
  }

  return (
    <div className = "Sample">
      <QRCode value= {Result} />
    </div>
  );
}
export default Sample;

// const db = firebase.firestore();
// db.collection('users').doc('001').get().then((doc) =>{
// Result = JSON.stringify(doc.data());
//   });

// const handClickFetchButton = async () => {
//   const db = firebase.firestore();
//   const doc = await db.collection('users').doc('001').get();
//   Result = JSON.stringify(doc.data());
//   console.log(Result);
// };

// async function Sample(){
//   let Result = "aaa";
//   const db = firebase.firestore();
//   const doc = await db.collection('users').doc('001').get();
//   Result = JSON.stringify(doc.data());
