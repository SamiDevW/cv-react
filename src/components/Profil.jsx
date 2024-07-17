import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Profil({ nom, prenom, status }) {
	return (
		<div className='flex items-start'>
			<img
				className=' w-44 rounded-full border-4'
				src='./images/CV_2024-06-25_Sami_BENSEGHIR.jpg'
				alt=''
			/>
			<div className='flex flex-col justify-end h-full'>
				<h3 className='text-start pl-3 text-xl bg-transparent border-transparent font-bold w-auto rounded-xl'>
					{nom} {prenom}
				</h3>
				<h3 className='text-start mb-2 pl-3 text-lg w-3/4 bg-transparent border-transparent font-bold rounded-xl'>
					{status}
				</h3>
				<h3 className='flex pl-3 justify-start gap-2'>
					<Link to='https://www.linkedin.com/in/belkacem-sami-benseghir-b39664242/'>
						<FaLinkedin size={25} />
					</Link>
					<Link to='https://github.com/SamiDevW'>
						<FaGithub size={25} />
					</Link>
					<Link />
				</h3>
			</div>
		</div>
	);
}
