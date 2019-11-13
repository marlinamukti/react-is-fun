import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'

class Library extends React.Component  {
    static defaultProps = {
        books:[
            {"title":"Tahu Bulat", "author":"Mamang Tahu","pages":1000}
        ]
    }
    
    state = {cucup:true,
                freeBookmark: false,
                hiring: true,
                data:[],
                loading:false
    }
    
    componentDidMount (){
        this.setState({loading:true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate(){
        console.log("The component just updated")
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            cucup: !prevState.cucup,
            freeBookmark: !prevState.freeBookmark
        }))
    }
    render(){
        const {books}= this.props
        return(
            <div>
                {this.state.hiring ? <Hiring/>:<NotHiring/>}
                {this.state.loading 
                ? "loading.."
                :   <div>
                        {this.state.data.map(product =>{
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the week</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100}></img>
                                </div>
                            )
                        })}
                    </div>
                }
                <h1>The Library is {this.state.cucup? 'tutup':'buka'}</h1>
                {books.map(
                    (book,i) =>
                    <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}/>
                )}
                <button onClick={this.toggleOpenClosed}>Berubah</button>
            </div>
        )
    }
}  

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author:PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library