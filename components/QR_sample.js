import React, {Component} from 'react'
import firebase from "firebase";
import "firebase/storage";
import { useQRCode } from 'react-hook-qrcode';
import Link from 'next/link';
import QRCode from "qrcode.react";

class QR_sample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "a"
    }
  }

  async getFireData(){
    let Result = "Test";
    const db = firebase.firestore();
    const doc = await db.collection('users').doc('001').get();
    Result = JSON.stringify(doc.data(),undefined,1);
    console.log("Document data:",Result);//ここのResultにはちゃんと格納されている
    this.setState(state => ({
      data: Result,
    }));
    //return Result;
  }

  // getQr(){
  //   this.state.data = this.getFireData() + "aaa";
  //   console.log("Document data:",this.state.data);//dataの中身は[object Promise]ABCなのでResultがうまく反映されていない
  //   //aではないためstateの更新は出来ている？
  //   //コンソールの順番が getQr → getFireDataになっている
  // }


  render(){
     while(this.state.data == "a"){
       this.getFireData();
     }
    return (
      <div>
          <button>取得</button>
          <div>
            <QRCode value= {this.state.data} />
          </div>
          <Link href="/other">
            <a>Back to Home</a>
          </Link>
      </div>
    );
  }

}
export default QR_sample;

// getFireData(){
//   let Result = "Test";
//   const db = firebase.firestore();
//   db.collection('users').doc('001').get().then((doc) =>{
//     Result = JSON.stringify(doc.data());//←これだけがうまくいってない？というより非同期のため記録出来てない(コンソールは遅れても問題ない)
//     console.log(JSON.stringify(doc.data()));//←これも動作してる
//   });
//   this.state.data = Result;//this.state.dataはTestと表示されるためこれも動作している
//   console.log("Document data:",this.state.data);
// }
