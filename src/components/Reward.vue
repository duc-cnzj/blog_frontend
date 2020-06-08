<template>
  <div class="reawrd">
    <div class="middle pay">
      <div class="front item">
        <img :src="front" alt srcset />
      </div>
      <div class="back item">
        <img src="@/assets/alipay.jpeg" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
import alipay from '@/assets/alipay.jpeg'
import wechatpay from '@/assets/wechatpay.jpeg'

export default {
  data () {
    return {
      front: wechatpay,
      back: alipay
    }
  }
}
</script>
<style lang="scss" scoped>
$minWidth: 200px;
$minHeight: 273px;

.middle {
  perspective: 700px;
  width: 200px * .5;
  height: 273px;
  margin: 20px auto;
}

.pay .item {
  position: absolute;
  backface-visibility: hidden;
  transition: 0.3s;
}

.pay .item img {
  width: 200px;
  height: 273px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--indigo);
}

.front {
  transform: rotateX(0deg);
}

.back {
  transform: rotateX(-180deg);
}

.pay img {
  width: 200px;
}

.pay:hover .front {
  transform: rotateX(180deg);
}
.pay:hover .back {
  transform: rotateX(0deg);
}

@media (min-width: 576px) {
  .middle {
    width: $minWidth * 0.5;
    height: $minHeight * 0.5;
  }

  .pay .item img {
    width: $minWidth * 0.5;
    height: $minHeight * 0.5;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .middle {
    width: $minWidth * 1;
    height: $minHeight * 1;
  }

  .pay .item img {
    width: $minWidth * 1;
    height: $minHeight * 1;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .middle {
    width: $minWidth * 1.2;
    height: $minHeight * 1.2;
  }

  .pay .item img {
    width: $minWidth * 1.2;
    height: $minHeight * 1.2;
  }
}
</style>
