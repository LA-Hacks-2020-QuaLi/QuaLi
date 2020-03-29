import React from 'react';
import "./index.css";

export class ParallaxCard extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            mouseX: 0,
            mouseY: 0,
        }
        this.mouseLeaveDelay = null;
        this.myRefs = React.createRef();
    }
    componentDidMount() {
        const { offsetWidth, offsetHeight } = this.myRefs.current
        this.setState({
            width: offsetWidth,
            height: offsetHeight,
        })
    }


    mousePX() {
        const { mouseX, width } = this.state;
        return mouseX / width;
    }
      
    mousePY() {
        const { mouseY, height } = this.state;
        return mouseY / height;
    }
      
    cardStyle() {
        const rX = this.mousePX() * 30;
        const rY = this.mousePY() * -30;
        return {
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
        };
    }
      
    cardBgTransform() {
        const tX = this.mousePX() * -40;
        const tY = this.mousePY() * -40;
        return {
          transform: `translateX(${tX}px) translateY(${tY}px)`,
          backgroundImage: `url(${this.props.dataImage})`
        }
    }
    
    handleMouseMove(e) {
        const { width, height } = this.state;
        const { offsetLeft, offsetTop } = this.myRefs.current;
    
        this.setState({ 
            mouseX: e.pageX - offsetLeft - width/2,
            mouseY: e.pageY - offsetTop - height/2
        })
    }
      
    handleMouseEnter() {
        clearTimeout(this.mouseLeaveDelay);
    }
      
    handleMouseLeave() {
        this.mouseLeaveDelay = setTimeout(()=>{
            this.setState({
                mouseX: 0,
                mouseY: 0,   
            })
        }, 1000);
    }

    render() {
        const { title, text } = this.props;
        return (
        <div className="card-wrap"
            onMouseMove={(e) =>this.handleMouseMove(e)}
            onMouseEnter={(e) => this.handleMouseEnter(e)}
            onMouseLeave={(e) => this.handleMouseLeave(e)}
            ref={this.myRefs}>
            <div className="card" style={this.cardStyle()}>
                <div className="card-bg" style={this.cardBgTransform()}></div>
                <div className="card-info">
                    <h1 className="header">{title}</h1>
                    <p className="content">{text}</p>
                </div>
            </div>
        </div>
        )
    }
}
