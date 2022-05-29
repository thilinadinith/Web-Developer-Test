<template>
    <div class="bg">
       <img :src="compData.imageurl" >
       <div class="text">
           <p class="sm">{{compData.subText}}</p>
            <h1>{{compData.headerText}}</h1>
       </div>
    </div>
</template>

<style scoped lang="scss">
    .bg{    
            margin-top: 100px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        img{
            width:100%;
            height: 100%;
            
        }
        .text{  
            position: absolute;
            top: calc(100vw - 65vw);
            left: calc(100vw - 80vw);
            transform: translate(-50%, -50%);
            h1{
                font-weight: 200;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.07;
                letter-spacing: -1px;
                color: #fff;
            }
         

            .sm{    
                    margin: 0px;
                    font-weight: 500;
                    opacity: 0.87;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.71;
                    letter-spacing: 0.08px;
                    color: var(--pale-white) !important;
            }
            
        }
    }

    @media screen and (max-width: 435px)   {
    .bg{
        flex-direction: column-reverse;
        img{    
            height: 320px;
            width: auto;
            margin-left: -20%;
            margin-top: -30px;
        }
        .text{
            top:50%;
            left:calc(100vw - 65vw);
        }
    }
}

@media screen and (min-width:435px) and (max-width: 768px) {
     .bg{
        flex-direction: column-reverse;
        img{    
            height: 100%;
            width: 100%;
            margin-left: 0;
            margin-top: -30px;
        }
        .text{
            top: calc(100vw - 60vw);
            left: calc(100vw - 70vw);
        }
    }
}
   

</style>

<script>
export default {
    name: "HomeMainImage",
    props:{ compData:{ 
          imageurl:{
            type: String,
            default: ''
          },
          subText :{
            type: String,
            default: 'this is a sub text'
          },
          headerText :{
            type: String,
            default: 'this is a header text'
          }
        
    }}
    
    }
</script>