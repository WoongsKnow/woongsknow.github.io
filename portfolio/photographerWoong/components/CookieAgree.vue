<template>
  <div class="cookie-agree-bg">
    <p>이 웹 사이트는 쿠키를 사용하여 적절한 콘텐츠를 개인화하고 제공하며 웹 사이트 트래픽을 분석하고 광고를 게재합니다.
      쿠키정책에 대해 자세히 알아보고 언제든지 기본 설정을 변경하려면 이용 약관을 참조하십시오.
      "동의"를 클릭하면 약관에 동의하고 해당 사이트를 계속 사용할 수 있습니다.
    </p>
    <div class="btn-wrapper">
      <button >수락</button><button>거부</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cookie-agree',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .cookie-agree-bg {
    background-color: rgb(243, 238, 234);
    position: absolute;
    bottom: 0;
    padding: 10px;
  }
  .cookie-agree-bg p {
    text-align: center;
  }
  .btn-wrapper {
    width: 20%;
    margin: 0 auto;
  }
  .btn-wrapper button {
    background-color: rgb(51, 51, 51);
    color: rgb(243, 238, 234);
    font-size: 1em;
    width: 100px;
    height: 50px;
    margin-left: 10px;
  }
</style>