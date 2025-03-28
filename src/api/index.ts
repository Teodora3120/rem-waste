export const fetchSkips = async () => {
    const url = process.env.REACT_APP_REM_API_URL || "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        localStorage.setItem("backupSkips", JSON.stringify(data));

        return data;
    } catch (err) {
        console.error("Error fetching skips. Serving backup data.", err);

        const backupData = localStorage.getItem("backupSkips");
        if (backupData) return JSON.parse(backupData);

        throw new Error("No backup available.");
    }
};
