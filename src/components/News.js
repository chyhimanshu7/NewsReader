import React,{Component} from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";







export default class News extends Component {

 




static defaultProps={

country:'in',
pageSize: 9,
category:'general'
}

static propTypes={

country: PropTypes.string,
pageSize: PropTypes.number,
category:PropTypes.string

}




fetchMoreData = async () => {  
  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  this.setState({page: this.state.page + 1})

  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
  })
};

     
    
    

      async updateNews(pageNo){
        this.props.setProgress(10);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }


      handleNextClick = async ()=>{




this.setState({ page: this.state.page + 1 });
this.updateNews();
}
    

handlePreClick = async ()=>{


  
  this.setState({ page: this.state.page - 1 });
    this.updateNews();


}

capitalizeFirstLetter =(string)=>{

  return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(props){
        super(props);
        //let art=Articles;
        this.state={
        
        articles:[],  
          loading: false,
        page:1,
        totalResults:0
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
      }
        
async componentDidMount(){
    


this.updateNews();

}




        

    render(){
    
           
        
    return(

<div className='container my-3  '>
<h1 className='text-center mt-5 '>NewsMonkey- Top headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
{this.state.loading &&<Spinner/>}

<InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                > 
                
                <div className="container">


<div className='row'>
{this.state.articles.map((element)=>{

return <div className='col-md-4 mt-3' key ={element.url}>
<NewsItem title ={element.title} description={element.description} imageUrl ={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
</div>


})}




</div>
</div>

</InfiniteScroll>

{/* <div className='container d-flex justify-content-between'>
<button disabled={this.state.page<=1} type='button'onClick={this.handlePreClick} className='btn btn-dark'>&larr; Previous</button>
<button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' onClick={this.handleNextClick} className='btn btn-dark'>Next &rarr;</button>


</div> */}

</div>


    )
    }
  }