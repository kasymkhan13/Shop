import React, {Component} from "react";

export class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'as',
                }
            ]
        };
    };

    render () {
        return (
            <div>

            </div>
        );
    };
};

export default Categories;