import React, {useContext} from "react";
import Store from "../../utils/store";
const Home = ()=>{
	const [appStore] = useContext(Store);
	return(<div>{JSON.stringify(appStore, undefined, 2)}</div>);
};

export default Home;