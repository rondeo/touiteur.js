import React from 'react';

class Touit extends React.Component {

    render() {
        const { name, message } = this.props;

        return (
            <div className="touitos" >
                <p className="message">{message}</p>
                <br></br>
                <span className="name">{name} </span>

            </div>





        );
    }

}

export default Touit;
