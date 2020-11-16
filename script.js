const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 54,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
// Declare a function named addSubmission

function addSubmission(array, newName, newScore, newDate) {
  let passed;
  if (newScore < 60) {
    passed = false;
  } else {
    passed = true;
  }
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: passed,
  };
  array.push(newSubmission);
}
// addSubmission(submissions, "Jim", 85, "2020-04-03");

//   console.log(submissions);

// submissions.findIndex(function(submission)) {

// Declare a function named deleteSubmissionByIndex

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions,2);
// console.log(submissions);

// Declare a function named deleteSubmissionByName

function deleteSubmissionByName(array, name) {
  let submissionIndex = array.findIndex(
    (submission) => submission.name === name
  );
  array.splice(submissionIndex, 1);
}
// deleteSubmissionByName(submissions,'Jane');
// console.log(submissions);

//     Declare a function named editSubmission

function editSubmission(array, index, score) {
  let pass;
  if (score >= 60) {
    pass = true;
  } else {
    pass = false;
  }
  array[index].score = score;
  array[index].passed = pass;
}
//  editSubmission(submissions,3,40);
//  console.log(submissions);

// Declare a function named findSubmissionByName

function findSubmissionByName(array, name) {
  let student = array.find((submission) => submission.name === name);
  return student;
}
let myStudent = findSubmissionByName(submissions, "Jack");
console.log(myStudent);

// Declare a function named findLowestScore

function findLowestScore(array) {
  let lowestScore = null;
  submissions.forEach(findLowestScore);
  if (lowestScore === null || lowestScore < newScore) {
    lowest = newScore;
    return newScore;
  }
}
// findLowestScore(submissions);
// console.log(newScore);

function findAverageScore(array) {
  let totalScore = 0;
  for (const submission of submissions) total = totalScore + submission.score;
  average = total / submissions.length;
  return average;
}
findAverageScore(submissions);
console.log(average);

// Declare a function named filterPassing

function filterPassing(array) {
  let passScore = array.filter(function (submission) {
    return submission.score >= 60;
  });

  console.log(passScore);
}
//  filterPassing(submissions);

// Declare a function named filter90AndAbove

function filter90AndAbove(array) {
  let highScore = array.filter(function (submission) {
    return submission.score >= 90;
  });
  console.log(highScore);
}
// filter90AndAbove(submissions);
