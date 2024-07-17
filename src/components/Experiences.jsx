import "../custom.css";
import React, { useEffect, useState } from "react";
import { url } from "../Config/Config";
export default function Experiences() {
	const [experiences, setExperiences] = useState([]);
	async function fetchExperiences() {
		try {
			const response = await fetch(url + "experience");
			if (response.ok) {
				const data = await response.json();
				setExperiences(data);
				console.log(data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchExperiences();
	}, []);
	return (
		<div>
			<h2>Experiences profesionelles</h2>
			<div className=''>
				{experiences &&
					experiences.map((x) => (
						<div
							className='careerElement'
							key={x._id}
						>
							<tr>
								<td className='font-bold '>{x.mission}</td>
							</tr>
							<tr>
								<td>{x.company}</td>
							</tr>
							<tr>
								<td>{x.year}</td>
							</tr>
						</div>
					))}
			</div>
		</div>
	);
}
