// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  

function getlearnerdata (coursedetails, assignment,submission ){
if (coursedetails.id === assignment.course_id)
{
 return task(assignment.assignments, submission);
}
return 0;
}
  
function task(assignments,submissions){ 
  //  for i in x is not used here because we have made one of the object element in x to array. so comparing with array elements for of or foreach can be used. for in is more apporpriate for objects.
   const learnerIds = submissions.map(submission => submission.learner_id);
   const studentsArray = [...new Set(learnerIds)]
   console.log(studentsArray)
   console.log(submissions)

   submissions.map(item => {})

  // const submissionsMap = new Map();

  //const newsubmissionsMap = new Map();

// for (let i = 0; i < submissions.length; i++) {
//   // Get the current submission object
//   const sub = submissions[i];

//   // Access properties directly
//   const learner_id = sub.learner_id;
//   const assignment_id = sub.assignment_id;
//   const submission = sub.submission;

//   // Check if the map has an entry for the learner_id
//   if (!newsubmissionsMap.has(learner_id)) {
//     // If not, create a new map for this learner_id
//     newsubmissionsMap.set(learner_id, new Map());
//   }

//   // Add or update the submission in the nested map
//   newsubmissionsMap.get(learner_id).set(assignment_id, submission);
// }

// // Optional: Print the content of submissionsMap to verify
// newsubmissionsMap.forEach((assignments, learner_id) => {
//   console.log(`Learner ID: ${learner_id}`);
//   assignments.forEach((submission, assignment_id) => {
//     console.log(`  Assignment ID: ${assignment_id}`);
//     console.log(`    Submitted At: ${submission.submitted_at}`);
//     console.log(`    Score: ${submission.score}`);
//   });
// });


}
 
  
console.log(getlearnerdata(CourseInfo, AssignmentGroup,LearnerSubmissions));