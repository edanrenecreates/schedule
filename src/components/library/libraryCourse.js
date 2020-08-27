import React, { Component } from 'react';

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        {/* Icon Component */}
        {/* Arrow Component */}
        {/* Action Button */}
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum urna, lacinia et diam a, semper auctor nunc. Sed tellus sem, semper et lacus mollis. </p>
        </div>
      </div>
    )
  }
}

export default LibraryCourse;