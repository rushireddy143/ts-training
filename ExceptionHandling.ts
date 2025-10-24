async function fetchGET(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Unable to Fetch Data, Please check 
                URL or Network connectivity!!`
            );
        }
        const data = await response.json();
        return data.results[0];
    }
    catch (error: any) {
        console.error("An Error Occured: ", error.message);
    }
    finally {
        console.log("This code is from finally block of fetchGET function and it will run always.");
    }
}

async function fetchData() {
    const returnedData = await fetchGET('https://randomuser.me/api');
    console.log(returnedData);
}

fetchData();
