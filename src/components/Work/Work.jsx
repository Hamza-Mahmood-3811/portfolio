import React from 'react';
import WorkItem from './WorkItem/WorkItem.jsx';

const data = [
  {
    year: '20XX',
    title: 'Job title 1',
    duration: 'X years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi. Ut faucibus pulvinar elementum integer enim neque. Leo vel orci porta non pulvinar neque. Cras ornare arcu dui vivamus arcu.'
  },
  {
    year: '20XX',
    title: 'Job title 2',
    duration: 'X years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi. Ut faucibus pulvinar elementum integer enim neque. Leo vel orci porta non pulvinar neque. Cras ornare arcu dui vivamus arcu.'
  },
  {
    year: '20XX',
    title: 'Job title 3',
    duration: 'X years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi. Ut faucibus pulvinar elementum integer enim neque. Leo vel orci porta non pulvinar neque. Cras ornare arcu dui vivamus arcu.'
  },
  {
    year: '20XX',
    title: 'Job title 4',
    duration: 'X years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi. Ut faucibus pulvinar elementum integer enim neque. Leo vel orci porta non pulvinar neque. Cras ornare arcu dui vivamus arcu.'
  }
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
  );
};

export default Work;