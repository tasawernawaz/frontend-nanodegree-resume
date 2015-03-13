var bio = {
    'name': "Tasawer Nawaz",
    'role': "Web Developer",
    'contacts': {
        "mobile": "03337214307",
        "email": "tasawernawaz@gmail.com",
        "github": "tasawernawaz",
        "twitter": "@tasawernawaz",
        'location': "Lahore, Pakistan"
    },
    'welcomeMessage': 'Welcome to my resume',
    'biopic': "images/fry.jpg",
    'skills': ['Python', 'Scrapy', 'Javascript', 'CSS'],
    'display': function () {
        var header = $("#header");
        header.prepend(HTMLheaderRole.replace("%data%", bio.role));
        header.prepend(HTMLheaderName.replace("%data%", bio.name));
        header.append(HTMLbioPic.replace("%data%", bio.biopic));
        header.append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));


        var contact = $("#topContacts");
        contact.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        contact.append(HTMLemail.replace("%data%", bio.contacts.email));
        contact.append(HTMLgithub.replace("%data%", bio.contacts.github));
        contact.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        contact.append(HTMLlocation.replace("%data%", bio.contacts.location));

        if (bio.skills.length !== 0) {
            header.append(HTMLskillsStart);
            var skills = $("#skills");
            for (var i = 0; i < bio.skills.length; i++) {
                skills.append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }
};


var work = {
    'jobs': [{
        'employer': "Arbisoft",
        'title': "Software Engineer",
        'location': "Lahore, Pakistan",
        'dates': "Dec, 2012 - Jan, 2015",
        'description': 'Currently I am software engineer at arbisot since december 2012 working on python, scrapy, djnago and rest api'
    }],
    'display': function () {
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
};


var projects = {
    'projects': [
        {
            'title': 'kyruus',
            'dates': "Dec, 2012 - May, 2013",
            'description': 'data collection of doctors from state boards and hospitals websites',
            'images': ['images/kyruus-1.png', 'images/kyruus-2.png']
        },
        {
            'title': 'aee',
            'dates': "May, 2013 - Jan 2015",
            'description': 'mostly work done ia related to python-scrapy',
            'images': ['images/aee.png']
        }
    ],
    display: function () {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var project_div = $(".project-entry:last");
            project_div.append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
            project_div.append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
            project_div.append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
            for (var image in projects.projects[project].images) {
                project_div.append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
            }

        }
    }
};

var education = {
    'schools': [
        {
            'name': 'University of Gujrat',
            'location': 'Gujrat, Pakistan',
            'degree': 'BS CS',
            'major': ['Computer Science'],
            'dates': 2012
        },
        {
            'name': 'F.G Degree Collage Kharian Cant',
            'location': 'Gujrat, Pakistan',
            'degree': 'ICS',
            'major': ['Computer Science', 'Physics', 'Math'],
            'dates': 2008
        }
    ],
    "onlineCourses": [
        {
            'title': 'Introduction to jQuery',
            'school': 'Udacity',
            'dates': 2015,
            'url': 'https://www.udacity.com/course/viewer#!/c-ud245-nd/l-3342528615/m-3343838767'
        },
        {
            'title': 'Introduction to HTML and CSS',
            'school': 'Udacity',
            'dates': 2014,
            'url': 'https://www.udacity.com/course/viewer#!/c-ud304-nd'
        }
    ],
    'display': function () {
        var parent_edu_div = $("#education");
        for (var school in education.schools) {
            parent_edu_div.append(HTMLschoolStart);
            var edu_div = $(".education-entry:last");
            var name_degree = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)
            edu_div.append(name_degree);
            edu_div.append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
            edu_div.append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
            edu_div.append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
        }

        parent_edu_div.append(HTMLonlineClasses);
        for (var online_school in education.onlineCourses) {
            parent_edu_div.append(HTMLschoolStart);
            edu_div = $(".education-entry:last");
            var title_school = HTMLonlineTitle.replace("%data%", education.onlineCourses[online_school].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[online_school].school)
            edu_div.append(title_school);
            edu_div.append(HTMLonlineDates.replace("%data%", education.onlineCourses[online_school].dates));
            edu_div.append(HTMLonlineURL.replace("%data%", education.onlineCourses[online_school].url));
        }
    }
};


bio.display();
projects.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);

$(document).click(function (loc) {
   logClicks(loc.pageX, loc.pageY);
});

//var header = $("#header");
//var myName = HTMLheaderName.replace("%data%", bio.Name);
//var myRole = HTMLheaderRole.replace("%data%", bio.Role);
//header.prepend(myRole);
//header.prepend(myName);
//
//header.append(HTMLbioPic.replace("%data%", bio.Image_url));
//header.append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
//
//
//var contact = $("#topContacts");
//contact.append(HTMLmobile.replace("%data%", bio.contacts.Phone));
//contact.append(HTMLemail.replace("%data%", bio.contacts.Emailmail));
//contact.append(HTMLgithub.replace("%data%", bio.contacts.Github));
//contact.append(HTMLlocation.replace("%data%", bio.contacts.Location));


//if (bio.Skills.length !== 0) {
//    header.append(HTMLskillsStart);
//    var skills = $("#skills");
//    for (var i = 0; i < bio.Skills.length; i++) {
//        skills.append(HTMLskills.replace("%data%", bio.Skills[i]));
//    }
//}

//displayWork();

//function displayWork() {
//    for (var index in work.jobs) {
//        $("#workExperience").append(HTMLworkStart);
//        var work_div = $(".work-entry:last");
//        var employer_title = HTMLworkEmployer.replace("%data%", work.jobs[index].employer) + HTMLworkTitle.replace("%data%", work.jobs[index].title);
//        work_div.append(employer_title);
//        work_div.append(HTMLworkDates.replace("%data%", work.jobs[index].dates));
//        work_div.append(HTMLworkLocation.replace("%data%", work.jobs[index].location));
//        work_div.append(HTMLworkDescription.replace("%data%", work.jobs[index].description));
//    }
//}


//
//$("#education").append(HTMLschoolStart);
//var edu_div = $(".education-entry");
//edu_div.append(HTMLschoolName.replace("%data%", education.last_school));
//edu_div.append(HTMLschoolDates.replace("%data%", education.year));
//edu_div.append(HTMLschoolLocation.replace("%data%", education.city));

