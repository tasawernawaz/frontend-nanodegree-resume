var bio = {
    'Name': "Tasawer Nawaz",
    'Role': "Web Developer",
    'contacts': {
        "Phone": "03337214307",
        "Email": "tasawernawaz@gmail.com",
        "Github": "tasawernawaz",
        'Location': "Lahore, Pakistan"
    },

    'Image_url': "images/fry.jpg",
    'welcomeMessage': 'Welcome to my resume',
    'Skills': ['Python', 'Scrapy', 'Javascript', 'CSS']
};

var work = {
    'jobs': [{
        'title': "Software Engineer",
        'employer': "Arbisoft",
        'dates': "2012-2015",
        'location': "Lahore, Pakistan",
        'description': 'Currently I am software engineer at arbisot since december 2012 working on python, scrapy, djnago and rest api'
    }]
};

var education = {
    'schools': [
        {
            'name': 'University of Gujrat',
            'degree': 'BS CS',
            'dates': "2008-2012",
            'location': 'Gujrat, Pakistan',
            'major': ['Computer Science'],
            'url': 'www.uog.edu.pk/'
        },
        {
            'name': 'F.G Degree Collage Kharian Cant',
            'degree': 'ICS',
            'dates': "2006-2008",
            'location': 'Gujrat, Pakistan',
            'major': ['Computer Science', 'Physics', 'Math'],
            'url': 'https://www.facebook.com/fg.degree.college'
        }
    ],
    'onlineCourses ': [
        {
            'title': 'Udacity Nanodegree',
            'school': 'Udacity',
            'dates': "2015 to current",
            'url': 'udacity.com/course/nd001'
        }
    ]
};

var projects = {
    'projects': [
        {
            'title': 'kyruus',
            'description': 'data collection of doctors from state boards and hospitals websites',
            'dates': "2012-2012",
            'images': ['images/kyruus.png']
        },
        {
            'title': 'aee',
            'description': 'mostly work done ia related to python-scrapy',
            'dates': "2012-2014",
            'images': ['images/aee.png']
        }
    ]
};


var header = $("#header");
var myName = HTMLheaderName.replace("%data%", bio.Name);
var myRole = HTMLheaderRole.replace("%data%", bio.Role);
header.prepend(myRole);
header.prepend(myName);

header.append(HTMLbioPic.replace("%data%", bio.Image_url));
header.append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));


var contact = $("#topContacts");
contact.append(HTMLmobile.replace("%data%", bio.contacts.Phone));
contact.append(HTMLemail.replace("%data%", bio.contacts.Emailmail));
contact.append(HTMLgithub.replace("%data%", bio.contacts.Github));
contact.append(HTMLlocation.replace("%data%", bio.contacts.Location));


if (bio.Skills.length !== 0) {
    header.append(HTMLskillsStart);
    var skills = $("#skills");
    for (var i = 0; i < bio.Skills.length; i++) {
        skills.append(HTMLskills.replace("%data%", bio.Skills[i]));
    }
}

displayWork();

function displayWork() {
    for (var index in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var work_div = $(".work-entry:last");
        var employer_title = HTMLworkEmployer.replace("%data%", work.jobs[index].employer) + HTMLworkTitle.replace("%data%", work.jobs[index].title);
        work_div.append(employer_title);
        work_div.append(HTMLworkDates.replace("%data%", work.jobs[index].dates));
        work_div.append(HTMLworkLocation.replace("%data%", work.jobs[index].location));
        work_div.append(HTMLworkDescription.replace("%data%", work.jobs[index].description));
    }
}

projects.display = function () {
    for (var index in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var project_div = $(".project-entry:last");
        project_div.append(HTMLprojectTitle.replace("%data%", projects.projects[index].title));
        project_div.append(HTMLprojectDates.replace("%data%", projects.projects[index].dates));
        project_div.append(HTMLprojectDescription.replace("%data%", projects.projects[index].description));
        project_div.append(HTMLprojectImage.replace("%data%", projects.projects[index].images));
    }
};

projects.display();

//
//$("#education").append(HTMLschoolStart);
//var edu_div = $(".education-entry");
//edu_div.append(HTMLschoolName.replace("%data%", education.last_school));
//edu_div.append(HTMLschoolDates.replace("%data%", education.year));
//edu_div.append(HTMLschoolLocation.replace("%data%", education.city));

