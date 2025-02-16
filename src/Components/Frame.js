import '../Styles/Frame.css'
import Quote from './Quote'

export default function Frame(props){
    return(
        <div className = "Frame">
            <Quote author = {props.author} phrase = {props.phrase}/>
        </div>
    )
}