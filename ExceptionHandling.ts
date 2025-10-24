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
		// Multiple error handling based on error type
		if (error instanceof TypeError) {
			console.error("Type Error Caught: ", error.message);
			console.log("This is a TypeError - likely a network or type-related issue");
		}
		else if (error instanceof SyntaxError) {
			console.error("Syntax Error Caught: ", error.message);
			console.log("This is a SyntaxError - likely a JSON parsing issue");
		}
		else if (error instanceof Error) {
			console.error("Generic Error Caught: ", error.message);
			console.log("This is a generic error - check the response or URL");
		}
		else {
			console.error("Unknown Error Caught: ", error);
			console.log("This is an unknown error type");
		}
	}
	finally {
		console.log(
"This code is from finally block of fetchGET function and it will run always.");
	}
}

async function fetchData() {
	const returnedData =
		await fetchGET('https://randomuser.me/api');
	console.log(returnedData);
}

fetchData();