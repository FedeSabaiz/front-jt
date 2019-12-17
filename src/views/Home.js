import React from 'react';
import Layout from './../common/Layout';
import Head from './../common/Head';
import InfoSection from './../components/InfoSection';
import TypeText from './../common/TypeText';

const Home = () => {
    return ( 
        <>
            <Layout>
                <Head title="Aprende idiomas usando el habla" />
                <TypeText />
                <InfoSection />
            </Layout>
        </>
     );
};
 
export default Home;