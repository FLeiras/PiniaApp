import clientsApi from '@/api/clients-api'
import { /* computed, */ watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useQuery } from '@tanstack/vue-query'

import { useClientsStore } from '@/store/clients'
import type { Client } from '../interfaces/client'

const getClients = async ( page: number ): Promise<Client[]> => {

  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 1500)
  })

  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`)

  return data
}

const useClients = () => {
  const store = useClientsStore()
  const { clients, totalPages, currentPage } = storeToRefs(store)

  const { isLoading, data } = useQuery({
    queryKey: ['clients?page=', currentPage ],
    queryFn: () => getClients( currentPage.value ),
  })

  watch(data, (clients) => {
    if (clients) store.setClients(clients)
  })

  return {
    //? Properties
    isLoading,
    clients,
    totalPages,
    currentPage,

    //? Methods
    getPage(page: number){
      store.setPage(page)
    },

    //? Getters
    // totalPagesNumbers: computed(
    //   () => 
    // ),
  }
}

export default useClients
