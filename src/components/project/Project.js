import React, { useState } from "react";
import { Element } from "react-scroll";
import Card from "./Card";
import "./Project.css";

function Project() {
  const [value, setValue] = useState("all");
  let data = [
    // {
    //   key: ["react", "express", "all", "restApi", "mern", "node"],
    //   img: "./asset/project/wetherapp.png",
    //   title: "Grocery Store",
    //   githubFrontEnd:
    //     "https://github.com/Shersha123/glocery-frontend.git",
    //   githubBackEnd:
    //     "https://github.com/Shersha123/glocery-backend.git",
    //   sourceCode: "https://glocery-frontend.vercel.app",
    //   shortNote:
    //     "I built a ecommerce web application for grocery store.",
    //   longNote: [
    //     "The frontend is built using **React** with **Bootstrap** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
    //     "They are **two category of rolls admin and users**. If a **user login as admin** it will show the **admin page** or else it will show **User page**.",
    //     "Admin page to show **add edit delete a product** and show **available stocks**, **bought stock**, **selling stock**, **billing (or) order data by user wise**.",
    //     "User page to show **product** **add to cart**,**Razorpay method**, **your order page**, **profile page** and finaly **invoice bill send in your email** etc.",
    //   ],
    //   skills: [
    //     {
    //       name: "React",
    //   link: "https://img.icons8.com/officel/40/react.png",
   
    //     },
    //     {
    //       name: "redux-toolkit",
    //       link: "./asset/redux.svg",
    //     },
    //     {
    //       name: "Node",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    //     },
    //     {
    //       name: "Express",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    //     },
    //     {
    //       name: "Mongo DB",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    //     },

    //     {
    //       name: "Bootstrap",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    //     },
    //     {
    //       name: "Chart JS",
    //       link: "./asset/chartjs.svg",
    //     },
    //     {
    //       name: "JWT",
    //       link: "./asset/jwt.svg",
    //     },
    //     {
    //       name: "Razorpay",
    //       link: "./asset/razorpay.svg",
    //     },
    //   ],
    // },
    // {
    //   key: ["react", "express", "all", "restApi", "mern","node"],
    //   img: "./asset/project/zendesk.png",
    //   title: "Inventory Management",
    //   githubFrontEnd:
    //     "https://github.com/Sivav15/shop-inventory-management-front-end",
    //   githubBackEnd:
    //     "https://github.com/Sivav15/Shop-inventory-management-back-end",
    //   sourceCode:"https://shopinventorymanagement.netlify.app",
    //   shortNote:
    //     "I built an app for shop inventory management for billing.",
    //   longNote: [
    //     "The frontend is built using **React** with **Bootstrap** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
    //     "This app used for **retail shop inventory management**, To **store product** and **stock** details.",
    //     "I have add **login/logout** feature. If the **users** is **logged in**  it will dissplay the users **data**. ",
    //     "They are **two category of users-admin and billing speciallest**. If a **user login as admin** it will show the **admin page** or else it will show **billing session**.",
    //     "Admin page to show **add edit delete product** and show **available stocks**, **bought stock**, **selling stock**, **billing (or) order data by user wise**, **yearly selling amount**.",
    //     "User page to show **billing section**, **your order page** and **invoice bill** etc.",
    //   ],
    //   skills: [
    //     {
    //       name: "React",
    //       link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    //     },
    //     {
    //       name: "Node",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    //     },
    //     {
    //       name: "Express",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    //     },
    //     {
    //       name: "Mongo DB",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    //     },

    //     {
    //       name: "Bootstrap",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    //     },
    //     {
    //       name: "Chart JS",
    //       link: "./asset/chartjs.svg",
    //     },
    //     {
    //       name: "Razorpay",
    //       link: "./asset/razorpay.svg",
    //     },
    //   ],
    // },
    {
      key: ["javascript", "all", "mockApi"],
      img: "./asset/project/weather-icons-collection_1167-124.png",
      title: "Weather App",
      githubFrontEnd: "https://github.com/mdnriyas17/Postman-app",
      githubBackEnd: "",
      sourceCode: "https://chimerical-pothos-f79cba.netlify.app/",
      shortNote:
        "The app is used to Know the Weather of All Country.",
      longNote: [
       
        "This is my first **JavaScript DOM rendering** project. And main feature of the website is the **search option** and **HTML** elements are **rendered only JavaScript DOM**.",
        "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        "I have  used **mock api** in **Weather App** and this it is used to given any Country they give they **which Region that Country can be located and give Weather**.",
        "This  **website is responsive** for **all screen size**.",
        
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          //  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
    {
      key: ["javascript", "all","react"],
      img: "./asset/project/images.png",
      title: "Home Budget",
      githubFrontEnd: "https://github.com/mdnriyas17/webcode-2",
      githubBackEnd: "",
      sourceCode: "https://fanciful-dolphin-6a5a2f.netlify.app/",
      shortNote:
        "The app is used to Plan the Money-Management.",
      longNote: [
       
        "This is my first **Recat** project. And main feature of the website is the **Create Account**.",
        "The application is made using **React** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        "I have  used **React** in **Home-Budget** and this it is used to Plan All income and expences**.",
        "This  **website is responsive** for **all screen size**.",
        
      ],
      skills: [
        {
          name: "React",
      link: "https://img.icons8.com/officel/40/react.png",
        },
        // {
        //   name: "HTML5",
        //   link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        //   color: "#945915",
        // },
        {
          name: "CSS3",
          //  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
    // {
    //   key: ["javascript","Bootstrap" ],
    //   img: "./asset/project/wetherapp.png",
    //   title: "Mentor & Student Management",
    //   githubFrontEnd:
    //     "https://github.com/mdnriyas17/rest",
    //   githubBackEnd: "https://github.com/Shersha123/capstone-backend.git",
    //   sourceCode: "https://bejewelled-flan-ad009d.netlify.app",
    //   shortNote:
    //     "The app is used to store class Event Management for students.",
    //   longNote: [
    //     "This is  **fullstack** web application.",
    //     "The frontend is built using **React** with **React-Bootstrap** for styling.",
    //     "The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
    //     "Main concept of the app is use to **store class Event Management for students** details. And **particular student** for **database**and **how many completed individual tasks**.",
    //   ],
    //   skills: [
    //     {
    //       name: "Bootstrap",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    //     },
    //   ],
    // },
    // {
    //   key: ["react","Javascript"],
    //   img: "./asset/project/urlShort.png",
    //   title: "Money-Management",
    //   githubFrontEnd: "https://github.com/mdnriyas17/webcode-2",
      
    //   sourceCode: "https://fanciful-dolphin-6a5a2f.netlify.app/",
    //   shortNote:
    //     "Ticket booking is a process of selecting and making reservations for the cinema in a particular theatre via the online source.",
    //   longNote: [
    //     // "This is  **fullstack** web application",
    //     "The frontend is built using **React** with **Bootstrap** for styling.",
    //     "The backend is build with **Node.js** , **Express.js** and uses **MongoDB** as database.",
    //     "As the title suggests, the app can be used to shorten urls that can be **shared** with **anyone on the internet**.",
    //     "I have add **login/logout** feature. If the **user** is **loggedin** it will only show that users **data**. ",
    //     "I have used **JWT for authentication**.",
    //     "I added **forget password** feature.The forget password link will be **valid for 10m**.",
    //   ],
    //   skills: [
    //     {
    //       name: "React",
    //   link: "https://img.icons8.com/officel/40/react.png",
    //     },
        
    //     {
    //       name: "Bootstrap",
    //       link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    //     },
       
    //   ],
    // },
    
    {
      key: ["javascript", "all", "mockApi"],
      img: "./asset/project/postman.png",
      title: "Post Man",
      githubFrontEnd: "https://github.com/mdnriyas17/Postman-app",
      githubBackEnd: "",
      sourceCode: "https://chimerical-pothos-f79cba.netlify.app/",
      shortNote:
        "This is mock api website, it is used to given any Pincode they give they which Region that Pincode can be located.",
      longNote: [
        "This is my first **JavaScript DOM rendering** project. And main feature of the website is the **search option** and **HTML** elements are **rendered only JavaScript DOM**.",
        "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        "I have  used **mock api** in **Post Man** and this it is used to given any Pincode they give they **which Region that Pincode can be located**.",
        "This  **website is responsive** for **all screen size**.",
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          //  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
    {
      key: ["mockApi", "html", "css", "all", "javascript", "React"],
      img: "./asset/project/thirukural.png",
      title: "Thirukural",
      githubFrontEnd: "https://github.com/mdnriyas17/thirukural",
      githubBackEnd: "",
      sourceCode: "https://glittering-croissant-05d28f.netlify.app/",
      shortNote:
        "This is my hackathon project. I applied the pagination concept, And finally completed the project in 4hrs.",
      longNote: [
        "This is **my Own project**.",
        "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        "I have used **mock api** in **Thirukural offical site**.",
        "All **HTML** elements are **rendered only in JavaScript DOM**.",
        "Finally, I **completed** the **project in 4hrs**.",
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
  ];

  let datas = data.filter((item) => item.key.some((items) => items === value));
  return (
    <Element name="project">
      <div className=" project">
        <h1>
          My Recent <span className="project-highlight">Works</span>
        </h1>
        <div className="dropdown">
          <select
            name=""
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="javascript">JavaScript DOM</option>
            <option value="react">React JS</option>
            <option value="node">Node JS</option>
            <option value="mockApi">Mock Api</option>
            <option value="restApi">Rest Api</option>
            <option value="mern">MERN</option>

          </select>
        </div>
        <div className="row project-container">
          {datas.length > 0 &&
            datas.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
        </div>
      </div>
    </Element>
  );
}

export default Project;
