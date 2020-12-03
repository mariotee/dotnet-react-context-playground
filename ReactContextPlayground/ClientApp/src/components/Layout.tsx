import * as React from 'react';
import { Container } from 'reactstrap';

import NavMenu from 'components/NavMenu';

interface IProps {
    children: React.ReactNode;
}

export default (props: IProps) => {
    return <React.Fragment>
        <NavMenu />
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
}