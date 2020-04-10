<template>
  <div>
    <div class="container px-0 px-md-3">
      <header class="header">
        <div
          class="header-img bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1496174883999-edcc585a373f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);"
        ></div>
        <div class="row justify-content-center rectangle-section">
          <div class="col-md-10">
            <div class="row no-gutters">
              <a href="#featured" class="col-4 rectangle-img-wrap">
                <span class="rectangle-text">蛋糕</span>
                <div class="four-sides rectangle-over"></div>
                <div
                  class="rectangle-img bg-cover"
                  style="background-image: url(https://images.unsplash.com/photo-1504473089979-b1c4993a9653?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9db69b72e1f7d1b4e5c81cee531108ff&auto=format&fit=crop&w=634&q=80);"
                ></div>
              </a>
              <a href="#recommend" class="col-4 rectangle-img-wrap">
                <span class="rectangle-text">餅乾</span>
                <div class="four-sides rectangle-over"></div>
                <div
                  class="rectangle-img bg-cover"
                  style="background-image: url(https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ce5bbf66bdb4ed3b6965f0b3618aa43&auto=format&fit=crop&w=654&q=80);"
                ></div>
              </a>
              <a href="#new-product" class="col-4 rectangle-img-wrap border-0">
                <span class="rectangle-text">冰淇淋</span>
                <div class="four-sides rectangle-over"></div>
                <div
                  class="rectangle-img bg-cover"
                  style="background-image: url(https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73ed228f25bdefd2291c242f6d390fca&auto=format&fit=crop&w=634&q=80);"
                ></div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
// //backgruond
// .bg-cover {
//   background-size: cover;
//   background-position: center center;
// }

// // four-sides
// .four-sides {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
// }

// .header {
//   position: relative;

//   .header-img {
//     height: 496px;
//   }
//   .header-img-context {
//     position: absolute;
//     right: 40px;
//     top: 40px;
//   }
// }

// // rectangle box
// .rectangle-section {
//   margin-top: -90px;
// }

// .rectangle-img-wrap {
//   height: 256px;
//   position: relative;
//   writing-mode: vertical-lr;
//   display: flex;
//   overflow: hidden;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   z-index: 1;
//   border-right: solid 1px white;
//   .rectangle-over {
//     background-color: rgba(theme-color("primary"), 0.8);
//     transition: 0.5s;
//   }

//   // 互動
//   &.active,
//   &:hover,
//   &:focus {
//     color: theme-color("primary");
//     font-weight: bolder;
//     .rectangle-over {
//       background-color: rgba(theme-color("accent"), 0.8);
//     }
//     .rectangle-img {
//       filter: blur(0); //互動時圖片清晰
//     }
//   }
// }

// .rectangle-text {
//   font-size: 24px;
//   letter-spacing: 10px;
//   z-index: 2;
//   text-decoration: none;
// }

// .rectangle-img {
//   position: absolute;
//   top: -10px; //先超過再在外層加overflow:hidden
//   bottom: -10px;
//   right: -10px;
//   left: -10px;
//   filter: blur(5px); //模糊
//   z-index: -1;
// }
</style>