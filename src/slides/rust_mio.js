import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';

const mainSource = `
// Create a poll instance
let poll = Poll::new().unwrap();

// Setup the server socket
let server = TcpListener::bind(&addr).unwrap();

// Start listening for incoming connections
poll.register(&server, ...).unwrap();

..........

loop {
    poll.poll(&mut events, None).unwrap();

    for event in events.iter() {
        match event.token() {
            ..........
        }
    }
}
`;

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Rust MIO for base IO</Text>
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