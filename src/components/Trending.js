import React from 'react'; //importe les fonctionailté de react
import { httpTrending} from '../api/touitapi'; //importe le dossier touitapi

class trending extends React.Component {//class enfant du fichier Componnent
    constructor(props) {//contstructeur pour initailiser les props et le state
        super(props);//appel les props parents
        this.state = {//permet de créer une  variable trend intialisé avec un tableau vide
            trend:[]
        };
    }
    componentDidMount() {//quand le compos ant est monté se référé (https://medium.com/@sgobinda007/playing-with-component-lifecycle-methods-of-react-16-3-4c946c1e6982)
        httpTrending((resp) => {//appel la fonction dans touit api qui permet de recevoir le trending à partir de l'url
            this.setState({//permet de modifier la variable trend en remplissant la fonction callback(contient les data=donées) dans touit api qui en voit les donné précisé dans l'url de la fonction(/trending)
              trend: resp
            });
            
        });
        
    }
    
    render() {
        const trend = this.state.trend;//declare une variable pour contenir les donnés  apelé dans le set this state
        
        
         return (
         <div className="container_trend">
              
                { 
                    Object.entries(trend).sort((a,b)=>a[1]-b[1]).map((word,index)=><div className="trend" key={index}>{word[0]}</div>)
                    // compile la fonction transforme en tableau  l'objet trend qui contient le trending avec la fonction tri par ordre selon sont index numérote et finit avec map pour trier le trending en individuel appel aussi l'index en parametre pour qu'il puisse se réfré à une clef id
                    
                     }
                     
                            
                       
       
           
  
                            
                        

                     





            </div>



         )

         
    }

}

export default trending;;//export le fichier