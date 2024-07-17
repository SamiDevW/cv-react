import React, { useEffect, useState } from "react";
import { MdSportsSoccer } from "react-icons/md";
import { url } from "../Config/Config";
export default function Interets() {
	const [interets, setInterets] = useState([]);
	async function fetchInterets() {
		const response = await fetch(url + "interets");
		if (response.ok) {
			const data = await response.json();
			setInterets(data);
		}
	}
	useEffect(() => {
		fetchInterets();
	}, []);
	return (
		<div>
			<h2>
				Centres d'interets <MdSportsSoccer />
			</h2>
			<div>
				{interets &&
					interets.map((item) => (
						<div className='p-2 pl-3  flex justify-between  items-center gap-9'>
							<p>{item.activity} </p>
						</div>
					))}
			</div>
		</div>
	);
}
