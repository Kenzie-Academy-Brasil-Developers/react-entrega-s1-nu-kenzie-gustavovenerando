import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import TotalMoney from "./components/TotalMoney/TotalMoney.js";
import List from "./components/List/List.js";
import Home from "./components/Home/Home.js";

function App() {
	const [listTransactions, setListTransactions] = useState([]);
	const [appPageStatus, setAppPageStatus] = useState(false);
	const [filterList, setFilterList] = useState([]);

	const filterEvent = (filterName) => {
		if (filterName === "todos") {
			setFilterList(listTransactions);
		} else {
			setFilterList(
				listTransactions.filter(
					({ type }) => type.toLowerCase() === filterName
				)
			);
		}
	};

	return appPageStatus ? (
		<div className="App">
			<header>
				<Header setAppPageStatus={setAppPageStatus} />
			</header>
			<main>
				<div className="main_general_info">
					<Form
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
					/>
					<TotalMoney listTransactions={listTransactions} />
				</div>

				<List
					listTransactions={filterList}
					setListTransactions={setListTransactions}
					filterEvent={filterEvent}
					originalListTransactions={listTransactions}
				/>
			</main>
		</div>
	) : (
		<Home setAppPageStatus={setAppPageStatus} />
	);
}

export default App;
