//---Starter Data---//
const users = [
  { id: 101, name: " Ada ", scores: [10, 20, 30] },

  { id: 102, name: "", scores: [5, 0, 15] },

  { id: 103, name: null, scores: [7, 14] },

  { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },

  { id: 105, name: "Grace", scores: [] },
];

//---Assignment 1: Normalize Name---//
function normalizeName(value) {
  if (typeof value !== "string" || value.trim() === "") {
    return "Unknown";
  }

  return value.trim();
}

//console.log(normalizeName(users[0].name));

// --- Ternary Operator --- //
// return value == null || value.trim() === "" ? "unknown" : value.trim();
// Format:- condition ? valueIfTrue : valueIfFalse

//---Assignment 2: Average Score---//
function averageScore(scores) {
  if (!Array.isArray(scores)) {
    throw new Error("Scores must be an array");
  } else if (scores.length === 0) {
    return null;
  } else {
    let total = scores.reduce((sum, score) => {
      return sum + score;
    }, 0);
    let average = total / scores.length;
    average = Math.round(average * 100) / 100;
    return average;
  }
}

//console.log(averageScore(users[0].scores));

//---Assignment 3: Build User Summary---//
function buildUserSummary(user) {
  if (user == null) {
    throw new Error("User must be an object");
  } else {
    return {
      id: user.id,
      name: normalizeName(user.name),
      scoreCount: user.scores.length || 0,
      avg:
        averageScore(user.scores) || null
    };
  }
}

//console.log(buildUserSummary(users[0]));

//---Assignment 4: Build All User Summaries---//
function summarizeUsers(userArray){
  if (!Array.isArray(userArray)){
    throw new Error("userArray must be an array");
  } else {
    return userArray.map(user => buildUserSummary(user));
  }
}

//console.log(summarizeUsers(users));

//---Assignment 5: Safe Summarize Users---//
function safeSummarizeUsers(userArray) {
  try{
    return {
      ok: true,
      data: summarizeUsers(userArray)
    };
  } catch (err) {
    return {
      error: { ok: false, error: err.message }
    };
  }
}

//console.log(safeSummarizeUsers(users));

//---Assignment 6: Get User Display Name By Id---//
function getUserDisplayNameById(userArray, id){
  if(!Array.isArray(userArray)){
    throw new Error("userArray must be an array");
  } else if(typeof id !== "number"){
    throw new Error("id must be a number");
  } else {
    const user = userArray.find(user => user.id === id);
    if(!user){
      throw new Error("User not found");
    }
    return normalizeName(user.name);
  }
}
//console.log(getUserDisplayNameById(users, 101));

//---Part C---//
typeof undefined // "undefined"
//2) typeof null = object
//3) null/undefined means no value, but "" is a value or an empty string.

console.log(normalizeName(" Ada ")); 
console.log(normalizeName("   "));
console.log(normalizeName(null));
console.log(averageScore([10, 20, 30]));
console.log(averageScore([]));
console.log(buildUserSummary(users[0]));
console.log(buildUserSummary(users[3]));
console.log(safeSummarizeUsers(users).ok);
console.log(getUserDisplayNameById(users, 105));
console.log(safeSummarizeUsers("not an array"));

