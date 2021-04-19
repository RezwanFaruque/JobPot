<template>
  <ul id="paginations">
    <li>
      <button @click="onclickFirstPage" :disabled="isInFirstPage" type="button">
        First
      </button>
    </li>

    <li>
      <button @click="onclickPrevPage" :disable="isInFirstPage" type="button">
        Previous
      </button>
    </li>

    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button
        type="button"
        @click="onclickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <li>
      <button @click="onclickNextPage" :disabled="isInLastPage" type="button">
        Next
      </button>
    </li>

    <li>
      <button @click="onclickLastPage" :disabled="isInLastPage" type="button">
        Last
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    maxvisibleButton: {
      required: false,
      default: 3,
      type: Number,
    },
    totalPages: {
      required: true,
      type: Number,
    },
    total: {
      required: true,
      type: Number,
    },
    perPage: {
      required: true,
      type: Number,
    },
    currentPage: {
      required: true,
      type: Number,
    },
  },

  // computed property
  computed: {
    //   if pagination is in startpage
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - this.maxvisibleButton;
      }

      return this.currentPage - 1;
    },

    endPage() {
        if(this.startPage + this.maxvisibleButton < this.totalPages){
            return this.startPage + this.maxvisibleButton;
        }else{
            return this.totalPages;
        }
    },

    pages() {
    
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },

    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },

  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    onclickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onclickPrevPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onclickPage(page) {
      this.$emit("pagechanged", page);
    },
    onclickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onclickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
  },
};
</script>
