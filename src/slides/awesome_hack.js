import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';

const mainSource = `
// Reading data from IO
let raw_data = ...;

// Making packaged logic with data
let poll = move |...| {
    // some smart things
    let decoded_data = some_decode(raw_data);
    
    decoded_data
};

`;

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Closures Hack 🎉</Text>
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