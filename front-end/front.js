var data = {
  "name": "Gustavo Martín Maunás",
  "backImage": "https://cdn.pixabay.com/photo/2015/11/19/08/51/banner-1050624_960_720.jpg",
  "image": "https://media-exp1.licdn.com/dms/image/C4E03AQHhK2-XaiXNTw/profile-displayphoto-shrink_200_200/0/1634643405912?e=1645056000&v=beta&t=DfV4ypMOHUilKZ3oNJeY8sr172BxA8WJO7nWtBMqd2U",
  "position": "Profesor Sincrónico (Argentina Programa)",
  "company": {
    "name": "INTI",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/INTI_Logo_2019.png/1024px-INTI_Logo_2019.png",
    "url": "#"
  },
  "school": {
    "name": "Universidad Blas Pascal",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/UBP_V_D_1-m.png/800px-UBP_V_D_1-m.png",
    "url": "#"
  },
  "ubication": "San Rafael - Mendoza (Argentina)",
  "about": "Hola, soy Gustavo Martín Maunás. Mi experiencia profesional en el área de la informática y el quehacer como docente trabajan de la mano para formar y transformar. Esta profesión es realmente un reto asumirla, debido a que en ella no solo se educan personas, sino que también se aprende a ser “humano”. Lo que más me gusta de la programación es dar soluciones a problemas que aparentemente son complicados.",
  "experience": [
    {
      "position": "Profesor Sincrónico - Contenidista",
      "company": "Fundación Educativa Santísima Trinidad",
      "img": "https://fido.palermo.edu/servicios_dyc/instituciones/logos/564.jpg",
      "mode": "Jornada parcial",
      "start": "2019",
      "end": "actualidad",
      "timeElapsed": "2 años"
    }
  ],
  "education": [
    {
      "school": "Universidad Juan Agustín Maza",
      "title": "Profesor Universitario en Informática",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/INSTITUCIONAL.jpg/155px-INSTITUCIONAL.jpg",
      "career": "Ciclo de Profesorado",
      "score": 10,
      "start": "2020",
      "end": "2021"
    },
    {
      "school": "Universidad Blas Pascal",
      "title": "Licenciatura en Informática",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/UBP_V_D_1-m.png/800px-UBP_V_D_1-m.png",
      "career": "Ciclo de Licenciatura",
      "score": 9,
      "start": "2012",
      "end": "2014"
    },

    {
      "school": "I.E.S. Nº 9-012 “SAN RAFAEL EN INFORMÁTICA”",
      "title": "Analista de Sistemas de Información",
      "img": "https://ies9012.edu.ar/sigeaweb/images/logos/logo_ies.jpg",
      "career": "Ciclo de Tecnicatura",
      "score": 9,
      "start": "2004",
      "end": "2007"
    }
  ],
  "aptitudes": [
    {
      "name": "Resolución de problemas",
      "progress": 75,
      "confirms": 2,
      "confirmsNames": [
        {
          "name": "Ludmila Maunás"
        }
      ]
    },
    {
      "name": "Diseño de Sistemas",
      "confirms": 3,
      "confirmsNames": [
        {
          "name": "María Giuliana Maunás"
        }
      ]
    }
  ],
  "achivements": [
    {
      "name": "Logro #1"
    },
    {
      "name": "Logro #2"
    }
  ]


};
updateView();

function updateView() {
  $('#info-name')[0].innerText = data.name;
  $('#info-position')[0].innerText = data.position;;
  $('#info-company')[0].innerText = data.company.name;
  $('#info-ubication')[0].innerText = data.ubication;
  $('#about')[0].innerText = data.about;
  $('#expList').empty();
  $('#eduList').empty();
  populateExp();
  populateEducation();
}

function populateExp() {
  document.getElementById('expList').innerHTML = data.experience.map(company => `
    <li>
      <div class="data-container">
        <a href="#">
          <div class="logo-image-container"><img id="exp-img" class="logo-image" src="${company.img}"></div>
          <div class="list-info">
            <div>
              <h3 id="exp-position">${company.position}</h3>
              <p><span id="exp-company">${company.company}</span> - <span id="exp-mode">${company.mode}</span></p>
              <h4><span id="exp-initial">${company.start}</span> – <span id="exp-end">${company.end}</span> - <span id="exp-time">${company.timeElapsed}</span></h4>
              <h4 id="exp-place">Mendoza</h4>
            </div>
          </div>
        </a>
      </div>
      <div class="data-control">
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditExpModal('${company.company}')"></i></a></div>
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteExp('${company.company}')"></i></a></div>
      </div>
    </li>
    `).join('');
}

function populateEducation() {
  document.getElementById('eduList').innerHTML = data.education.map(school => `
  <li>
    <div class="data-container">
      <a href="#">
        <div class="logo-image-container"><img id="edu-img" class="logo-image" src="${school.img}"></div>
        <div class="list-info">
          <div>
            <h3 id="edu-school">${school.school}</h3>
            <p><span id="edu-title">${school.title}</span>, <span id="edu-career">${school.career}</span>, <span id="edu-score">${school.score}</span></p>
            <p><time id="edu-start">${school.start}</time> - <time id="edu-end">${school.end}</time></p>
          </div>
        </div>
      </a>
    </div>
    <div class="data-control">
      <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditEduModal('${school.school}')"></i></a></div>
      <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteEdu('${school.school}')"></i></a></div>
    </div>
  </li>
    `).join('');
}

function showEditProfileModal() {
  $('#inputName')[0].value = data.name;
  $('#inputPosition')[0].value = data.position;
  $('#inputCompany')[0].value = data.company.name;
  $('#inputUbication')[0].value = data.ubication;
  $('#editProfile').modal("toggle");
}

function showEditAboutModal() {
  $('#inputAbout')[0].value = data.about;
  $('#editAbout').modal("toggle");
}

function showNewExpModal() {
  $('#newExp').modal("toggle");
}

function showEditExpModal(companyName) {
  var company = data.experience.filter(obj => obj.company === companyName)[0];
  $('#inputPositionExpEdit')[0].value = company.position;
  $('#inputCompanyExpEdit')[0].value = company.company;
  $('#inputModeExpEdit')[0].value = company.mode;
  $('#inputImgExpEdit')[0].value = company.img;
  $('#inputInitialExpEdit')[0].value = company.start;
  $('#inputEndExpEdit')[0].value = company.end;
  $('#inputTimeExpEdit')[0].value = company.timeElapsed;
  $('#editExp').modal("toggle");

}

function deleteExp(companyName) {
  data.experience = data.experience.filter(obj => obj.company !== companyName);
  updateView();
}

function showNewEduModal() {
  $('#newEdu').modal("toggle");
}

function showEditEduModal(schoolName) {
  var school = data.education.filter(obj => obj.school === schoolName)[0];
  $('#inputSchoolEdit')[0].value = school.school;
  $('#inputTitleEdit')[0].value = school.title;
  $('#inputSchoolImageEdit')[0].value = school.img;
  $('#inputCareerEdit')[0].value = school.career;
  $('#inputScoreEdit')[0].value = school.score;
  $('#inputSchoolInitialEdit')[0].value = school.start;
  $('#inputSchoolEndEdit')[0].value = school.end;
  $('#editEdu').modal("toggle");
}

function deleteEdu(schoolName) {
  data.education = data.education.filter(obj => obj.school !== schoolName);
  updateView();
}

function showNewAptModal() {
  $('#newApt').modal("toggle");
}

function showNewAchModal() {
  $('#newAch').modal("toggle");
}

function saveEditProfileModal() {
  data.name = $('#inputName')[0].value;
  data.position = $('#inputPosition')[0].value;;
  data.company.name = $('#inputCompany')[0].value;
  data.ubication = $('#inputUbication')[0].value;
  updateView();
  $('#editProfile').modal("toggle");
}

function saveEditAboutModal() {
  data.about = $('#inputAbout')[0].value;
  updateView();
  $('#editAbout').modal("toggle");
}

function saveNewExpModal() {
  data.experience.push({
    "position": $('#inputPositionExp')[0].value,
    "company": $('#inputCompanyExp')[0].value,
    "img": $('#inputImgExp')[0].value,
    "mode": $('#inputModeExp')[0].value,
    "start": $('#inputInitialExp')[0].value,
    "end": $('#inputEndExp')[0].value,
    "timeElapsed": $('#inputTimeExp')[0].value
  });
  updateView();
  $('#newExp').modal("toggle");
}

function saveEditExpModal(companyName) {
  data.experience.forEach(company => {
    if (companyName === company.company) {
      company.position = $('#inputPositionExpEdit')[0].value;
      company.img = $('#inputImgExpEdit')[0].value;
      company.mode = $('#inputModeExpEdit')[0].value;
      company.start = $('#inputInitialExpEdit')[0].value;
      company.end = $('#inputEndExpEdit')[0].value;
      company.timeElapsed = $('#inputTimeExpEdit')[0].value;
    }
  })
  updateView();
  $('#editExp').modal("toggle");
}

function saveNewEduModal() {
  data.education.push({
    "school": $('#inputSchool')[0].value,
    "title": $('#inputTitle')[0].value,
    "img": $('#inputSchoolImage')[0].value,
    "career": $('#inputCareer')[0].value,
    "score": $('#inputScore')[0].value,
    "start": $('#inputSchoolInitial')[0].value,
    "end": $('#inputSchoolEnd')[0].value
  });
  updateView();
  $('#newEdu').modal("toggle");

}

function saveEditEduModal(schoolName) {
  data.education.forEach(school => {
    if (schoolName === school.school) {
      console.log(school)
      school.title = $('#inputTitleEdit')[0].value;
      school.img = $('#inputSchoolImageEdit')[0].value;
      school.career = $('#inputCareerEdit')[0].value;
      school.score = $('#inputScoreEdit')[0].value;
      school.start = $('#inputSchoolInitialEdit')[0].value;
      school.end = $('#inputSchoolEndEdit')[0].value;
    }
  })
  updateView();
  $('#editEdu').modal("toggle");
}

function saveNewAptModal() {
  data.aptitudes.push({
    "name": $('#inputSchoolEdit')[0].value,
    "confirms": 3,
    "confirmsNames": [
      {
        "name": "Juan Manuel Maunás"
      }
    ]
  });
  updateView();
  $('#newApt').modal("toggle");
}

function saveNewAchModal() {
  data.achivements.push({
    "name": $('#inputAch')[0].value
  });
  updateView();
  $('#newAch').modal("toggle");
}
