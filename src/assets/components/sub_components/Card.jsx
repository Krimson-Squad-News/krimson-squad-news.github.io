export const Card = ({card_details}) =>{
    let category = "";
    function declare_category(catg){
        if(catg == "cve"){
           return "Threats"; 
        }
        else if(catg == "tech"){
            return "Tech";
        }
        else{
            return "Education";
        }
    }
    category = declare_category(card_details.category);
   
       if(card_details.fetch_type !== "full"){
        return (
            <>
         <a href="article.html"><article class="card">
         <img src={card_details.img} alt=""/>
         <div>
             <div className={"category category-"+card_details.category}>{category}</div>
             <h3>
                {card_details.title}
             </h3>
             <p>{card_details.desc}</p>
         </div>
     </article></a>
     </>
      )
     
       }
       else{
        return (
            <>
         <a href="article.html"><article class="card">
         <img src={card_details.img} alt=""/>
         <div>
             <h1>
                {card_details.title}
             </h1>
             <p>{card_details.data}</p>
         </div>
     </article></a>
     </>
      )
     
       }
 
    
}