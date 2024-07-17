import React, { useEffect, useState } from "react";
import { FaLanguage } from "react-icons/fa6";
import "../custom.css";
import { url } from "../Config/Config";
export default function Langues() {
	const [langues, setLangues] = useState([]);
	async function fetchLangues() {
		const response = await fetch(url + "langues");
		const data = await response.json();
		setLangues(data);
		console.log(data);
	}
	useEffect(() => {
		fetchLangues();
	}, []);

	return (
		<div>
			<h2>
				Langues <FaLanguage size={26} />
			</h2>
			<div>
				{langues &&
					langues.map((item) => (
						<p className='flex p-2 pl-3 items-center'>
							<span className=' w-full '>
								<strong>{item.name}</strong>: {item.level}
							</span>
						</p>
					))}
			</div>
		</div>
	);
}
