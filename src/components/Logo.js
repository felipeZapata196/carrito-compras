import { Component } from "react";
const styles = {
    logo:{
        fontweight: '900',
        fontSize: '2rem'
    }
}
class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                Shop
            </div>
        )
    }
}

export default Logo;