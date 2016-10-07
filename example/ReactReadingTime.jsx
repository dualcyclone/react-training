import React from 'react';
import ReactDOM from 'react-dom';
import ReadingTime from '../src/ReadingTime';

class ReactReadingTime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Lorem ipsum Curabitur rutrum odio sit amet felis iaculis, pretium aliquam arcu semper. Sed feugiat dictum feugiat. Proin commodo placerat quam sed viverra. Suspendisse maximus eros in tincidunt aliquam. Pellentesque quis feugiat metus. Sed tempor, justo eget porttitor pretium, purus justo consectetur urna, mollis sagittis felis ligula eu dui. Mauris metus lorem, blandit vitae porta eu, feugiat non magna. In vitae quam id neque mattis efficitur id ut lectus. Donec sed laoreet est, quis interdum dui. Morbi eu odio consequat, interdum quam eu, eleifend erat. Sed turpis augue, consequat eu eros non, congue pulvinar tortor. Donec sed orci vitae augue ullamcorper porttitor et at sapien. Duis consequat nisl dolor, ut efficitur sapien fringilla sit amet. Aliquam mattis, nisl in aliquet tincidunt, turpis dolor aliquam ipsum, sed rhoncus neque nunc a libero. Proin sodales, felis nec faucibus consectetur, libero odio posuere sem, at hendrerit mi dui at orci. Morbi dapibus porta felis, vitae mollis justo volutpat sollicitudin.'
        };
    }

    updateText(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div className='container' style={{ marginTop: '50px' }}>
                <div className='col-lg-8 col-lg-offset-2 form-group'>
                    <textarea
                        value={this.state.text}
                        onChange={::this.updateText} // same as this.updateText.bind(this,...)
                        className='form-control'
                        style={{ height: '500px', resize: 'none' }}>
                    </textarea>
                </div>
                <ReadingTime text={this.state.text} className='col-lg-2 well' />
            </div>
        );
    }
}

ReactDOM.render(
    <ReactReadingTime />,
    document.getElementById('react')
);
