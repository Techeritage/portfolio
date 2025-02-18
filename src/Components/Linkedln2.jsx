// Example API URLs
const userAPI = "https://jsonplaceholder.typicode.com/users/1"; //Succeeds
const commentsAPI = "https://jsonplaceholder.typicode.com/invalid-endpoint"; // Fails (404)

// Function to fetch data using Promise.allSettled
async function fetchDataWithPromiseAllSettled() {
  // Fetch user and comments simultaneously
  const results = await Promise.allSettled([
    fetch(userAPI).then((res) => res.json()), // Resolves successfully
    fetch(commentsAPI).then((res) => res.json()), // Returns rejection
  ]);

  const userResult = results[0];
  const commentsResult = results[1];

  // Handle the user data response
  if (userResult.status === "fulfilled") {
    console.log("User Data:", userResult.value);
  } else {
    console.error("User Data Fetch Failed:", userResult.reason);
    // Optional: Handle user data failure here
  }

  // Handle the comments data response
  if (commentsResult.status === "fulfilled") {
    console.log("Comments Data:", commentsResult.value);
  } else {
    console.error("Comments Data Fetch Failed:", commentsResult.reason);
    // Optional: Handle comments data failure here
  }

  // Promise.allSettled allows partial success handling
  console.log("All promises have been settled (either resolved or rejected).");
}
