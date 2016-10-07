import React from 'react';

export default class ReadingTime extends React.Component {

    // ES7+ property initialisers
    // See https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html
    static propTypes = {
        wordsPerMinute: React.PropTypes.number,
        textColour: React.PropTypes.string
    };
    static defaultProps = {
        wordsPerMinute: 270,
        textColour: '#aaa'
    };

    constructor(props) {
        super(props);

        this.state = {
            wordCount: 0,
            readTime: 0
        };
    }

    // Use this for the initial render
    componentWillMount() {
        this.updateReadingTime(this.props);
    }

    // Uses this for when new properties are received
    componentWillReceiveProps(nextProps) {
        this.updateReadingTime(nextProps);
    }

    countWords(text) {
        return text.split(/\s+/).length;
    }

    updateReadingTime(props) {
        const wordCount = this.countWords(props.text);
        const readTime = Math.round(wordCount / props.wordsPerMinute);

        console.log(props)

        this.setState({
            wordCount,
            readTime
        });
    }

    render() {
        const { textColour, ...rest } = this.props;
        const { wordCount, readTime } = this.state;
        const minuteIdentifier = 'minute' + (readTime === 1 ? '' : 's')

        return (
            <div {...rest}>
                <p style={{ color: textColour }}>
                    Word count: <br/>
                    <span>{ wordCount }</span>
                </p>
                <p style={{ color: textColour }}>
                    Estimated read time: <br/>
                    <span>{ readTime } { minuteIdentifier }</span>
                </p>
            </div>
        );
    }
}
