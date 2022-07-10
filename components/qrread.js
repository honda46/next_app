import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/storage";
import QRCode from "qrcode.react";

const Sample = () => {
  const [value, setValue] = useState("");

  async function getFireData() {
    const db = firebase.firestore();
    const doc = await db.collection("users").doc("001").get();
    const result = JSON.stringify(doc.data());
    setValue(result);
  }

  useEffect(() => {
    getFireData();
  }, []);

  return (
    <div className="Sample">
      {value ? <QRCode value={value} /> : "...loading"}
    </div>
  );
};

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
