import { api } from '@/lib/axios'

interface GetManagedRestaurantResponse {
  id: string
  name: string
  description: string
  managerId: string | null
  createdAt: Date | null
  updateAt: Date | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
