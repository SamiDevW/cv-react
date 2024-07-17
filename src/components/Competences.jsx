import React, { useEffect, useState } from "react";
import "../custom.css";
import { FaLaptop } from "react-icons/fa";
import { url } from "../Config/Config";
export default function Competences() {
	const [competences, setCompetences] = useState("");
	async function fetchCompetences() {
		const response = await fetch(url + "competence"); // url linked to the server
		const data = await response.json();
		console.log(data);
		setCompetences(data);
	}
	useEffect(() => {
		fetchCompetences();
	}, []);
	return (
		<div>
			<h2>
				Technologies <FaLaptop />
			</h2>
			<div className='flex '>
				{competences &&
					competences.map((item) => (
						<div
							className=' font-bold flex p-2 pl-3 '
							key={item._id}
						>
							<p>{item.skill}</p>
						</div>
					))}
			</div>
		</div>
	);
}
