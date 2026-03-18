import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  componentDidCatch(error) {
    this.setState({ error: error.message })
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, fontFamily: 'monospace', fontSize: 12, color: '#f00', background: '#000', height: '100vh', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
          ERROR:{'\n'}{this.state.error}
        </div>
      )
    }
    return this.props.children
  }
}
