import React from 'react';

class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidMount() {
        console.log("Error Mounted.");
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            error: error,
        });
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>These aren't the droids you're looking for.</h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;