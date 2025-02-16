import '../Styles/Quote.css'

export default function Quote(props){
    return(
        <div className = 'Quote'>
            <p className = 'Quote-Phrase'>{props.phrase}</p>
            <p className = 'Quote-Author'>{props.author}</p>
        </div>
    )
}