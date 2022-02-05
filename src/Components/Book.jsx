function Book(props) {

    return (
        <div className="book">
            <div className='author'>{props.data.author}</div>
            <img clasname='img' src={props.data.img} alt="#" />
            <div clasname='title'> {props.data.title}</div>
            <div className='price'>{props.data.price}</div>
            <button className='btn-books' >pirkti</button>
            <div className= 'time'>{props.data.time}</div>

 
        </div>
    );
}

export default Book;