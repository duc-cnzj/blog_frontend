<template>
    <form @submit.prevent="search" class="search w-50" id="search">
        <input  id="search-input" class="search__input" autocomplete="off" type="text" v-model="searchField" placeholder="You Know, for Search 🐳" />
    </form>

</template>

<script>
import _ from 'lodash'

export default {
  props: ['query'],

  data () {
    return {
      searchField: ''
    }
  },

  created () {
    if (this.query) {
      this.searchField = this.query
    }
  },

  watch: {
    query: function (v, o) {
      this.searchField = v
    },

    searchField: _.debounce((value, oldValue) => {
      window.search(value)
    }, 1000)
  },

  methods: {
    search () {
      window.search(this.searchField)
    }
  }
}
</script>

<style lang="scss" scoped>
$col-bg: #c5eee3;
$col-primary: #49f1c3;
$radius: 6px;
$padding: 25px;
$break-med-min: 480px;

%pane {
  margin-bottom: $padding;
  color: #333;
  background: white;
  border-radius: $radius;
  box-shadow: 0 4px 12px rgba(desaturate(darken($col-bg, 45%), 30%), 0.3);
}

%clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

body {
  background: $col-bg;
  font-size: 16px;
  font-weight: 300;
  font-family: "Source Sans Pro", "Fira Sans", sans-serif;
}

.hidden {
  display: none !important;
}

a {
  font-weight: normal;
  color: darken($col-primary, 25%);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.container {
  width: 90%;
  max-width: 520px;
  margin: 0 auto;
  padding: 40px 0;
}

.search {
  @extend %pane;
  display: flex;
  background-color: transparent;
  &__input {
    opacity: 0.5;
    height: 70px;
    padding: 0 $padding;
    font-family: inherit;
    font-size: 1em;
    font-weight: 300;
    color: inherit;
    border: none;
    background: transparent;
    min-width: 100px;
    flex-grow: 1;
    padding-right: 0;
    border-radius: 10px;
  }

  :focus {
    box-shadow: 0 0 10px red;
    background-color: white;
    opacity: 1;
    transition: all .5s ease-in-out;
  }
}

.result {
  @extend %pane;

  $img-width: 120px;
  $img-padding: $padding / 2;

  position: relative;
  padding: $padding;
  transition: opacity 0.2s;

  &.loading {
    opacity: 0;
  }

  &__overview {
    margin-bottom: $padding;
    padding-right: $img-width + $img-padding * 2 - $padding;

    .result--no-image & {
      padding-right: 0;
    }
  }

  h1 {
    font-size: 1.4em;
    font-weight: normal;
    margin-bottom: 0.5em;
  }

  &__description {
    $font-size: 1em;
    $line-height: 1.4;
    $lines: 3;
    height: $font-size * $line-height * $lines;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    font-size: $font-size;
    line-height: $line-height;

    .result--no-image & {
      height: auto;
    }
  }

  &__image-container {
    @extend %pane;

    display: block;
    $padding: $img-padding;
    width: $img-width;
    height: $img-width;
    position: absolute;
    right: -$padding;
    top: -$padding;
    padding: $padding;
    text-align: center;
    font-size: 0;

    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    .result--no-image & {
      display: none;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  }

  &__table {
    margin-bottom: $padding;
    width: 100%;
  }

  &__links {
    text-align: center;
    @extend %clearfix;

    a {
      display: block;
      clear: both;

      margin: $padding 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: $break-med-min) {
      a {
        display: inline-block;
        clear: none;
        float: right;
        margin: 0;
        max-width: 50%;
        text-align: right;

        &:first-child {
          float: left;
          text-align: left;
        }
      }
    }
  }
}

.table {
  &__row {
    line-height: 1.4;
    border-color: #eee;
    border-width: 1px 0 0 0;
    border-style: solid;

    &:last-child {
      border-bottom-width: 1px;
    }
  }

  &__cell {
    padding: $padding/2 0;
    vertical-align: middle;

    &:not(:first-child) {
      padding-left: $padding;
    }
  }
}

$circum: 81; // circumference of the search icon circle

@keyframes searchSpinIntro {
  from {
    stroke-dasharray: $circum;
  }

  to {
    stroke-dasharray: $circum / 4, $circum / 8, $circum / 8, $circum / 2;
  }
}

@keyframes searchSpin {
  0%,
  100% {
    stroke-dasharray: $circum / 4, $circum / 8, $circum / 8, $circum / 2;
  }

  0% {
    stroke-dasharray: $circum / 4, $circum / 8, $circum / 8, $circum / 2;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: $circum / 4, $circum / 8, $circum / 2, $circum / 8;
    stroke-dashoffset: $circum / 1.7;
  }

  100% {
    stroke-dashoffset: $circum;
  }
}

.duc {
  width: 100%;
  height: 100%;
}

</style>
