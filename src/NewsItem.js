import React,{Component} from 'react'


export default class NewsItem extends Component {

    render(){
   let {imageUrl,title,description,newsUrl,author,date}=this.props;
    
    return(

<div className='my-3 mx-8'>

<div className="card" style={{width: "18rem"}}>
  <img src={ !imageUrl ? "https://images.cnbctv18.com/uploads/2023/04/earnings-shutterstock.jpg?im=FitAndFill,width=500,height=300":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on { new Date(date).toGMTString()}</small></p>
    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>

</div>


    )
    }}