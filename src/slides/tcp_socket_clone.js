import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';

const mainSource = `
// accepting TCP socket after handshake
let tcp_socket = ...

// Performing specific handshake
validate_connection(&tcp_socket);

// De-registering socket from main loop
poll.deregister(&tcp_socket);

// transferring socket to one of the loops
send_socket_to_next_loop(tcp_socket);

`;

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Main Handler Loop</Text>
                <CodePane
                    theme='light'
                    style={{ fontSize: 18 }}
                    source={mainSource}
                />
            </Slide>
        );
    }
}

export default PresentationSlide;