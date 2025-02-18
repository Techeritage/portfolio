// Example API URLs
const userAPI = "https://jsonplaceholder.typicode.com/users/1"; // Succeeds
const commentsAPI = "https://jsonplaceholder.typicode.com/invalid-endpoint"; // Fails (404)

// Function to fetch data using Promise.all
async function fetchDataWithPromiseAll() {
  try {
    // Fetch user and comments simultaneously
    const [user, comments] = await Promise.all([
      fetch(userAPI).then((res) => res.json()), // Resolves successfully
      fetch(commentsAPI).then((res) => res.json()), // Will throw an error
    ]);

    console.log("User:", user);
    console.log("Comments:", comments); // Not executed if commentsAPI fails
  } catch (error) {
    console.error("Promise.all Error:", error);
    // Stops at the first failed promise (commentsAPI in this case)
  }
}