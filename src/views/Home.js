import React from 'react';
import Layout from './../common/Layout';
import Head from './../common/Head';
import InfoSection from './../components/InfoSection';

const Home = () => {
    return ( 
        <>
            <Layout>
                <Head title="Aprende idiomas usando el habla" />
                <h1>Hola</h1>
                <InfoSection />
            </Layout>
        </>
     );
};
 
export default Home;