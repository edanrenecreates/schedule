import { FETCH_COURSES } from './types';

function fetchCourses() {
  return {
    type: FETCH_COURSES,
    payload: [
      {
        title: "Up and Running with Redis"
        description: "In this course you'll lean how to work with efficient Redis database to manage key/value realationships"
      },
      {
        title: "HTML/CSS Bootcamp"
        description: "Learn HTML5 and CSS# from scratch ,starting with the basics and finishing by building five projects fro scratch"
      },
      {
        title: "UX For Developers"
        description: : "This User Experience (UX) couse examines how to develop a system for approaching application development and enhancing the experience for users"
      }
    ]
  }
}