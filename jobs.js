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
        "description": "Looking for someone who have ",
        "requirements": "",
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
        "title": "",
        "category": "Legal",
        "description": "",
        "requirements": "",
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
        "title": "",
        "category": "Finance",
        "description": "",
        "requirements": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Finance",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Finance",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Finance",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Finance",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Administration",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Fire",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Housing",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Human Resources",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "IT",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "company": ""
    },
    {
        "title": "Recreation",
        "category": "",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Recreation",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Planning and Development",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Police",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "company": ""
    },
    {
        "title": "",
        "category": "Public Works",
        "description": "",
        "company": ""
    },
]