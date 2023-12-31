import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import arrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
<div className="programs" id="programs">
<div className="program-header">
<span className="stroke-text">EXPLORE OUR</span>
<span>PROGRAMS</span>
<span className="stroke-text">TO SHAPE YOU</span>
</div>

<div className="prog-categories">
{programsData.map((program)=>(
<div className="category">
{program.image}
<span>
{program.heading}
</span>

<span>
{program.details}
</span>

<div className="join-now">
<span>Join Now</span>
<img src={arrow} alt="right-arrow" />
</div>
</div>
))
}

</div>
</div>

)
}

export default Programs