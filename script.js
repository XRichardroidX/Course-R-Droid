const mobileMenu = document.querySelector('.mobile-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const courses = document.querySelector('.courses');
const tutors = document.querySelector('.tutors');

  mobileMenu.addEventListener('click',()=>{
    if(mobileNav.className === 'mobile-nav'){
        mobileNav.classList.add('mobile-nav-active');
    }else{
        mobileNav.classList.add('mobile-nav');
    }
    });

const object = [
  {
    title: 'CS Maths',
    description: 'This is a good course related to algera and abstract logic for CS majors',
  },
  {
    title: 'CS Physics',
    description: 'I think you should consider subscribing bro or sis...!',
  },
  {
    title: 'CS50X',
    description: 'This is a good course which is currently used in Havard"s CS for beginners.',
  }
];


const tutorObject = [
  {
    image: "images/1.jpeg",
    tutorName: "Virea Tert",
    school: "Talent Scout, AXER Academy",
    words: "Nobody Scouts like he does"
  },
  {
    image: "images/2.jpeg",
    tutorName: "Leroy Tim",
    school: "Technical lead, RETA Football",
    words: "A very important member"
  },
  {
    image: "images/3.jpeg",
    tutorName: "Bella Withers",
    school: "MIT",
    words: "A very important member"
  },
  {
    image: "images/4.jpeg",
    tutorName: "Shingiri Rivera",
    school: "Assistant Technical lead",
    words: "A very important member"
  },
  {
    image: "images/5.jpeg",
    tutorName: "FLox Pena",
    school: "Havard",
    words: "A very important member"
  },
  {
    image: "images/6.jpeg",
    tutorName: "Siempre Agua",
    school: "Oxford University",
    words: "A very important member"
  },
];


object.forEach((item)=>{
  const card = `<div class="card">
  <h3>${item.title}</h3>
  <p>${item.description}</p>
  <a href="#"><div class="button">Click</div></a>
</div>`;
 courses.insertAdjacentHTML('afterbegin', card);
});


tutorObject.forEach((number)=>{
  const tutorCard = `<div class="professor">
  <img src="${number.image}" alt="1">
  <div class="info">
      <div class="name">${number.tutorName}</div>
      <div class="school">${number.school}</div>
      <hr width="25%">
      <div class="words">${number.words}</div>
  </div>
</div>`;
   tutors.insertAdjacentHTML("afterbegin", tutorCard);
});