<script setup lang="ts">
import useClients from '../composables/useClients';
import ClientList from '@/clients/components/ClientList.vue'
import PaginationsNumbers from '../components/PaginationsNumbers.vue'
import LoadingModal from '@/shared/components/LoadingModal.vue';

const { isLoading, clients, currentPage, totalPages, getPage } = useClients()

</script>

<template>
  <div>
    <h1>Listado de clientes</h1>

    <!-- Client List -->
    <ClientList :clients="clients"/>

    <!-- PaginationsNombers -->
    <PaginationsNumbers 
     :current-page="currentPage"
     :total-pages="totalPages"
     @page-changed="getPage"
    />

    <!-- LoadingModal -->
    <LoadingModal v-if="isLoading"/>
  </div>
</template>

<style scoped></style>
