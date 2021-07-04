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
        "company": "Enugu Law Firm"
    },
    {
        "title": "Barrister",
        "category": "Legal",
        "description": "Able to give expert legal advice and represent clients in court. ",
        "requirements": "House of Law III",
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
        "title": "Financial Clerk",
        "category": "Administration",
        "description": "Ability to produce and maintain financial records for companies, carrying out financial transactions and helping customers too.",
        "requirements" : ["Bookkeeping", "Accounting", "Post-secondary Education"],
        "company": "Bowaz Group of Companies"
    },
    {
        "title": "General Office Clerk",
        "category": "Administration",
        "description": "Controlling of general activities in the office. Maintain documents, answer telephone calls and assist clients.",
        "requirements" : "",
        "company": "Maxwell Oil Group"
    },
    {
        "title": "Information Clerk",
        "category": "Administration",
        "description": "Help gather information to help the company grow. Searching databases, digging through files and maintaining records.",
        "requirements" : "Experience with spreadsheet and computer programs.",
        "company": "National Television Authority (NTA)"
    },
    {
        "title": "Receptionist",
        "category": "Administration",
        "description": "Give customers a warm welcome into the organization and help them with whatever they want to do.",
        "requirements" : "Ability to interact with customers freely, Bookkeeping",
        "company": "Nivea NG"
    },
    {
        "title": "Office Administrator",
        "category": "Administration",
        "description": "Providing structure to other employees throughout the organization. Being responsible for the management of human resources, budgets and records.",
        "requirements" : "",
        "company": "Bozwarth Group of Companies"
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
        "company": "Omwheel Housing Management"
    },     
    {
        "title": "Sales Executive",
        "category": "Housing",
        "description": "Meet Sales monthly targets, attract clients for land purchase and investments.",
        "requirements" : "BS.c or HND",
        "company": "Enugu State Housing Corporation"
    },
    {
        "title": "Business Executive",
        "category": "Housing",
        "description": "Ability to brainstorm ideas to help in moving forward.",
        "requirements" : "",
        "company": "Adrom Homes"
    },
    {
        "title": "Housing Consultant",
        "category": "Housing",
        "description": "Provision of excellent customer service and execution of initiatives that support our goal to provide exceptional customer service",
        "requirements" : "",
        "company": "Scion Group"
    },
    {
        "title": "Supported Housing Officer",
        "category": "Housing",
        "description": "looking for supported housing officer to successfully deliver the supported housing management service delivery. Management of referrals, offers, complete tenancy sign ups and new tenancy visits.",
        "requirements" : "",
        "company": "Koko Impero Housing"
    },
    {
        "title": "Human Resource Manager",
        "category": "Human Resources",
        "description": "Planning, Directing and and coordination of activities in this organization. You will also be in charge of recruiting, interviewing and hiring of new staff.",
        "requirements" : "",
        "company": "Archimedes Rock Koncept"
    },
    {
        "title": "Human Resources Generalist",
        "category": "Human Resources",
        "description": "Carrying out day-to-day HR management duties including staff recruitment, payroll preparation, staff training and organization of team bonding activities.",
        "requirements" : "Good writing skill, general knowledge of HR mannagement functions and a minimum of 3 years experience.",
        "company": "Koso Digital Marketing Agency"
    },
    {
        "title": "Assistant- Human Resources",
        "category": "Human Resources",
        "description": "Assist in Handling Human Resources and Administrative responsibilities including: recruitment, onboarding, employee relations, performance and talent management.",
        "requirements" : "Bachelors Degree or HND in Social Sciences, Huamnities or any other related field, minimum of 4 years work experience, excellent communication skill.",
        "company": "EOS Outsourcing Limited"
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
        "title": "Pool/Fitness Attendant",
        "category": "Recreation",
        "description": "We at Mariott Hotels are looking for a pool/fitness attendant who can help visitors during their leisure time.",
        "requirements" : "Ability to perform gymnastic activities very well.",
        "company": "Mariott Hotels"
    },
    {
        "title": "Recreation Supervisor",
        "category": "Recreation",
        "description": "Instructs youths with an evidence based recreation program, adapts instructional methods and materials to meet youth varying needs, abilities and interest.",
        "requirements" : "Vocational/Technical Degree in an area of assignment from an accredited college.",
        "company": "DJJ Group of Companies"
    },
    {
        "title": "Sports Supervisor",
        "category": "Recreation",
        "description": "We are looking for a sports supervisor to oversee the general wellbeing and status of and athlethes during a game.",
        "requirements" : "Good communication skill",
        "company": "City of Kaspers Sports Group"
    },
    {
        "title": "Recreation Facilities Attendant",
        "category": "Recreation",
        "description": "Looking for someone with a high standard of facility manintenance and janitoral work.",
        "requirements" : "",
        "company": "Kamloops Group of Companies"
    },
    {
        "title": "Recreation Assistant",
        "category": "Recreation",
        "description": "Carrying out resident activity programs such as arts and craft, sports, music, game and cooking. Providing a safe environment and teaching methods of related activities to resident.",
        "requirements" : "Completion of a recognized activity assistant program.",
        "company": ""
    },
    {
        "title": "Physical Planning and Development Officer",
        "category": "Planning and Development",
        "description": "The physical planning and development officer is responsible for assisting the day to day running and maintenance of university infrastructure including the buildings, roads and other properties.",
        "requirements" : "A minimum of Bachelors Degree In Civil Enigineering, Building, and Architechture.",
        "company": "Mudiame University"
    },
    {
        "title": "Community Planning and Development Representative",
        "category": "Planning and Development",
        "description": "Participation in the delivery, development and design of new/current training or workshop used in instructing grantees on program requirements.",
        "requirements" : "",
        "company": "Awgu Local Government"
    },
    {
        "title": "Production Supervisor",
        "category": "Planning and Development",
        "description": "Supervising the construction of the new site at Anambra State.",
        "requirements" : "",
        "company": "BlueTriton Brands"
    },
    {
        "title": "Business Development Representative",
        "category": "Planning and Development",
        "description": "Sourcing of quality leads for the Account Executives, acquiring and maintaining a working knowledge of Oracle Netsuite, Uncovering and qualifying prospective customer needs.",
        "requirements" : "",
        "company": "Oracle"
    },
    {
        "title": "Discharge Planning Assistant",
        "category": "Planning and Development",
        "description": "This position supports the Case Managers, Medical Scoial Workers and Nursing Staff team in meeting discharge planning and continuity of care needs for patients.",
        "requirements" : "",
        "company": "St Joseph's Hospital"
    },
    {
        "title": "Police Officer- Recruit",
        "category": "Police",
        "description": "Reviews personnel and department rules and regulations, exercises appropriate level of initiative and judgement to make decisions within the scope of assigned authority.",
        "requirements" : "",
        "company": "Enugu East Police Division."
    },
    {
        "title": "Police Officer",
        "category": "Police",
        "description": "Enforcing the law, performing patrol duties, responds to call for service etc.",
        "requirements" : "",
        "company": "Enugu South Police Division"
    },
    {
        "title": "Secret Service Federal Police Officer",
        "category": "Police",
        "description": "Providing protection for Aso Rock complex, The Vice President's residence, and foreign diplomatic missions.",
        "requirements" : "",
        "company": "The Federal Government of Nigeria"
    },
    {
        "title": "Senior Publice Policy Manager",
        "category": "Public Works",
        "description": "Management and mitigation of political, regulatory and legislative risk, message crafting and localization, representing bolt in relevant industry associations.",
        "requirements" : "",
        "company": "Bolt"
    },
    {
        "title": "Public Relations Associate",
        "category": "Public Works",
        "description": "Media monitoring, writing pitches, journalist interaction and repoting.",
        "requirements" : "",
        "company": "RemoteHub"
    },
    {
        "title": "Public Accountant",
        "category": "Public Works",
        "description": "Participate in budgeting processes, monitor bookkeeping activities regularly, oversee ledger reconciliation and manage accounts.",
        "requirements" : "",
        "company": "Jozzby Global"
    },
    {
        "title": "Public Health Officer",
        "category": "Public Works",
        "description": "Capability of being a Health Consultant, Public Health Speaker, give Health Counselling etc.",
        "requirements" : "",
        "company": "Hemmels Global Resources"
    }
]

var output = jobs.filter(jobs => jobs.category === "Fire");
for(var i = 0; i < output.length; i++){
    document.write("<h3> Job Title:  ", output[i].title, "<h3> ")
    document.write("<h4> Category: ", output[i].category, "<h4>")
    document.write("<h4> Job Description: ", output[i].description, "<h4>")
    document.write("<h4> Employer: ", output[i].company, "<h4>", "<a href='apply.html' style='color:#6EC1E4; text-decoration:none; font-size:18px;'> APPLY</a>", "</br> </br> </br>")
};




