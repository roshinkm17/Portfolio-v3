import React from 'react'

function Profiles() {
    const Profiles = [
        {
            name: "Email",
            icon: "fas fa-envelope",
            href: "mailto:roshinkm17@gmail.com"
        },
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            href: "https://linkedin.com/in/roshinkm"
        },
        {
            name: "GitHub",
            icon:"fab fa-github",
            href: "https://github.com/roshinkm17"
        },
        {
            name: "Dribbble",
            icon:"fab fa-dribbble",
            href: "https://dribbble.com/roshinkm17"
        }
    ];
    return (
        <div className="flex w-full md:justify-start justify-center ">
            {
                Profiles.map(profile => (
                    <div key={profile.name}
                    className="text-3xl cursor-pointer text-gray-200 profile-link mr-6">
                        <a className="text-bold" href={profile.href} target="_blank"><i className={profile.icon}></i></a>
                    </div>
                ))
            }
        </div>
    )
}

export default Profiles
