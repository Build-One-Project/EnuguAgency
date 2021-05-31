const avaialable_jobs = [
    {
        "title": "Medical Assistant",
        "category": "Health",
        "description": "Looking for a qualified assistant to aid the administrative office.",
        "requirements": "",
        "company": "Pharm Hospital"
    },
    {
        "title": "Nursing Assistant",
        "category": "Health",
        "description": "Looking for an Nurse assistant to run the office work.",
        "requirements": "",
        "company": "Parklane Hospital Enugu"
    },
    {
        "title": "Licensed Practical Nurse",
        "category": "Health",
        "description": "A practical nurse to perform the basic functions in an administrative department.",
        "requirements": "",
        "company": "University of Nigeria Teaching Hospital (UNTH) Enugu."
    },
    {
        "title": "Physician",
        "category": "Health",
        "description": "Looking for a qualified Physician who can work with families and kids",
        "requirements": "",
        "company": "Orthopaedic Hospital Enugu"
    },
    {
        "title": "Therapist",
        "category": "Health",
        "description": "A compatable therapist who can work with mentally disordered people and depressed people.",
        "requirements": "",
        "company": "Parklane Hospital Enugu"
    },
    {
        "title": "Jury Consultant",
        "category": "Legal",
        "description": "Looking for a Jury Consultant who can help evaluate disposition and organize mock trials.",
        "requirements": "",
        "company": "Supreme Court"
    },
    {
        "title": "Law Firm Administrator",
        "category": "Legal",
        "description": "Looking for someone who has the ability to co-ordinate and oversee day-to-day operations.",
        "requirements": "",
        "company": "House Of Law II"
    },
    {
        "title": "Legal Analyst",
        "category": "Legal",
        "description": "A devoted worker who can help build a case.",
        "requirements": "",
        "company": "Supreme Court"
    },
    {
        "title": "Legal Services Director",
        "category": "Legal",
        "description": "Looking for someone who can help a team to achieve their set goals.",
        "requirements": ["Ability To Lead", "Determination", "A minimum of 2 years experience" ],
        "company": ""
    },
    {
        "title": "",
        "category": "Legal",
        "description": "",
        "requirements": "",
        "company": ""
    },
    {
        "title": "Accountant",
        "category": "Finance",
        "description": "Someone who can prepare and evaluate financial documents, and ensuring that records of all financial transactions are accurate.",
        "requirements": ["Bachelors Degree in Accounting", 
        "a minimum of 1 year accountacy experience."],
        "company": "Enugu State Water Crporation (ENSWC)"
    },
    {
        "title": "Auditor",
        "category": "Finance",
        "description": "Ability to investigate and indentify bookkeeping errors, misrepresentations and fraud. Help maintain documentary compliance with relevant standards, regulations and policies.",
        "requirements" : ["Accounting", "Financial Analysis", "Data Analysis", "Accounting Software"],
        "company": "Enugu Electricity Distribution Company (EEDC)"
    },
    {
        "title": "Bank Cashier/Clerk",
        "category": "Finance",
        "description": "Ability to process transactions and perform administrative and bank related tasks. Provide customer service and in-person transactions. Organize documents and files, analyze financial reports and balance all financial records.",
        "requirements" : ["NVQ/SVQ Levels 2 and 3 in Customer Service.", "NVQ/SVQ Levels 2 and 3 in Providing Financial Services.", "Professional Diploma in Financial Services and Management (DFSM)."],
        "company": "Bank of Industry"
    },
    {
        "title": "Bank Manager",
        "category": "Finance",
        "description": "Someone who can oversee the affairs of a banking unit. Ability to perform administrative, marketing, customer care, business development and sales functions.",
        "requirements" : ["Bachelors Degree in Business Administration", "A level maths", "A level statistics"],
        "company": "Central Bank of Nigeria"
    },
    {
        "title": "Budget Analyst",
        "category": "Finance",
        "description": "Looking for someone who can prepare budget reportsl, review historical budget allocation, perform cost analysis and offer insight on how to ensure that the organization achieves a better financial position compared to past review methods.",
        "requirements" : ["A Bachelors Degree in Finance", "A degree in Statistics"],
        "company": "ESUT Hospital Parklane Enugu."
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "Fire Safety Consultant",
        "category": "Fire",
        "description": "Some",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "requirements" : "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "requirements" : "",
        "company": ""
    },
]

const search_result = document.getElementById("search")

search_result.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  function Search_input(props){
      const allJobsByCategory = avaialable_jobs.filter( (item) => 
        item.category.toLowerCase().split(" ").includes(props.category.toLowerCase()) 
    )
//   const filteredCharacters = avaialable_jobs.filter((item) => {
//     return (
//       item.category.includes(searchString)
//     );
//   });
  console.log(`Category: ${item.category} ---- Job Title: ${item.title}`)
  console.log(allJobsByCategory);
  }
  
});

// function Search_input(props){

    
//     const allJobsByCategory = avaialable_jobs.filter( (item) => 
//         item.category.toLowerCase().split(" ").includes(props.category.toLowerCase()) 
//     )
//     const allJobsByTitleComponent = allJobsByCategory.map( (item) =>
//         console.log("Category: {item.category} ---- Job Title: {item.title}")
//     )
//     console.log(allJobsByTitleComponent)



    // return(
    //     <div id="search_result">
    //         <h3>The are {title.length} Jobs in total</h3>
    //         <h3>We found <span id="search_result_number">{allJobsByCategory.length}</span> jobs that have <span id="search_keyword"> {props.category}</span> in their category</h3>
    //         {/* { allTitles } */}
    //         {props.title === "" ? title : allJobsByTitleComponent}
    //     </div>
    // )
// }
// console.log(Search_input(props))