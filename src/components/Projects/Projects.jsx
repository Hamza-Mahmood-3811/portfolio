import React from 'react'
import ProjectItem from './ProjectItem/ProjectItem'
import tuneCord from '../../assets/tuneCord.jpg'
import kotlin from '../../assets/kotlin.jpg'
import hwHelper from '../../assets/HomeworkHelper.jpg'
import tribute from '../../assets/Tribute.jpg'

// Note: use images of the same sizes
const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi. Ut faucibus pulvinar elementum integer enim neque. Leo vel orci porta non pulvinar neque. Cras ornare arcu dui vivamus arcu.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={tuneCord} title='tuneCord'/>
        <ProjectItem img={kotlin} title='kotlin'/>
        <ProjectItem img={tribute} title='tribute'/>
        
        {/*<ProjectItem img={hwHelper} title='HomeworkHelper'/>*/}
      </div>
    </div>
  )
}

export default Projects