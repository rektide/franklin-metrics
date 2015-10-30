import React, { Component } from "react"
import { NICE, SUPER_NICE } from "./colors"
import inherits from "inherits"

export function Counter( props){
	//super(props)
	Counter.super_.call( this, props)
	this.state= {counter: 0}
	this.interval= setInterval(() => this.tick(), 1000)
	return this
}
inherits( Counter, Component)

Counter.prototype.tick= function(){
	this.setState({
		counter: this.state.counter+ this.props.increment
	})
}

Counter.prototype.componentWillUnmount= function(){
	clearInterval( this.interval)
}

Counter.prototype.render= function(){
	return (
		<h1 style={{color: this.props.color}}>
			Counter ({this.props.increment}): {this.state.counter}
		</h1>
	)
}

export function App(){
	return this
}
inherits( App, Component)

App.prototype.render= function(){
	return (
		<div>
			<Counter increment={1} color={NICE} />
			<Counter increment={5} color={SUPER_NICE} />
		</div>
	)
}
