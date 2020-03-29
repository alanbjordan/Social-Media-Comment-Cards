import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import ImagePost from './components/ImagePost2';
import faker from 'faker';
console.log(faker.name.firstName());
const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard >    
                <CommentDetail 
                    author = {faker.name.firstName()} 
                    date = "Today at 4:00pm" 
                    text = "Check out my new friend"  
                    image =  {faker.image.avatar()}
                />  
                <ImagePost 
                    image =  {faker.image.avatar()}
                />
                <div>
                    <h2>Notice</h2> 
                    Users wants to post the comment                
                </div>   
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author = {faker.name.firstName()} 
                    date = "Today at 1:00am"
                    text = "Follow my buddy"
                    image =  {faker.image.avatar()}
                />     
                <ImagePost 
                    image =  {faker.image.avatar()}
                />   
                <div>
                    <h2>Notice</h2> 
                    This users wants to post the comment                  
                </div>                
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = {faker.name.firstName()} 
                    date = "Today at 7:00am" 
                    text = "We lit now" 
                    image =  {faker.image.avatar()}
                />           
                <ImagePost 
                    image =  {faker.image.avatar()}
                />      
                <div>
                    <h2>Notice</h2> 
                    Users wants to post the comment                  
                </div>   
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = {faker.name.firstName()} 
                    date = "Today at 3:00am" 
                    text = "Best friend ever"  
                    image =  {faker.image.avatar()}
                />        
                <ImagePost 
                    image =  {faker.image.avatar()}
                />    
                <div>
                    <h2>Notice</h2> 
                    Users wants to post the comment                  
                </div>       
            </ApprovalCard>

        </div>
    )
}

export default App;
