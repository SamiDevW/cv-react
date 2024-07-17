import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import { PiFloppyDiskBackBold } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { enqueueSnackbar } from "notistack";
import { FaPencilAlt } from "react-icons/fa";
import "../custom.css";

const url = "https://cv-react-api.onrender.com/competence";
export default function AdminCompetences() {
	const [competences, setCompetences] = useState("");
	const [skill, setSkill] = useState("");
	const [updSkill, setUpdSkill] = useState("");
	const [isAdd, setIsAdd] = useState(false);
	const [isModify, setIsModify] = useState(true);
	// GET DATA
	async function fetchCompetences() {
		const response = await fetch(url); // url linked to the server
		const data = await response.json();
		console.log(data);
		setCompetences(data);
	}
	useEffect(() => {
		fetchCompetences();
	}, []);
	// POST
	async function handleSave() {
		if (skill !== "") {
			// e.preventDefault()
			console.log(skill);
			const response = await fetch(url, {
				method: "POST", // type of the http request
				headers: {
					// headers indicating the type of data sent
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ skill }), // the element sent in the body
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setSkill("");
				fetchCompetences();
				enqueueSnackbar(data.message, {
					variant: "success",
					autoHideDuration: 2000,
					anchorOrigin: {
						horizontal: "center",
						vertical: "top",
					},
				});
			}
		}
	}
	// Delete
	async function handleDelete(id) {
		console.log(id);
		const response = await fetch(url + `/${id}`, {
			method: "DELETE",
		});
		if (response.ok) {
			const data = await response.json();
			enqueueSnackbar(data.message, {
				variant: "warning",
				autoHideDuration: 2000,
				anchorOrigin: {
					horizontal: "right",
					vertical: "top",
				},
			});
			console.log(data);
			fetchCompetences();
		}
	}
	async function updateSkill(id) {
		const response = await fetch(url + `/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ updSkill }),
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
		}
	}
	// function toggleModify() {
	// 	setIsModify(true);
	// }
	function addSkill() {
		setIsAdd(true);
	}
	function handleCancel() {
		setIsAdd(false);
	}
	return (
		<div>
			<div>
				<h2 className='leftBar text-center w-auto  mt-4 py-2'>Competences</h2>
				<button
					className='btn btn-outline btn-info my-1'
					onClick={addSkill}
				>
					<CiCirclePlus size={24} />
				</button>
				{isAdd && (
					<div>
						<div className='flex gap-2'>
							<input
								className='customInput input input-bordered input-primary w-full my-1'
								type='text'
								value={skill}
								onChange={(e) => setSkill(e.target.value)}
							/>
							<button
								className='btn btn-outline btn-success my-1'
								onClick={handleSave}
							>
								<PiFloppyDiskBackBold />
							</button>
							<button
								className='btn btn-outline btn-error my-1'
								onClick={handleCancel}
							>
								<MdCancel />
							</button>
						</div>
					</div>
				)}
			</div>

			<div>
				{competences &&
					competences.map((item) => (
						<div
							className='secondaryBg flex items-center gap-9 justify-between'
							key={item._id}
						>
							<p>{item.skill} </p>

							{/* <p>{item._id}  </p> */}
							<button
								onClick={() => {
									handleDelete(item._id);
								}}
								className='btn btn-error text-white my-1'
							>
								<MdDelete />
							</button>
						</div>
					))}
			</div>
		</div>
	);
}
