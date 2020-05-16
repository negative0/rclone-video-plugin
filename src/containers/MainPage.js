import React from 'react';
import ReactAwesomePlayer from 'react-awesome-player'

class MainPage extends React.Component {

	componentDidMount() {
		let url_string = window.location.href;
		let url = new URL(url_string);
		this.setState({
			loadUrl: url.searchParams.get("loadUrl"),
			mimeType: url.searchParams.get("mimeType")
		},()=>{
			console.log(this.state)
		} );

	}

	constructor(props) {
		super(props);
		this.state = {
			loadUrl: "",
			mimeType: ""
		}
	}

	loadeddata() {
		console.log('loadeddata')
	}
	canplay() {
		console.log('canplay')
	}
	canplaythrough() {
		console.log('canplaythrough')
	}
	play() {
		console.log('play')
	}
	pause() {
		console.log('pause')
	}
	waiting() {
		console.log('waiting')
	}
	playing() {
		console.log('playing')
	}
	ended() {
		console.log('ended')
	}
	error() {
		console.log('error')
	}

	render () {

		const {loadUrl, mimeType} = this.state;
		// console.log(loadUrl, mimeType);
		if(loadUrl && mimeType) {
			const options = {
				poster: "http://pic2.52pk.com/files/130514/1283314_143556_2145.jpg",
				sources: [{
					type: mimeType,
					src: loadUrl
				}],
				subtitles: [],
				defaultSubtitle: 'en'
			}
			return <ReactAwesomePlayer
				options={options}
				loadeddata={this.loadeddata}
				canplay={this.canplay}
				canplaythrough={this.canplaythrough}
				play={this.play}
				pause={this.pause}
				waiting={this.waiting}
				playing={this.playing}
				ended={this.ended}
				error={this.error}
			/>
		}
		return null;
	}
}
export default MainPage;
