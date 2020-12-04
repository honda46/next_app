import Link from 'next/link';
import Layout from '../components/Layout';
import QRread from '../components/read_QR';


export default () =>(
  <Layout header="Fire" title="Sample data.">
    <QRread />
  </Layout>
);
