<template>
<div class="footer">
    <b-row>
        <b-col cols="1" class="logo-col">
             <div class="logo"> <i class="icon-logo"></i></div>
        </b-col>
        <b-col cols="1" class="links">
            <ul>
                <li>Products</li>
                <li>News</li>
                <li>Contact</li>
                <li>Your Cart</li>
            </ul>
        </b-col>
        <b-col >
            <div class="social-media-block">
                <div class="social-icons">
                    <i class="icon-social-icon-google"></i>
                    <i class="icon-social-icon-facebook"></i>
                    <i class="icon-social-icon-instragram"></i>
                    <i class="icon-social-icon-twitter"></i>
                </div>
                <div>
                    <p>
                        Privacy Policy <br>
                    © 2017 Google. All Rights Reserved
                    </p>
                </div>
            </div>
        </b-col>
      
    </b-row>
</div>
</template>

<style scoped lang="scss">

    .footer{
        padding-left: 47px;
        border-width: 1px 0px 0px 0px;
        border-style: solid ;
        border-color:  var(--black-05);
        .logo{  

                width: 100%;
                padding: 130px 0px;
            }
        ul{
            padding-top: 50px;
            list-style-type:none;
            padding-left: 0px;
            padding-right: 0px;
            li{ 
                color:var(--black-87);
                padding: 10px;
                margin: 8px;
            }
        }
        .social-media-block{ 
            padding-top: 100px;
            padding-right: 40px;
            float: right;
            .social-icons{
                padding-bottom:30px ;
               
                i{  
                    color: var(--black-54);
                    font-size: 25px;
                    padding:0px 25px;
                }
            }
            p{  
                color: var(--black-54);
                text-align: right;

            }
        }
    }

    @media screen and (max-width: 768px)   {
          .footer{
              padding-left:16px;
              .logo-col{
                  width: 100%;
                  .logo{
                        padding: 40px 0px;
                  }
              }
              .links{
                    width: 100%;
                    padding: 0px;
                    ul{ 
                        padding-top:0px;
                    }
              }
              .social-media-block{ 
                  float: left;
                  padding-top: 20px;
                  i{
                      &:first-child{
                          padding-left: 10px;
                      }
                  }
                  p{
                      text-align: left;
                      padding-left: 10px;
                  }
              }
          }
    }
    
</style>

<script>


export default {
    setup() {
        
    },
}
</script>
