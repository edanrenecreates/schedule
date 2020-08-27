import React, { Component } from 'react';
import Icon from '../icon';

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        {Icon('fas fa-check', 'library-course__icon')}
        {/* Arrow Component */}
        {/* Action button component */}
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum urna, lacinia et diam a, semper auctor nunc. Sed tellus sem, semper et lacus mollis. </p>
        </div>
      </div>
    )
  }
}

export default LibraryCourse;