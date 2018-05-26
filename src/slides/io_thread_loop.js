import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';

const mainSource = `
....
....

loop {
    poll.poll(&mut events, None).unwrap();

    for event in events.iter() {
        let (token, kind) = (event.token(), event.kind());
        if token == NEW_TCP_CONNECTION {
            
            // Reading TCP socket from channel transfer
            let tcp_socket = smart_way_to_receive(&receiver_chan);
            
            // Registering TCP socket to current POll service
            poll.register(tcp_socket, ...);
            
            // keeping socket in memory for later usage
            connections.insert(token, tcp_socket);
        }
    }
}

`;

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>IO Thread Loop</Text>
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