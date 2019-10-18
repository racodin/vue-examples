<template>
  <div id="demo">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">custom header</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "ModalComponent",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style lang="scss" scoped>
#demo {
  padding: 40px;
  text-align: center;
}
</style>