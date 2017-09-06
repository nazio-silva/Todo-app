import React from 'react'

export default props => { //aero function =>
	if(props.test) {
		return props.children
	} else {  
		return false
	}
}