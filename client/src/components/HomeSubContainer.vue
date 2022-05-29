<template>
    <div  class="sub-container" :class="(imageAvailable?'imageincluded':'')">
        <div><img :src="compData.imageurl" ></div>
        <div class="text-content">
            <div class="main-text"><h2>{{compData.headerText}}</h2></div>
            <div><p class="sm_extralight sub-text">{{compData.subTextOne}}</p>
            <p class="sm_extralight sub-text">{{compData.subTextTwo}}</p></div>
            <div class="center button"><BButton variant="primary">{{compData.buttonText}}</BButton></div>
        </div>
    </div>
</template>
<style lang="scss">
.sub-container{
        background-color:var(--container-whitegrey) ;
        padding-top: 10%;
        padding-bottom: 10%;
        .text-content{
            width: 100%;
        }
        .main-text{
        
            opacity: 0.54;
        }
        .sub-text{
            margin: 0px;
            opacity: 0.87;
        }
        .button{
            padding-top: 45px;
            text-align: center;

        }
}
.imageincluded{
    background-color:var(--white) ;
    display: flex;
    padding: 0px;
    .text-content{
        padding: 0px 10%;
        margin-top: 10%;
        .main-text{
                h2{
                    text-align: left;   
                }
                
        }
        .sub-text{
                text-align: left;
        }
         .button{
             text-align: left;
         }
    }
}
@media screen and (max-width: 768px)   {
    .sub-container{
        flex-direction: column-reverse;
        img{    
            
            width: 100%;
        }
    }
}
    
  
</style>

<script>

export default {
    name: "HomeSubContainer",
     props:{ 
         compData:{ 
          imageurl:{
            type: String,
            default: ''
          },
          subTextOne :{
            type: String,
            default: 'this is a sub text'
          },
          subTextTwo :{
            type: String,
            default: 'this is a sub text'
          },
          headerText :{
            type: String,
            default: 'this is a header text'
          },
          buttonText :{
            type: String,
            default: 'this is a button'
          }
        
    }},
    computed :{
        imageAvailable (){
                return this.compData.imageurl !="";
        }
    }
    
    }
   
</script>

