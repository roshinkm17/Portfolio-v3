import React from 'react'
import Project from './Project'
import Tilty from 'react-tilty'

function Projects() {
  const projects = [
    {
      title: 'Machtrac',
      desc:
        'Cross-platform application for KMT, Bangalore to monitor and assess honing machines live 24x7 using REST API from Adafruit.',
      href: 'https://play.google.com/store/apps/details?id=com.kmt.machtrac',
      github: 'https://github.com/roshinkm1717/machtrac',
    },
    {
      title: 'BillMore',
      desc:
        'Cross Platform application to create and share invoices. Includes report generation as a spreadsheet for the custom date range and Cloud Storage of invoices.',
      href:
        'https://play.google.com/store/apps/details?id=com.billmore.billmore',
      github: 'https://github.com/roshinkm17/billmore',
    },
    {
      title: 'Yelpcamp',
      desc:
        'A web application that lets users create and review campsites worldwide. Images are stored on Cloudinary cloud storage. User accounts are maintained using MongoDB',
      href: 'https://yelpcamp017.herokuapp.com',
      github: 'https://github.com/roshinkm17/yelpcamp',
    },
    {
      title: 'Frontend Mentor Challenges',
      desc:
        'Agency Landing Page, 3 Column Preview Card, Tip Calculator App Profile card component etc.',
      href: 'https://www.frontendmentor.io/profile/roshinkm17',
      github: 'https://www.frontendmentor.io/profile/roshinkm17',
    },
  ]

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
        {projects.map((project) => (
          <Tilty
          key={project.title}
            reverse={false}
            max={10}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Project
              key={project.title}
              title={project.title}
              desc={project.desc}
              href={project.href}
              github={project.github}
            />
          </Tilty>
        ))}
      </div>
    </div>
  )
}

export default Projects
