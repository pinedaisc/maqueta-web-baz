import { testApi, testNode , testRoute } from "api/node/test";
import { useEffect, useState } from "react";

export const HomeScreen = () => {

	const [node, setNode] = useState('');
	const [nodeRoute, setNodeRoute] = useState('');
	const [nodeApi, setNodeApi] = useState('');
	let data = "valor enviado";

	useEffect(()=>{
		testNode( )
            .then( ({data}) => {
                    setNode(data.respuesta);
                }  
            );
		testRoute(data)
			.then(({data})=>{
					setNodeRoute(data.respuesta);
				}
			);
		testApi()
            .then( ({data}) => {
                    setNodeApi(data.respuesta);
                }  
            );
    },[ ]);
	
	return (
		<div>
			<h1 className="text-center">Home Component</h1>	
			<p>{node}</p>
			<p>{nodeRoute}</p>
			<p> {nodeApi}</p>
			<img src={nodeApi}></img>
		</div>
	)

}
