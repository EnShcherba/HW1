import React, {Component} from 'react';

const classIconMap = {
    facebook: 'fa fa-facebook',
    twitter: 'fa fa-twitter',
}

export class SocialButton extends Component {

    render() {
        return <a href="#" className={classIconMap[this.props.type]}></a>
    }
}