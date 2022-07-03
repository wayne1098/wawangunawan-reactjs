import { BarLoader } from "react-spinners";
const Loader = () => {
    const style = {
        position: 'absolute',
        align: 'center'
    }

    return (
        <div style={style} >
            <BarLoader color="#1D8BF1" height={11} width={1111}/>
        </div>
    )
}

export default Loader;