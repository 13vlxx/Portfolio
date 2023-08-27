// Créez un tableau d'objets pour stocker les informations des sites
const projects = [
  {
    techno: "React.JS, TailwindCSS",
    title: "imageWorld",
    imgSrc: "./img/projects/imageWorld.jpg",
    link: "https://imag3world.netlify.app/",
  },
  {
    techno: "React.JS, TailwindCSS, Redux",
    title: "vlxxCod3Editor",
    imgSrc: "./img/projects/vlxxCod3Editor.png",
    link: "https://vlxxcod3editor.netlify.app/",
  },
  {
    techno: "React.JS, TailwindCSS, Redux",
    title: "BoxShadow Generator",
    imgSrc: "./img/projects/boxshadow.jpg",
    link: "https://boxshadow-gen.netlify.app/",
  },
  {
    techno: "React.JS, TailwindCSS, Redux",
    title: "Redux Fruits",
    imgSrc: "./img/projects/fruits.jpg",
    link: "https://redux-fruits.netlify.app/",
  },
  {
    techno: "React.JS",
    title: "React JS Country API",
    imgSrc: "./img/projects/countries.jpg",
    link: "https://react-countryapi.netlify.app",
  },
  {
    techno: "React.JS",
    title: "React Todos",
    imgSrc: "./img/projects/todos.jpg",
    link: "https://13vlxx-react-todos.netlify.app/",
  },
  {
    techno: "PHP, SQL, Bootstrap",
    title: "ByteMaster",
    imgSrc: "./img/projects/bytemaster.png",
    link: "http://bytemaster.alwaysdata.net/",
  },
  {
    techno: "HTML, CSS, JS",
    title: "Vite JS Clone",
    imgSrc: "./img/projects/vitejs.jpg",
    link: "https://clone-vitejs.netlify.app",
  },
];

// Maintenant, vous pouvez utiliser ce tableau pour générer les articles HTML
const projectsContainer = document.querySelector(".projects_container");

projects.forEach((project) => {
  const article = document.createElement("article");
  article.classList.add("projects_card");

  article.innerHTML = `
      <img src="${project.imgSrc}" alt="projects image" class="projects_img" />
      <div class="projects_modal">
        <span class="projects_subtitle">${project.techno}</span>
        <h2 class="projects_title">${project.title}</h2>
        <a href="${project.link}" target="_blank" class="projects_button">Visiter le site <i class="ri-external-link-line"></i></a>
      </div>
    `;

  projectsContainer.appendChild(article);
});
