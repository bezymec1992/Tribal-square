<template>
  <ul class="social-bar">
    <li>
      <a class="social-bar__ico-box" href="#">
        <img
          src="../assets/images/social-bar-icon_inst.svg"
          alt=""
          class="social-bar__ico"
        />
      </a>
    </li>
    <li>
      <a class="social-bar__ico-box" href="#">
        <img
          src="../assets/images/social-bar-icon_facebook.svg"
          alt=""
          class="social-bar__ico"
        />
      </a>
    </li>
    <li>
      <a class="social-bar__ico-box" href="#">
        <img
          src="../assets/images/social-bar-icon_twitter.svg"
          alt=""
          class="social-bar__ico"
        />
      </a>
    </li>
    <li>
      <a class="social-bar__ico-box" href="#">
        <img
          src="../assets/images//social-bar-icon_linkedin.svg"
          alt=""
          class="social-bar__ico"
        />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.social-bar {
  display: flex;
  list-style: none;
  padding: 0;

  & > li {
    display: inline-block;
    margin-right: 20px;

    @include max375 {
      margin-right: 22px;
    }
  }

  & > li:last-child {
    margin-right: 0;
  }
}

.social-bar__ico-box {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  text-decoration: none;
  margin: 0;
  padding: 0;
  height: 46px;
  width: 46px;
  // border-color: black;
  border-radius: 12px;
  // background: transparent;
  font-size: 0;

  @include max375 {
    height: 43px;
    width: 43px;
  }

  &:hover {
    transition: $hover-trans-dur;
    background: $iconHoverColor;
    border: none;
  }
}

// .social-bar__ico {
//   fill: black;
// }
</style>