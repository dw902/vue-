<template>

   <div class="header">
         <div class="content-wrapper">
            <div class="avatar">
               <img width="64" height="64" :src='getseller.avatar'>
            </div>
            <div class="content">
                  <div class="title">
                     <span class="brand"></span>
                     <span class="name">{{getseller.name}}</span>
                  </div>
                  <div class="description">
                     {{getseller.description + ' / ' + getseller.deliveryTime + '分钟送达'}}
                  </div>
                  <div class="supports" v-if="getseller.supports">
                     <div class="supports_desc">
                        <span class="icon" :class="iconClassMap[getseller.supports[0].type]"></span>
                        <span class="text">{{getseller.supports[0].description}}</span>
                     </div>
                  </div>
            </div>
            <div class="support-count" v-if="getseller.supports" @click="showDetails()">
            <span class="count">{{getseller.supports.length+'个'}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <!-- 第二部分     公告 -->
  <div class="bulletin-wrapper" @click="showDetails()">
      <span class="bulletin-title"></span><span class="bulletin-text">{{getseller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
   </div>
     <div class="background">
      <img :src="getseller.avatar" width="100%" height="100%"/>
    </div>
    <div v-if="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{getseller.name}}</h1>
              <div class="star-wrapper">
                <star :size="48" :score="getseller.score"></star>
              </div>
              <div class="title">
                <div class="line"> </div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul v-if="getseller.supports" class="supports">
                <li class="support-item" v-for="(item,key) in getseller.supports" :key='key'>
                  <span class="icon" :class="iconClassMap[item.type]"></span>
                  <span class="text">{{item.description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"> </div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletin">{{getseller.bulletin}}</div>
            </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="hideDetail()"></i>
        </div>

    </div>
     </div>
         
         
      



   
   
    
</template>
<script>
import star from '../star/star'
/* eslint-disable */
export default {
   data () {
      return {
   detailShow: false
      }
   },
   props:['getseller'],
   created () {
      console.log(this.getseller)
      this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
   },
   methods: {
      showDetails() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
   },
   components:{star}
  
}
</script>
<style lang="less" scoped>
@import '../../common/styles/index.less';
@import '../../common/styles/icon.css';
.header{
   color: rgb(250, 242, 242);
   background-color: rgba(7, 17, 27,0.5);
   position: relative;
   overflow: hidden;
   // 超出范围截取
   .content-wrapper{
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar{
         display: inline-block;
         vertical-align: top;
         img{
            border-radius: 5px;
         }
         
      }
      .content{
         font-size:14px;
         display: inline-block;
         margin-left: 16px;
         // vertical-align: top;
         .title{
            margin:2px 0 8px 0;
            .brand{
               width: 30px;
               height: 18px;
               display: inline-block;
               .bg-image('brand');
               background-size: 30px 18px;
               background-repeat: no-repeat; 
               vertical-align: top;
               
            }
            .name{
               margin-left: 6px;
               font-size: 16px;
               line-height: 18px;
               font-weight: bold;

            }

         }
         .description{
            margin-bottom: 10px;
            line-height: 12px;
            font-size: 12px;
            background-size: 12px 12px;
            background-repeat: no-repeat; 
            vertical-align: top;
            // display: inline-block;
          
         }
         .supports{
            .icon{
               display: inline-block;
               vertical-align: top;
               width: 12px;
               height: 12px;
               margin-right: 4px;
               background-size:12px 12px;
               background-repeat: no-repeat;
               &.decrease{
                  .bg-image('decrease_1');
                  }
              
               &.discount{
                  .bg-image('discount_1');
               }
               
               &.guarantee{
                  .bg-image('guarantee_1');
               }
               
               &.invoice{
                  .bg-image('invoice_1');
               }
               
               &.special{
                  .bg-image('special_1');
               }
             
               

            }
            .text{
             font-size: 10px;
             line-height: 10px; 
            }
         }
      }
      .support-count{
         position: absolute;
         right:12px;
         bottom: 34px;
         padding: 0 8px;
         height: 24px;
         line-height: 24px;
         border-radius: 12px;
         background-color: rgba(0,0,0,0.2);
         text-align: center;
         .count{
            vertical-align: top;
            font-size: 10px;

         }
         .icon-keyboard_arrow_right{
            font-size: 10px;
            margin-left :2px;
            line-height: 24px;
         }
      }
   }
   .bulletin-wrapper{
   //  font-size: 0;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
    background-color: rgba(7,17,27,0.2);
    position: relative;
    .bulletin-title{
       vertical-align: top;
       display: inline-block;
       width: 22px;
       height: 12px;
       margin-top: 8.5px;
       .bg-image('bulletin');
       background-size: 22px 12px;
       background-repeat: no-repeat;
    }
    .bulletin-text{ 
       font-size: 10px;
       margin: 0 4px;  
    }
    .icon-keyboard_arrow_right{
     position: absolute;
     font-size: 10px;
     top: 8px;
     right: 12px; 
    }

   }
   .background{
    position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);   
   }
   .detail{
      position: fixed;
      top:0px;
      left: 0px;
      z-index: 100;
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27,0.8);
      backdrop-filter: blur(10px);
      .detail-wrapper{
         min-height: 100%;
         width: 100%;
         .detail-main{
            margin-top:64px;
            padding-bottom: 64px;
            .name{
               line-height: 16px;
               text-align: center;
               font-size: 16px;
               font-weight: 700;

            }
            .star-wrapper{
               margin: 16px 11px 28px 0;
               text-align: center;
            }
            .title{
               display: flex;
               width: 80%;
               margin: 0 auto 24px auto;
               .line{
               position: relative;
               flex: 1;
               // height: 1px;
               top:-6px;
               border-bottom: solid 1px  rgba(255,255,255,0.2);
               }
               .text{
                  padding: 0 12px;
                  font-size: 14px;
                  font-weight: 700;
                 
                  
               }
                }
            .supports{
               padding: 0px 0px 28px 36px;
               .support-item{
                  color: white;
                  padding: 0 6px 12px 16px;
                  .text{
                     vertical-align: middle;
                     font-size: 12px;
                     font-weight: 200;
                     color:rgb(255,255,255);
                     line-height: 12px;
                        }
                  .icon{
                        display: inline-block;
                        vertical-align: top;
                        width: 16px;
                        height: 16px;
                        margin-right :6px;
                        background-size: 100% 100%;
                        background-repeat :no-repeat;
                     &.decrease{
                        .bg-image('decrease_2');
                        }
                     &.discount{
                        .bg-image('discount_2');
                        }
                     &.guarantee{
                        .bg-image('guarantee_2');
                        }
                     &.invoice{
                        .bg-image('invoice_2');
                        }
                     &.special{
                        .bg-image('special_2');
                        }
                     }   
               }
               
            }
            .bulletin{
                  padding :0 48px;
                  font-size: 12px;
                  font-weight: 200;
                  color: rgb(255,255,255);
                  line-height :24px;
               }   
               
            
         }
         
      }
      .detail-close{
            position: relative;
            width: 32px;
            height: 32px;
            margin: -64px auto 0 auto;
            clear: both;
            font-size: 32px;
            color: rgba(255, 255, 255, 0.5);
         }
   }

}

</style>

