import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {


    componentDidMount() {
        // axios makes http request instead of using hard code.
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
            // drag http response back and then assign the local variables to it.
            .then((response) => {
                this.setState({ books: response.data })
            })
            // catch errors.
            .catch((error) => {
                console.log(error);
            })
    }
    // store variables in the array.
    state = {
        books:
            [

            ]
    };

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );

    }
}
