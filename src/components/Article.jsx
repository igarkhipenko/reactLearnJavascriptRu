import React, { PureComponent } from 'react'

class Article extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: props.defaultOpen,
			count: 0
		}
	}

	componentWillMount() {
		console.log('mounting')
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({ 
			isOpen: nextProps.defaultOpen 
		})
	}

	componentWillUpdate() {
		console.log('will update')
	}

	render() {
		const { article } = this.props
		const style = { width: '50%' }
		const body = this.state.isOpen && <section className='card-text'>{article.text}</section>
		return (
			<div className='card mx-auto' style={style}>
				<div className='card-header'>
					<h2 onClick={this.clickCounter}>
						{article.title}
						clicked {this.state.count}
						<button className='btn btn-primary float-right' onClick={this.handleClick}>
							{this.state.isOpen ? 'Close' : 'Open'}
						</button>
					</h2>
				</div>
				<div className='card-body'>
					<h6 className='card-subtitle text-muted'>
						creation date: {(new Date(article.date)).toDateString()}
					</h6>
					{body}
				</div>
			</div>
		)
	}

	clickCounter = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Article