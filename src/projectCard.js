import React, { Component } from 'react'

//Props:
//id
//title
//image
//alt
//href
//children

//State:
//descShown (Boolean)
export class ProjectCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
             expanded: false
        }
    }

    click = () => {
        console.log('click fired')
        this.setState({expanded: !this.state.expanded})
    }
    
    render() {
        return (
        <div className='card accordion' id={this.props.id}>
            <img className='card-img-top' src={this.props.image} alt={this.props.alt}/>
            <div className='card-body'>
                <h4 className='card-title'>
                    <a className='card-link card-link-2' target="_blank" rel="noreferrer" href={this.props.href}>{this.props.title}
                    {this.props.external && this.props.external === 'true' ? <i class="fa fa-external-link" style={{marginLeft: '0.4em', fontSize: '1rem'}}></i> : null}</a>
                </h4>
                
                <a onClick={this.click}  className='card-link' data-toggle='collapse' href={`#desc${this.props.id}`}>
                    {this.state.expanded ? 'Hide' : 'View'} Description
                </a>
                <div id={`desc${this.props.id}`} className='collapse card-desc' data-parent={`#${this.props.id}`}>
                    {this.props.children}
                </div>
            </div>
        </div>
        )
    }
}

export default ProjectCard
