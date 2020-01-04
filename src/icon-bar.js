import React from 'react';
import './icon-bar.css'

export const IconBar = ({ orientation = 'horizontal' }) => {
    const className = `icon-bar icon-bar_${orientation}`;
return (
    <div className={className}>
        <a class="active" href="#"><i class="fa fa-home"></i></a>
        <a href="#"><i class="fa fa-search"></i></a>
        <a href="#"><i class="fa fa-envelope"></i></a>
        <a href="#"><i class="fa fa-globe"></i></a>
        <a href="#"><i class="fa fa-trash"></i></a>
    </div>
);
}
// const classIconMap = {
//     facebook: 'fa fa-facebook',
//     twitter: 'fa fa-twitter',
// }

// export class IconBar extends Component {

//     render() {
//         return <a href="#" className={classIconMap[this.props.type]}></a>
//     }
// }

// const IconBar = ({ name, children }) => (
//     <i className={`fa fa-${name}`}>{children}</i>
// );

// const Active = ({children, type }) => {
//     const className = classNames("fa", `fa-${type}`
//     );
//     return (<a href="#"><i className={className}></i></a>)
// };

