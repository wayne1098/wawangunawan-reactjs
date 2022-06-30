// import { Bars } from "react-loader-spinner";
import { BarLoader } from "react-spinners";
const Loader = () => {
    const style = {
        position: 'absolute',
        left: '50%'
    }

    return (
        <div style={style}>
            <BarLoader height={80} width={80} />
        </div>
    )
}

export default Loader;