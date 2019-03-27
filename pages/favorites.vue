<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in list" v-bind:key="i.id" xs4>
        <top-rated :desc="i.overview" :title="i.original_title" :filmId="i.id" :isImage="i.backdrop_path" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

</script>

<style>

</style>