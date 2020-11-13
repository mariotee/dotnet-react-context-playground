import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

interface IProps {
    children: React.ReactNode;
}

export default (props: IProps) => {
    return <div>
        <NavMenu />
        <Container>
            {props.children}
        </Container>
    </div>
}