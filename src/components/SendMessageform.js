import React from 'react';//importe les fonctionailté de react
import { httpPostMessage } from '../api/touitapi';//importe le dossier touitapi


class SendMessageform extends React.Component {//class enfant du fichier Componnent

    constructor(props) {//contstructeur pour initailiser les props et le state
        super(props);//appel les props parents
        this.state = {//permet de créer une  variable name et message intialisé avec un parmétre vide indiquant qu'un texte
            name: '',message:''
        };
      
  }
 
  Changename=(event) => {//declare une fonction avec le paramétre  event
    this.setState({name: event.target.value});//réinitialise la valeur de la variable name en ciblant sa valeur entrée par l'utilisaeur
   }
 
   handleChangemessage=(event)=> {//declare une fonction avec le paramétre  event
    this.setState({message: event.target.value});//réinitialise la valeur de la variable message en ciblant sa valeur entrée par l'utilisaeur
   }
 
   handleSubmit=(event)=> {//declare une fonction avec le paramétre  event qui soumet la valeur entré par  les fonctions ci dessus
    alert('message envoyé ' + this.state.name);//permet  d'nvoyé un message d'alert dans l'écran avec le conte précise dans les parenthése
    event.preventDefault();//permet de stoper l'event
    httpPostMessage(this.state.name, this.state.message, (index) =>index)//reprend la fonction post message contenu dans touit api qui permet de récupére les vlur entré dans le dom en lui indiquant l'index 
    this.setState ({name: '',message: ''});//reinitialise la variable message à zéro une fois le message envoyé
   }
 
 
   render() {
    return (
      <div className= "formu">
       
     <form onSubmit={this.handleSubmit}>
       
      <label className= "enter">
       Name:
       
       <input className="nametouit"type="text" value={this.state.name} onChange={this.Changename} />
       Message:
       <input className="sendtouit" type="text" value={this.state.message} onChange={this.handleChangemessage} />
      </label>
      
      <input className="push" type="submit" value="Envoyer" />
     </form>
     </div>
    
    );
   }
 
 }

export default  SendMessageform;