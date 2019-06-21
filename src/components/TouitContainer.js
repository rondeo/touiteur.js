import React from 'react';//importe les fonctionailté de react
import { httpGetMessage } from '../api/touitapi';//importe le dossier touitapi
import Touit from './Touit'//importe le dossier Touit




class TouitContainer extends React.Component {//class enfant du fichier Componnent
    constructor(props) {//contstructeur pour initailiser les props et le state
        super(props);//appel les props parents
        this.state = {//permet de créer une  variable Touits intialisé avec un tableau vide
            touits: []
        };

    }
    componentDidMount() {
    
        //quand le compos ant est monté se référé (https://medium.com/@sgobinda007/playing-with-component-lifecycle-methods-of-react-16-3-4c946c1e6982)
        httpGetMessage(0, (resp) => {//appel la fonction dans touit api qui permet de recevoir le tableau Json contenant le ts message.. à partir de l'url
            this.setState({//permet de modifier la variable trend en remplissant la fonction callback(contient les data=donées) dans touit api qui en voit les donné précisé dans l'url de la fonction(/list?tsé)
                touits: resp.messages
            });
        });

    }  


    render() {
            const { touits } = this.state;//declare une variable pour contenir les donnés  apelé dans le set this state
            return(
            <div className = "container_touit" >
                    {

                        touits.map((touit, index) => <Touit key={index} name={touit.name} message={touit.message} />)
                        
                        //récupére les donnée et le décomposé chaque index de messages en  message individuel puis pour chaque message récupéré avec le paramétre de index qui fait office de clef
                        //et permet d'appeller l'html initialiser  dans Touits 



                    }




            </div>





        );
    }

}

export default TouitContainer;//export le fichier