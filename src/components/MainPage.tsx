import { useEffect, useState } from 'react';
import Header from './Header';
import { fetchSkips } from '../api';
import Content from './Content';
import { Skip } from '../types/SkipType';
import Footer from './Footer';

const MainPage = () => {
    const [skips, setSkips] = useState<Skip[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

    useEffect(() => {
        getSkips();
    }, [])

    const getSkips = async () => {
        try {
            setLoading(true);
            const response = await fetchSkips();
            setSkips(response)
        } catch (err: any) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="main-page-container flex-grow">
                    <Content skips={skips} loading={loading} error={error} setSelectedSkip={setSelectedSkip} selectedSkip={selectedSkip} />
                </div>
            </div>
            <div className={`${!selectedSkip ? 'display-hidden' : ''}`}>
                <Footer selectedSkip={selectedSkip} />
            </div>
        </>
    );
};

export default MainPage;
