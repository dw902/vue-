<template>
    <div class="reatingselete">
      <div class="rating-type">
<!--        <span>{{desc.all}}</span>-->
<!--        <span>{{desc.negative}}</span>-->
<!--        <span>{{desc.positive}}</span>-->
        <div class="classify">
<!--          <span class="item" :class="{'active':item.active,'bad':index==2,'badActive':item.active&&index==2}">{{desc.all}}-->
<!--          <span class="count">45</span>-->
<!--          </span>-->
<!--          <span class="item negative">{{desc.negative}}-->
<!--          <span class="count">45</span>-->
<!--          </span>-->
          <span class="item positive" v-for="(item,index) in desc " :key='index' :class="{'active':item.active,'bad':index==2,'badActive':item.active&&index==2}" @click="filterEvel(item)">{{item.name}}
          <span class="count">{{item.count}}</span>
          </span>
        </div>
      </div>
      <div class="switch" @click="evelflag=!evelflag">
        <span class="icon-check_circle" :class="{'on':evelflag}"></span>
        <span class="text">只看有内容的评价</span>
      </div>
      <div class="evel-list">
        <ul>
          <li class="evel" v-for="evel in evelArr">
            <div class="userInfo">
              <div class="time">{{evel.rateTime | time}}</div>
              <div class="user">
                <span>{{evel.username}}</span>
                <span class="avatar"><img :src="evel.avatar" width="12" height="12"></span>
              </div>
            </div>
            <div class="content">
              <span class="icon" :class="evel.rateType?'icon-thumb_down':'icon-thumb_up'"></span>
              <span class="text">{{evel.text}}</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  const ALL =2
    export default {
        props: {
          ratings:{
            type:Array,
            default(){
              return []
            }
          },
          selectType:{
            type: Number,
            // eslint-disable-next-line vue/require-valid-default-prop
            default: ALL
          },
          onlyContent:{
            type: Boolean,
            default: false

          },
          desc: {
            type: Array


          },
          food: Object


        },
      computed: {
        evelArr () {
          let selectIndex = 0
          this.desc.forEach((data, index) => {
            if (data.active) {
              selectIndex = index
            }
          })
          // if (this.detailWrapper) {
          //   this.$nextTick(() => {
          //     this.detailWrapper.refresh()
          //   })
          // }
          return selectIndex ? this.food.ratings.filter((data) => this.evelflag ? data.rateType === selectIndex - 1 && data.text : data.rateType === selectIndex - 1) : this.food.ratings.filter((data) => this.evelflag ? data.text : true)
        }
      },
      data () {
          return {
            evelflag: true
          }
      },
      methods: {
        filterEvel (item) {
          this.desc.forEach((data) => {
            data.active = false
          })
          item.active = true
        }
      }

    }
</script>
<style lang="less" scoped>
  .reatingselete{
    .rating-type{
      padding: 10px 0;
      margin: 0 10px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .item {
        display: inline-block;
        font-size: 12px;
        padding: 8px 12px;
        line-height: 16px;
        background: rgba(0, 160, 220, 0.2);
        color: rgb(77, 85, 95);
        margin-right: 8px;
        .count {
          font-size: 8px;
          padding-left: 2px;
        }
        &.active {
          color: white;
          background: rgb(0, 169, 220);
        }
        &.bad {
          background: rgba(77, 85, 93, 0.2);
        }
        &.badActive {
          background: #4d555d;
        }
      }

    }
    .switch {
      font-size: 12px;
      width: 100%;
      padding: 12px 0 12px 18px;
      color: rgb(147, 153, 159);
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .icon-check_circle {
        font-size: 24px;
        vertical-align: middle;
        &.on {
          color: #00c850;
        }
      }
    }
    .evel-list {
      margin: 0 18px;
      .evel {
        padding: 16px 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .userInfo {
          display: flex;
          color: rgb(147, 153, 159);
          font-size: 10px;
          line-height: 12px;
          .time {
            flex: 1;
          }
          .user {
            flex: 1;
            text-align: right;
            .avatar {
              img {
                padding-left: 6px;
                border-radius: 50%;
              }
            }
          }
        }
        .content {
          padding-top: 6px;
          .icon {
            font-size: 12px;
            line-height: 24px;
            &.icon-thumb_up {
              color: rgb(0, 160, 220);
            }
            &.icon-thumb_down {
              color: rgb(147, 153, 159);
            }
          }
          .text {
            font-size: 12px;
            color: rgb(7, 17, 27);
            line-height: 16px;
            padding-left: 4px;
          }
        }
      }
    }
  }


</style>
