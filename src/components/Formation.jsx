import React, { useEffect, useState } from "react";
import { url } from "../Config/Config";
export default function Formation() {
	const [trainings, setTrainings] = useState([]);
	async function fetchTrainings() {
		try {
			const response = await fetch(url + "training");
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setTrainings(data);
			}
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchTrainings();
	}, []);
	return (
		<div>
			<h2>Formations</h2>
			{trainings &&
				trainings.map((x) => (
					<div
						key={x._id}
						className='careerElement'
					>
						<tr>
							<td className='font-bold'>{x.establishment}</td>
						</tr>
						<tr>
							<td>{x.year}</td>
						</tr>
						<tr>
							<td>{x.degree}</td>
						</tr>
					</div>
				))}
		</div>
	);
}
