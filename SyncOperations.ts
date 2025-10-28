// ============================================
// 1. BASIC PROMISE EXAMPLE
// ============================================
console.log("=== 1. BASIC PROMISE ===");

const basicPromise = new Promise<string>((resolve, reject) => {
    console.log("Promise started");
    setTimeout(() => {
        resolve("Promise resolved successfully!");
    }, 1000);
});

basicPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log("Error:", error);
});

// ============================================
// 2. PROMISE WITH REJECT
// ============================================
console.log("\n=== 2. PROMISE WITH REJECTION ===");

const promiseWithReject = new Promise<string>((resolve, reject) => {
    console.log("Promise with reject started");
    setTimeout(() => {
        reject("Promise rejected!");
    }, 1500);
});

promiseWithReject.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log("Caught error:", error);
});

// ============================================
// 3. PROMISE CHAINING
// ============================================
console.log("\n=== 3. PROMISE CHAINING ===");

const chainPromise = new Promise<number>((resolve) => {
    setTimeout(() => resolve(10), 500);
});

chainPromise
    .then((num) => {
        console.log("First then - received:", num);
        return num * 2;
    })
    .then((result) => {
        console.log("Second then - received:", result);
        return result + 5;
    })
    .then((finalResult) => {
        console.log("Final result:", finalResult);
    });

// ============================================
// 4. ASYNC/AWAIT - BASIC EXAMPLE
// ============================================
console.log("\n=== 4. ASYNC/AWAIT BASIC ===");

async function basicAsync(): Promise<void> {
    console.log("Async function started");
    
    // Create a promise
    const result = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Async completed!"), 800);
    });
    
    console.log(result);
    console.log("Async function ended");
}

// Call the async function
basicAsync();

// ============================================
// 5. ASYNC/AWAIT WITH ERROR HANDLING
// ============================================
console.log("\n=== 5. ASYNC/AWAIT WITH ERROR HANDLING ===");

async function asyncWithError(): Promise<void> {
    try {
        console.log("Async with error started");
        
        const result = await new Promise<string>((resolve, reject) => {
            setTimeout(() => reject("Error in promise!"), 600);
        });
        
        console.log(result);
    } catch (error) {
        console.log("Caught error in catch block:", error);
    } finally {
        console.log("Finally block executed");
    }
}

asyncWithError();

// ============================================
// 6. ASYNC FUNCTION RETURNING VALUE
// ============================================
console.log("\n=== 6. ASYNC FUNCTION RETURNING VALUE ===");

async function asyncReturnValue(): Promise<number> {
    console.log("Function that returns value started");
    
    const num = await new Promise<number>((resolve) => {
        setTimeout(() => resolve(42), 500);
    });
    
    console.log("Received:", num);
    return num * 2;
}

asyncReturnValue().then((result) => {
    console.log("Final returned value:", result);
});

// ============================================
// 7. MULTIPLE AWAITS
// ============================================
console.log("\n=== 7. MULTIPLE AWAITS ===");

async function multipleAwaits(): Promise<void> {
    console.log("Multiple awaits started");
    
    const val1 = await new Promise<number>((resolve) => {
        setTimeout(() => resolve(10), 400);
    });
    console.log("First value:", val1);
    
    const val2 = await new Promise<number>((resolve) => {
        setTimeout(() => resolve(20), 400);
    });
    console.log("Second value:", val2);
    
    console.log("Total:", val1 + val2);
}

multipleAwaits();

// ============================================
// 8. PROMISE.ALL - PARALLEL EXECUTION
// ============================================
console.log("\n=== 8. PROMISE.ALL (Parallel) ===");

const promise1 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Promise 1"), 800);
});

const promise2 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Promise 2"), 600);
});

const promise3 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Promise 3"), 1000);
});

Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log("All promises resolved:", results);
});

// ============================================
// 9. PROMISE.RACE
// ============================================
console.log("\n=== 9. PROMISE.RACE ===");

const racePromise1 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("First to complete"), 300);
});

const racePromise2 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Second to complete"), 1000);
});

Promise.race([racePromise1, racePromise2]).then((result) => {
    console.log("Race winner:", result);
});

// ============================================
// 10. SIMULATING API CALL
// ============================================
console.log("\n=== 10. SIMULATING API CALL ===");

function fetchUserData(userId: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: `User ${userId}` });
            } else {
                reject("Invalid user ID");
            }
        }, 700);
    });
}

async function getUserInfo(id: number): Promise<void> {
    try {
        console.log(`Fetching user ${id}...`);
        const user = await fetchUserData(id);
        console.log("User found:", user);
    } catch (error) {
        console.log("Error fetching user:", error);
    }
}

getUserInfo(1);

// ============================================
// 11. REAL API CALL - FETCH FROM JSONPlaceholder
// ============================================
console.log("\n=== 11. REAL API CALL ===");

async function fetchPosts(): Promise<void> {
    try {
        console.log("Fetching posts from API...");
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const post = await response.json();
        console.log("Post fetched:", {
            id: post.id,
            title: post.title,
            body: post.body.substring(0, 50) + "..."
        });
    } catch (error) {
        console.log("Error fetching posts:", error);
    }
}

fetchPosts();

// ============================================
// 12. MULTIPLE API CALLS - SEQUENTIAL
// ============================================
console.log("\n=== 12. MULTIPLE API CALLS (Sequential) ===");

async function fetchMultiplePostsSequential(): Promise<void> {
    try {
        console.log("Fetching posts sequentially...");
        
        for (let i = 1; i <= 3; i++) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
            const post = await response.json();
            console.log(`Post ${i}: ${post.title.substring(0, 30)}...`);
        }
        
        console.log("All posts fetched!");
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchMultiplePostsSequential();

// ============================================
// 13. MULTIPLE API CALLS - PARALLEL (Promise.all)
// ============================================
console.log("\n=== 13. MULTIPLE API CALLS (Parallel with Promise.all) ===");

async function fetchMultiplePostsParallel(): Promise<void> {
    try {
        console.log("Fetching posts in parallel...");
        
        const requests = [
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/2').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/3').then(r => r.json())
        ];
        
        const posts = await Promise.all(requests);
        
        posts.forEach((post, index) => {
            console.log(`Post ${index + 1}: ${post.title.substring(0, 30)}...`);
        });
        
        console.log("All posts fetched in parallel!");
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchMultiplePostsParallel();

// ============================================
// 14. FETCH USER DATA AND THEIR POSTS
// ============================================
console.log("\n=== 14. FETCH USER AND THEIR POSTS ===");

async function fetchUserWithPosts(userId: number): Promise<void> {
    try {
        console.log(`Fetching user ${userId} with their posts...`);
        
        // Fetch user
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userResponse.json();
        console.log(`User: ${user.name} (${user.email})`);
        
        // Fetch user's posts
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();
        console.log(`Posts count: ${posts.length}`);
        
        if (posts.length > 0) {
            console.log(`First post: ${posts[0].title.substring(0, 40)}...`);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchUserWithPosts(1);

// ============================================
// 15. CUSTOM FETCH WITH TIMEOUT
// ============================================
console.log("\n=== 15. FETCH WITH TIMEOUT ===");

function fetchWithTimeout(url: string, timeout: number = 5000): Promise<Response> {
    return Promise.race([
        fetch(url),
        new Promise<Response>((_, reject) =>
            setTimeout(() => reject(new Error('Request timeout')), timeout)
        )
    ]);
}

async function fetchWithTimeoutExample(): Promise<void> {
    try {
        console.log("Fetching with timeout (5 seconds)...");
        const response = await fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 5000);
        const data = await response.json();
        console.log(`Fetched successfully: ${data.title.substring(0, 40)}...`);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchWithTimeoutExample();

// ============================================
// 16. ERROR HANDLING IN API CALLS
// ============================================
console.log("\n=== 16. ERROR HANDLING IN API ===");

async function fetchWithErrorHandling(postId: number): Promise<void> {
    try {
        console.log(`Fetching post ${postId}...`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Post received:", data.id);
        
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Network error - check your internet connection");
        } else if (error instanceof Error) {
            console.log("Error details:", error.message);
        } else {
            console.log("Unknown error occurred");
        }
    }
}

fetchWithErrorHandling(999);

// ============================================
// 17. RETRYING FAILED REQUESTS
// ============================================
console.log("\n=== 17. RETRY MECHANISM ===");

async function fetchWithRetry(url: string, retries: number = 3): Promise<any> {
    for (let i = 0; i < retries; i++) {
        try {
            console.log(`Attempt ${i + 1} of ${retries}`);
            const response = await fetch(url);
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.log(`Attempt ${i + 1} failed`, error);
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
        }
    }
}

async function retryExample(): Promise<void> {
    try {
        const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/posts/2', 2);
        console.log("Success:", data.id);
    } catch (error) {
        console.log("Failed after retries:", error);
    }
}

retryExample();
