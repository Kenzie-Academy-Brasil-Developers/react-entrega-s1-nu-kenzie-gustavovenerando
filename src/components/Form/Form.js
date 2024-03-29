import "../../reset.css";
import "./form.css";
import { useState } from "react";

function Form(props) {
	const [inputDescription, setInputDescription] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [inputType, setInputType] = useState("Entrada");
	const [contId, setContId] = useState(0);

	const handleEventClick = (event) => {
		event.preventDefault();

		console.log(inputValue);

		if (inputValue < 0) {
			alert("Nao é possivel inserir valor negativo");
			return null;
		}
		props.setListTransactions([
			...props.listTransactions,
			{
				transactionId: contId,
				description: inputDescription,
				value: inputType === "Entrada" ? inputValue : -inputValue,
				type: inputType,
			},
		]);

		setContId(contId + 1);
	};

	return (
		<form onSubmit={handleEventClick} className="main_form_conteiner">
			<h3>Descrição</h3>
			<input
				onChange={(event) => setInputDescription(event.target.value)}
				placeholder="Digite aqui sua descricao"
			/>
			<p>Ex: Compra de roupas</p>
			<div className="form_value_input_conteiner">
				<div className="value_conteiner">
					<h4>Valor</h4>
					<input
						onChange={(event) => setInputValue(event.target.value)}
						placeholder="0"
					/>
				</div>
				<div className="type_value_conteiner">
					<h4>Tipo de Valor</h4>
					<select
						// value="empty"
						id="value_type"
						defaultValue="Entrada"
						onChange={(event) => setInputType(event.target.value)}
					>
						{/* <option value="empty"></option> */}
						<option value="Entrada">Entrada</option>
						<option value="Despesa">Despesa</option>
					</select>
				</div>
			</div>
			<button type="submit">Inserir Valor</button>
		</form>
	);
}

export default Form;
