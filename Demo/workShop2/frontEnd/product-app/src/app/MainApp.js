import React from "react";
import MainPage from "../components/MainPAge";
class MainApp extends React.Component {

    loginPage=()=>{
        this.props.history.push('/login')
    }
    newUserButtonHandler=()=>{
        this.props.history.push('/signup')
    }
    render() { 
        return <div>
            <MainPage loginPage={this.loginPage}
            newUserButtonHandler={this.newUserButtonHandler}></MainPage>
        </div>;
    }
}
 
export default MainApp;