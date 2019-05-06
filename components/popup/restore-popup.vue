<template>
  <div class="popup">
    <div class="popup__overlay">
      <div class="popup__wrap">
        <p>Restore popup</p>
        <v-btn color="primary" @click="restore">Return</v-btn>
        <v-btn color="primary" @click="cancel">Cancel</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'innerPopup',
    data(){
      return {

      }
    },
    props:['restoreId'],
    created(){
      console.log('this.filmId sadsadas asd13212321d', this.restoreId);
    },
    methods: {
      restore() {
        console.log('this.filmId restore', this.restoreId);
        this.$store.dispatch('setFavorite', this.restoreId);
        this.$emit('close', false);
      },
      cancel() {
        this.$emit('close', false)
      }
    }
  }
</script>

<style>
  .popup,
  .popup__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .popup__overlay {
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 24px;
    text-align: center;
  }
</style>