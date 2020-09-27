import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import "./styles/index.scss";
import StoreProvider from "./utils/store/contextProvider";

function App() {
	return (
		<div className="App">
			<HashRouter basename="/">
				<StoreProvider>

					<Routes />
				</StoreProvider>
			</HashRouter>
		</div>
	);
}

export default App;
