const jobs = [
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
        "company": "Enugu State Water Corporation (ENSWC)"
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
        "description": "Someone who can guide people on fire safety and how to avoid fire accidents.",
        "requirements" : "Certified Paramedic",
        "company": "Enugu State Fire Service"
    },
    {
        "title": "Fire Marshal",
        "category": "Fire",
        "description": "Someone who is capable of surveying buildings caught on fire and making sure it is safe for everyone.",
        "requirements" : "Both levels of NREMT certification.",
        "company": "Enugu State Fire Service"
    },
    {
        "title": "Deputy Fire Marshal",
        "category": "Fire",
        "description": "Someone who can assist the Fire Marshal to prevent fires and other problems before they happen. ",
        "requirements" : "At least a level of NREMT certification.",
        "company": "Enugu State Fire Service"
    },
    {
        "title": "Chief Fire and Rescue Officer",
        "category": "Fire",
        "description": "Looking for someone with the ability to rescue people from burning houses.",
        "requirements" : "Paramedic certification and both levels of NREMT certification.",
        "company": "Enugu State Fire Service"
    },
    {
        "title": "Fire Lieutenant",
        "category": "Fire",
        "description": "Looking for somone with the abilities of a lieutenant.",
        "requirements" : ["Courage", "Compassion", "Physical Stamina", "Physical Strength"],
        "company": "Enugu State Fire Service"
    },
    {
        "title": "Real Estate Agent",
        "category": "Housing",
        "description": "Assisting buyers and sellers to buy or sell a property.",
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
        "title": "Cloud Computing Engineer",
        "category": "IT",
        "description": "Someone with the ability to define, design, build and maintain systems and infrasctructure managed by cloud providers such as Amazon Web Services (AWS) and Microsoft Azure.",
        "requirements" : "2 years experience in cloud computing",
        "company": "SkyTech"
    },
    {
        "title": "Computer Network Specialist",
        "category": "IT",
        "description": "Be able to define, design, build and maintain a variety of data communication networks and systems.",
        "requirements" : ["Bachelors Degree in Computer Science", "At least 4 years experience as a Computer Network Specialist."],
        "company": "TechLooop"
    },
    {
        "title": "Database Adminisrator",
        "category": "IT",
        "description": "Management of Database records and updates.",
        "requirements" : "1 year minimum experience as a Database Administrator.",
        "company": "Tech Port"
    },
    {
        "title": "System Analyst",
        "category": "IT",
        "description": "Analysing different systems and giving reports on a monthly basis.",
        "requirements" : "3 years experience as a System Analyst.",
        "company": "Buuzzz"
    },
    {
        "title": "IT Coordinator",
        "category": "IT",
        "description": "Coordination of different Information Tecchnology data and processing of data.",
        "requirements" : "Ability to coordinate.",
        "company": "Decagon"
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
    }
]

var output = jobs.filter(jobs => jobs.category === "IT");
for(var i = 0; i < output.length; i++){
    document.write("<h3> Job Title:  ", output[i].title, "<h3> ")
    document.write("<h4> Category: ", output[i].category, "<h4>")
    document.write("<h4> Job Description: ", output[i].description, "<h4>")
    document.write("<h4> Employer: ", output[i].company, "<h4>", "<a href='apply.html' style='color:#6EC1E4; text-decoration:none; font-size:18px;'> APPLY</a>", "</br> </br> </br>")
};




