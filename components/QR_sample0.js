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
      data:[]
    }
    this.getFireData();

  }

  getFireData(){
    let db = firebase.database();
    let ref = db.ref('BodyTemperature/1/');
    let self  = this;
    let Nday = 3;
    ref.orderByKey().limitToLast(3).on('value', (snapshot)=>{
        self.setState({
          data:snapshot.val()
        });
    });
    var scores = snapshot.val();
    var keys = Object.keys(scores);

    let Result = "test" + keys;
    return Result;
  }

  // getQRData(){
  //
  //   var scores = this.snapshot.val();
  //   var keys = Object.keys(scores);
  //
  //   let Result = "test" + keys;
  //   return Result;
  // }


  render(){
    return (
      <div>
          <h1>健康状態</h1>
          <div>
            <QRCode value= {this.getQRData()} />
          </div>
          <Link href="/other">
            <a>Back to Home</a>
          </Link>
      </div>
    );
  }


}
export default QR_sample;
