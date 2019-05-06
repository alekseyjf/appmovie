<template>
  <div class="popup">
    <div class="popup__overlay">
      <div class="popup__wrap">
        <p>popup 1</p>
        <v-btn color="primary" @click="removeFavorite">allow</v-btn>
        <v-btn color="primary" @click="cancel">disallow</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'popup',
    data(){
      return {

      }
    },
    props: ['filmId'],
    methods: {
      removeFavorite() {
        this.$emit('getFilmId', this.filmId);
        //this.$emit('close', false);
        for(let i=0; i < this.$store.getters.retFavoritesList.length; i++) {
          if(this.$store.getters.retFavoritesList[i].id == this.filmId) {
            this.$store.dispatch('removeFavorite', i);
            return
          }
        }
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