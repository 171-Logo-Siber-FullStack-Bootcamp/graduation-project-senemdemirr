<template>
  <div class="container-fluid">
    <div class="tab-content jump">
      <div id="product-1" class="tab-pane active">
        <div class="row">
          <div
            class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
            v-for="item in msg"
            :key="item.id"
          >
            <div class="single-product-wrap mb-35">
              <div class="product-img product-img-zoom mb-20">
                <a href="product-details.html">
                  <img :src="item.image" alt="" />
                </a>
                <div class="product-action-wrap">
                  <div class="product-action-left">
                    <button>
                      <i class="icon-basket-loaded"></i>Add to Cart
                    </button>
                  </div>
                  <div class="product-action-right tooltip-style">
                    <button data-toggle="modal" data-target="#exampleModal">
                      <i class="icon-size-fullscreen icons"></i
                      ><span>Quick View</span>
                    </button>
                    <button class="font-inc">
                      <i class="icon-refresh"></i><span>Compare</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="product-content-wrap">
                <div class="product-content-left">
                  <h4>
                    <a href="product-details.html">{{ item.name }}</a>
                  </h4>
                  <div class="product-price">
                    <span>${{ item.price }}</span>
                  </div>
                </div>
                <div class="product-content-right tooltip-style">
                  <button class="font-inc">
                    <i class="icon-heart"></i><span>Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../service/index.js";

let allData = [];

data.then((res) => {
  allData = res;
});

export default {
  name: "ProductCards",
  data() {
    return {
      msg: allData,
    };
  },
};
</script>

