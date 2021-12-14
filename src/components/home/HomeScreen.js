import { testApi, testNode , testRoute } from "api/node/test";
import { useEffect, useState } from "react";
import { PagosModal } from './../modals/pagos/PagosModal';
import { MovieCategoryList } from './../movies/movieCategorylist/MovieCategoryList';
import { Player } from './../movies/player/Player';

export const HomeScreen = () => {
	const [estadoModal, cambiarEstadoModal1] = useState(false);
	/* const [node, setNode] = useState('');
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
	 */
	return (
		<div>
			<PagosModal >
				<Player/>
			</PagosModal>
		</div>
	)

}
