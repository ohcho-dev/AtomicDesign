import { Fragment } from 'react'
import App from 'next/app'

class MyApp extends App {

	constructor(props) {
		super(props)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Fragment>
				<Component {...pageProps} />
			</Fragment>
		)
	}
}

export default MyApp
