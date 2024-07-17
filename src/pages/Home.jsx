import React, { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Competences from "../components/Competences";
import Langues from "../components/Langues";
import Interets from "../components/Interets";
import Formation from "../components/Formation";
import RingLoader from "react-spinners/RingLoader";
import Experiences from "../components/Experiences";

const url = "https://cv-react-api.onrender.com/contact";
export default function Home() {
	const color = "white";
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	return (
		// if loading is true "loading ?"  then do what is after ':'
		<div>
			{loading ? (
				<div className='loadingBg flex justify-center items-center w-full h-screen '>
					<div>
						<RingLoader
							color={color}
							loading={loading}
							size={150}
							aria-label='Loading Spinner'
							data-testid='loader'
						/>
						<p className='text-white text-center font-bold'>
							IMPORTING DATA...
						</p>
					</div>
				</div>
			) : (
				<div className='pagesBg text-black flex flex-col'>
					<section className='contactBlock   p-2 m-2 '>
						<Contact />
					</section>
					<div className='flex max-md:flex-col max-md:items-center'>
						<section className='careerBlock  ml-3 w-1/2 mr-3 max-md:w-10/12  '>
							<Formation />
							<Experiences />
						</section>
						<section className='competencesBlock  ml-3  w-1/2 p-1  rounded-lg h-fit'>
							<Competences />
							<Langues />
							<Interets />
						</section>
					</div>
				</div>
			)}
		</div>
	);
}
