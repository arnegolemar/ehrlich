import Header from "../Header/index";

const NonAuth = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            {/* <Footer/> */}
        </div>
    )
}

export default NonAuth;