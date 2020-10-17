import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./styles/index.scss";
import StoreProvider from "./utils/store/contextProvider";

function App() {
	return (
		<div className="App">
			<BrowserRouter basename="/">
				<StoreProvider>

					<Routes />
				</StoreProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
