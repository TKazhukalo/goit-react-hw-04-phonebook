import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, Title } from "./Section.styled";

 export const Section=({title,children})=> {
        return (
            <SectionContainer>
                <Title>{title}</Title>
                {children}
            </SectionContainer>
        );
    }
Section.propTypes = {
    title: PropTypes.string.isRequired,
};

// Section.propTypes = {
//     title: PropTypes.string.isRequired,
// };
// export class Section extends Component {
//     render() {
//         const { title, children } = this.props;
//         return (
//             <SectionContainer>
//                 <Title>{title}</Title>
//                 {children}
//             </SectionContainer>
//         );
//     }
// }

// Section.propTypes = {
//     title: PropTypes.string.isRequired,
// };