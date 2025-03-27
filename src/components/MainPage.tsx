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
            <div className="container">
                <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                    <Header />
                </div>
                <Content skips={skips} loading={loading} error={error} setSelectedSkip={setSelectedSkip} />
            </div>
            {selectedSkip && (
                <div>
                    <Footer selectedSkip={selectedSkip} />
                </div>
            )}
        </>
    );
};

export default MainPage;
